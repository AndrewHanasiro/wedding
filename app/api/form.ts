import { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req.body);
  res.end(res.getHeader("Set-Cookie"));
};

export default handler;
