import { Request, Response } from "@/lib/http";
import { fetchText } from "@/lib/fetch";
import { breakLines } from "@/utils";

async function getResume() {
  return fetchText(
    "https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/resume.md"
  )
    .then(breakLines);
}

async function getLinks() {
  return fetchText(
    "https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/links.md"
  )
    .then(breakLines);
}

export default async (req: Request, res: Response) => {
  const resume = await getResume();
  const links = await getLinks();

  res.writeHead(200, { 'Content-Type': 'text/json' });
  res.end({ name: `I'm José Paulo (like 'Joseph')...`, resume, links });
}
