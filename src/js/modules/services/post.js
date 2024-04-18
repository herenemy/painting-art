const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data,
  });
  console.log(res);

  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);

  return await res.text();
};

const postTextData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    body: data,
  });

  console.log(res);

  if (!res.ok) throw new Error(`Could not fetch ${url}. Status: ${res.status}`);

  return await res.json();
};

export { postData, postTextData };
