import kv from "@vercel/kv";
import type { NextApiRequest, NextApiResponse } from "next";

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
    await kv.set(name?.toString(), count);
    res.send(`
    🌸 set ok ! 
    name: ${name} 
    count: ${count} 
    Date :${new Date()}`);
  } catch (error: any) {
    res.send(error.message);
  }
}
