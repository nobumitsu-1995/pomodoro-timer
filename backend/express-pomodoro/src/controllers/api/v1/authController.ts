/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import { jwksUri, port } from '../../../main'

const issuer = process.env.AUTH0_DOMAIN || ''

const getKid = async (token?: string) => {
  if (!token) throw new Error('token is undefined')
  const decoded = jwt.decode(token, { complete: true })
  if (!decoded) throw new Error('decode failed')
  return decoded.header.kid
}

const getPublicKey = async (kid: string) => {
  const client = jwksClient({ jwksUri })
  const key = await client.getSigningKey(kid)
  const publicKey = key.getPublicKey()
  if (!publicKey) throw new Error("can't get publicKey")
  return publicKey
}

const verifyToken = async (publicKey: string, token?: string) => {
  if (!token) throw new Error('token is undefined')
  const verifiedToken = await jwt.verify(token, publicKey, {
    audience: `http://localhost:${port}`,
    issuer,
  })
  if (!verifiedToken) throw new Error("can't get verifiedToken")
  return verifiedToken
}

export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization || ''
    const kid = await getKid(token)
    const publicKey = await getPublicKey(kid as string)
    const verifiedToken = await verifyToken(publicKey as string, token)
    res.locals.user = await verifiedToken
    next()
  } catch (e) {
    console.error(e)
    return res.status(403).json({ e })
  }
}
