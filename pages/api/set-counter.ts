import kv from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";

export async function setCounter(name: string, count: string) {
  await kv.set(name, count);
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader(
    "cache-control",
    "max-age=0, no-cache, no-store, must-revalidate"
  );
  res.setHeader("content-type", "text/plain;charset=utf-8");
  const { name = "test", count = "1234567" } = req.query;
  try {
    await setCounter(name?.toString(), count?.toString());
    res.send(`
    🌸 set ok ! 
    name: ${name} 
    count: ${count} 
    Date :${new Date()}`);
  } catch (error: any) {
    res.send(error.message);
  }
}
