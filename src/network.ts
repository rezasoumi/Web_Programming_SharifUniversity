export const post = async (url: string, data: unknown): Promise<unknown> => {
  const resp = await fetch(`http://127.0.0.1:12345${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return resp.json();
};
