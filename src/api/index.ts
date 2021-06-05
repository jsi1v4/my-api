import { Request, Response } from "lib/handler";

export default function handler(req: Request, res: Response) {
  res.status(302).redirect("/welcome");
}
