const BASE_URL = "http://localhost:3000";

export const POST_URL = `${BASE_URL}/api/post`;

export const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => data.data);

export const makeSerializable = (obj: any) => {
  return JSON.parse(JSON.stringify(obj));
};
