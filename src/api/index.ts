import { Request, Response } from "lib/handler";

export default function handler(req: Request, res: Response) {
  res.status(307).redirect("/api/welcome");
}
