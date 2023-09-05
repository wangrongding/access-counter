// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import kv from '@vercel/kv'
import type { NextApiRequest, NextApiResponse } from 'next'

interface CountOptions {
  name?: string
  length: number
}

export async function getCount({ name, length }: CountOptions) {
  let views = name ? await kv.incr(name) : '0123456'
  views = views.toString().padStart(length, '0')
  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="${views.toString().length * 10}">
    <g><text x="0" y="15" fill="#000">${views}</text></g>
  </svg>`
  return svg
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('content-type', 'image/svg+xml; charset=utf-8')
  res.setHeader('cache-control', 'max-age=0, no-cache, no-store, must-revalidate')
  const { name, length = 7 } = req.query

  const count = await getCount({
    name: name?.toString(),
    length: Number(length),
  })
  res.send(count)
}
