import PostContainer from "./components/PostContainer";
import Post from "./components/Post";
export const routes = [
    {path: '/', element: < PostContainer />},
    {path: 'post/:id', element: <Post />},
    {path: '/*', element: <><p>Not Found</p></>}
]
