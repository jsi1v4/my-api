import { Request, Response } from "@/lib/http";

export default async (req: Request, res: Response) => {
  res.writeHead(307, { 'Location': '/welcome' });
  res.end();
}
