// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import client from "libs/client";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // res.status(200).json({ name: 'John Doe' })
  await client.user.create({
    data: {
      id: 123,
      name: "nuuuri",
      email: "sbfl125@gmail.com",
    },
  });

  res.json({
    ok: true,
  });
}
