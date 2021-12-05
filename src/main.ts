import http, { Request, Response } from '@/lib/http';

import entry from '@/routes';
import welcome from '@/routes/welcome';

async function router(req: Request, res: Response) {
  switch (req.url) {
    case '/welcome':
      return welcome(req, res);
    default:
      return entry(req, res);
  }
}

async function main() {
  http.createServer(router).listen('3000');
}

main();
