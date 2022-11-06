/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import jwksClient from 'jwks-rsa'
import { accessToken, jwksUri } from '../../../main'

const issuer = process.env.AUTH0_DOMAIN || ''

const decodeJWT = () => {
  const decoded = jwt.decode(accessToken, { complete: true })
  return decoded
}

const getPublicKey = async (kid: string) => {
  const client = jwksClient({ jwksUri })
  const key = await client.getSigningKey(kid)
  const publicKey = key.getPublicKey()
  return publicKey
}

const verifyToken = async (publicKey: string) => {
  const verifiedToken = await jwt.verify(accessToken, publicKey, {
    audience: 'http://localhost:80',
    issuer,
  })
  return verifiedToken
}

export const authenticateJWT = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const kid = await decodeJWT()?.header.kid
  if (!kid) return next()
  const publicKey = await getPublicKey(kid)
  const verifiedToken = await verifyToken(publicKey)
  res.locals.user = verifiedToken
  next()
}
