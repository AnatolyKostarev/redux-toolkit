import React, { FC } from "react";
import { IPost } from "../models/IPost";
import s from './PostItem.module.css'
import {Link} from "react-router-dom";
import Button from "./Button";

interface IPostItemProps {
  post: IPost;
}

const PostItem: FC<IPostItemProps> = ({ post }) => {
  return (
    <div className={s.post_item}>
      <p className={s.postitem_number}> № {post?.id}</p>
      <h2 className={s.postitem_title}>{post?.title}</h2>
        <div className={s.postitem_wrapper}>
            <p className={s.postitem_body}>
                {post?.body.length > 25 ? `${post?.body.slice(0, 21)}...` : post?.body}
            </p>
            <Link to={`/post/${post?.id}`}>
                <Button theme="dark">
                    Просмотр
                </Button>
            </Link>
        </div>

    </div>
  );
};

export default PostItem;
