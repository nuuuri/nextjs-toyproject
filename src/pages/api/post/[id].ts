import client from "libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET":
      try {
        const post = await client.post.findUnique({
          where: {
            id: parseInt(id as string),
          },
          include: {
            user: {
              select: {
                name: true,
              },
            },
          },
        });
        return res.status(200).json({ success: true, data: post });
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    default:
      res.status(400).json({ success: false });
  }
}
