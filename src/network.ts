export const post = async (url: string, data: unknown): Promise<any> => {
  // http://localhost:8001/
  const resp = await fetch(`/api/ticket${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return resp.json();
};
