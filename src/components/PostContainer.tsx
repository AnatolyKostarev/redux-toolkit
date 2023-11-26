import React, { FC, useEffect, useState } from "react";
import { useGetAllPostsQuery } from "../services/PostsService";
import PostItem from "./PostItem";
import s from './PostContainer.module.css'
const PostContainer: FC = () => {
  const [currentPostStart, setCurrentPostStart] = useState<number>(0);
  const [getDown, setGetDown] = useState<boolean>(false);
  const [getUp, setGetUp] = useState<boolean>(false);

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useGetAllPostsQuery({
    limit: 10,
    start: currentPostStart,
  });

  useEffect(() => {
    if (getDown) {
      setCurrentPostStart((prev) => {
        return prev < 93 ? prev + 1 : prev;
      });
      setGetDown(false);
    }
  }, [getDown]);

  useEffect(() => {
    if (getUp) {
      setCurrentPostStart((prev) => {
        return prev > 0 ? prev - 1 : prev;
      });
      setGetUp(false);
    }
  }, [getUp]);

  useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any): void => {
    if (e.target.documentElement.scrollTop < 50) {
      setGetUp(true);
    }
    if (
      e.target.documentElement.scrollHeight -
        e.target.documentElement.scrollTop -
        window.innerHeight <
      50
    ) {
      setGetDown(true);
      window.scrollTo(
        0,
        e.target.documentElement.scrollHeight +
          e.target.documentElement.scrollTop,
      );
    }
  };

  return (
    <div className={s.container}>
     <div className={s.post_list}>
        {posts?.map((post) => (
            <PostItem post={post} key={post?.id} />
        ))}
      </div>
      {isLoading && <div>Loading...</div>}
    </div>
  );
};

export default PostContainer;
