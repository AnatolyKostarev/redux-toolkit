import React from 'react';
import {useGetPostByIdQuery} from "../services/PostsService";
import {Link, useLocation} from "react-router-dom";
import s from './Post.module.css'
import Button from "./Button";
const Post = () => {
    const location = useLocation()
    const id = Number(location.pathname.substring(
        location.pathname.lastIndexOf('/') + 1,
        location.pathname.length))

    const { data: post, isLoading} = useGetPostByIdQuery(id)
    return (
        <div className={s.post_wrapper}>
            <div className={s.post}>
                <p className={s.post_number}>
                    Пост № {post?.id}
                </p>
                <h2 className={s.post_title}>{post?.title}</h2>
                <div className={s.post_body_wrapper}>
                    <p className={s.post_body}>
                        {post?.body}
                    </p>
                    <Link to="/">
                        <Button theme="outline">
                            Назад
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Post;
