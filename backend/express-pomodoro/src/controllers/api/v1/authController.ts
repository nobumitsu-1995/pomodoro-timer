/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import { jwksUri, port } from '../../../main'

const issuer = process.env.AUTH0_DOMAIN || ''

const getKid = async (token: string) => {
  const decoded = jwt.decode(token, { complete: true })
  if (!decoded) throw 'decode failed'
  return decoded.header.kid
}

const getPublicKey = async (kid: string) => {
  const client = jwksClient({ jwksUri })
  const key = await client.getSigningKey(kid)
  const publicKey = key.getPublicKey()
  if (!publicKey) throw "can't get publicKey"
  return publicKey
}

const verifyToken = async (token: string, publicKey: string) => {
  const verifiedToken = await jwt.verify(token, publicKey, {
    audience: `http://localhost:${port}`,
    issuer,
  })
  if (!verifiedToken) throw "can't get verifiedToken"
  return verifiedToken
}

export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization || process.env.TOKEN_TEST || ''
  const kid = await getKid(token).catch((err) => {
    console.log(err)
    console.log('failed get kid')

    return res.status(403).json({
      err,
    })
  })
  const publicKey = await getPublicKey(kid as string).catch((err) => {
    console.log(err)
    console.log('failed get publicKey')
    return res.status(403).json({
      err,
    })
  })
  const verifiedToken = await verifyToken(token, publicKey as string).catch(
    (err) => {
      console.log(err)
      console.log('failed get verifiedToken')
      return res.status(403).json({
        err,
      })
    }
  )
  res.locals.user = await verifiedToken
  next()
}
