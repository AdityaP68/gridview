const domain = `localhost:8000`;

export const getMorePost = async (page) => {
  const url = `http://${domain}/apis/add?page=${page}`;
  const headers = {
    method: "GET",
    mode: "cors",
    credentials: "include",
  };
  const res = await fetch(url);
  const newPosts = await res.json();
  const result = newPosts.results ? newPosts.results : [];
  return result;
};
