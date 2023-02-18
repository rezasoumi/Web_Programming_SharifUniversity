export const post = async (url: string, data: unknown): Promise<any> => {
  const resp = await fetch(`http://localhost:8001${url}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return resp.json();
};
