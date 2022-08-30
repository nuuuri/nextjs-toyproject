import client from "libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = req.query.id;

  switch (req.method) {
    case "GET":
      try {
        return handleGET(postId as string, res);
      } catch (error) {
        return res.status(400).json({ success: false });
      }

    case "PUT":

    default:
      res.status(400).json({ success: false });
  }
}

async function handleGET(id: string, res: NextApiResponse) {
  const post = await client.post.update({
    where: {
      id: parseInt(id),
    },
    data: {
      look: {
        increment: 1,
      },
    },
    include: {
      user: {
        select: {
          name: true,
        },
      },
    },
  });

  res.status(200).json({ success: true, data: post });
}
