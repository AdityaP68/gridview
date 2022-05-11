export const getMorePost = async (page) => {
  const url = `http://localhost:8000/apis/add?page=${page}`;
  const res = await fetch(url);
  const newPosts = await res.json();
  const result = newPosts.results ? newPosts.results : [];
  return result;
};
