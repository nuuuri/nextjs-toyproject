import client from "libs/client";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {} = req.body;

  if (req.method === "POST") {
    const { userId, title, content } = req.body;

    const post = await client.post.create({
      data: {
        user: { connect: { id: userId } },
        title: title,
        content: content,
      },
    });

    res.status(200).json({ success: true, data: post });
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`
    );
  }
}
