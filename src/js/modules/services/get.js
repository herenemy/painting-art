export const getResource = async (url) => {
  let res = await fetch(url);

  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);

  return await res.json();
};
