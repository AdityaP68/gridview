import styles from "../styles/Item.module.css";
import DataItem from "./DataItem";
import { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getMorePost } from "../apis/fetchTools";

let pageCount = 1;

const DataDisplay = () => {
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const showPosts = () => {
    getMorePost(pageCount).then((response) => {
      if (response.length === 0) {
        setHasMore(!hasMore);
      }
      console.log(response);
      setPosts((post) => [...post, ...response]);
    });
    pageCount += 1;
  };

  useEffect(() => {
    showPosts();
  }, []);

  return (
    <>
      <h1 style={{ color: "white" }}>Great Tools to help your campaign</h1>
      <hr />
      <h3 style={{ color: "white" }}>Top in the tools category</h3>
      <InfiniteScroll
        dataLength={posts.length}
        next={showPosts}
        hasMore={hasMore}
        loader={<h3> Loading...</h3>}
        endMessage={<h4>Nothing more to show</h4>}
      >
        <div className={styles.grid_wrapper}>
          {posts.map((data) => (
            <div className={styles.grid_wrapper} key={data.id}>
              <DataItem heading={data.name} description={`${data.completed}`} />
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};

export default DataDisplay;
