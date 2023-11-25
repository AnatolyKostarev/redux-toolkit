import React, { FC } from "react";
import { IPost } from "../models/IPost";

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <div className="post_Item">
      <p> № {post?.id}</p>
      <h2 className="postitem_title">Заголовок {post?.title}</h2>
      <p className="postitem_body">
        {post?.body.length > 20 ? `${post?.body.slice(0, 21)}...` : post?.body}
      </p>
    </div>
  );
};

export default PostItem;
