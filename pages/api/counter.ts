// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import kv from '@vercel/kv'
import fs from 'fs'
import path from 'path'
import mimeType from 'mime-types'
import sizeOf from 'image-size'
import type { NextApiRequest, NextApiResponse } from 'next'

export const config = {
  runtime: 'nodejs', // edge | nodejs
}

interface CountOptions {
  count?: string
  theme?: string
  length?: number
  name?: string
}

const themePath = path.resolve('.', 'theme')
const themeList: any = {}

function convertToDataUri(path: string) {
  const mime = mimeType.lookup(path)
  const base64 = fs.readFileSync(path).toString('base64')

  return `data:${mime};base64,${base64}`
}

fs.readdirSync(themePath).forEach(theme => {
  if (!(theme in themeList)) themeList[theme] = {}
  const imgList = fs.readdirSync(path.resolve(themePath, theme))
  imgList.forEach(img => {
    const imgPath = path.resolve(themePath, theme, img)
    const name = path.parse(img).name
    const { width, height } = sizeOf(imgPath)

    themeList[theme][name] = {
      width,
      height,
      data: convertToDataUri(imgPath),
    }
  })
})

export function getCountImage({ count = '0', theme = '001', length = 7 }: CountOptions) {
  if (!(theme in themeList)) theme = '001'
  // This is not the greatest way for generating an SVG but it'll do for now
  const countArray = count.toString().padStart(length, '0').split('')
  let x = 0,
    y = 0
  const parts = countArray.reduce((acc, next, index) => {
    const { width, height, data } = themeList[theme][next]
    const image = `${acc} <image x="${x}" y="0" width="${width}" height="${height}" xlink:href="${data}" />`
    x += width
    if (height > y) y = height
    return image
  }, '')

  return `<?xml version="1.0" encoding="UTF-8"?>
  <svg width="${x}" height="${y}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="image-rendering: pixelated;">
    <title>Access Count</title><g>${parts}</g>
  </svg>`
}

export function getMultipleImgList() {
  const themeList = ['001', '002', '003', '004', '005', '006']
  const imgList = themeList.map(theme => {
    const countImg = getCountImage({ count: '0123456789', theme, length: 10 })
    const encodedString = btoa(countImg)
    const dataURI = `data:image/svg+xml;base64,${encodedString}`
    return dataURI
  })
  return imgList
}
export async function getCount({ name, theme, length }: CountOptions) {
  const views = name ? await kv.incr(name) : '0123456'
  console.log('🚀🚀🚀 / views:', name, theme, length, views)
  return getCountImage({ count: views.toString(), theme, length })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('content-type', 'image/svg+xml; charset=utf-8')
  res.setHeader('cache-control', 'max-age=0, no-cache, no-store, must-revalidate')
  const { name, theme = '001', length = 7 } = req.query

  const count = await getCount({
    name: name?.toString(),
    theme: theme?.toString(),
    length: Number(length),
  })
  res.send(count)
}
