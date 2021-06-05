import { Request, Response } from "lib/handler";

export default function handler(req: Request, res: Response) {
  res.status(200).json({ name: `I'm Jose Silva...` });
}
