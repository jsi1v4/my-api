import fetch from "node-fetch";

import { Request, Response } from "lib/handler";

function breakLines(text: string) {
  return text.split("\r\n").slice(0, -1);
}

async function getResume() {
  return fetch(
    "https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/resume.md"
  )
    .then((res) => res.text())
    .then(breakLines);
}

async function getLinks() {
  return fetch(
    "https://raw.githubusercontent.com/jsi1v4/jsi1v4/main/topics/links.md"
  )
    .then((res) => res.text())
    .then(breakLines);
}

async function handler(req: Request, res: Response) {
  const resume = await getResume();
  const links = await getLinks();

  res.status(200).json({ name: `I'm Jose Silva...`, resume, links });
}

export default handler;
