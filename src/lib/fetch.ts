import nodeFetch from "node-fetch";

export async function fetchText(uri: string) {
  return nodeFetch(uri).then((res) => res.text());
}

export async function fetch(uri: string) {
  return nodeFetch(uri).then((res) => res.json());
}

export default fetch;
