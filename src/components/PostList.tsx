import { useState } from "react";
import { Post, PostComment } from "../models/Post";
import { getComments } from "../services/postComments";
import { PostComments } from "./PostComments";

interface Props {
   posts: Post[] | undefined

}
export function PostList({ posts }: Props) {
   const [comments, setComments] = useState<PostComment[]>()

   return (
      <>
         <h1>Test Assestment</h1>
         <table>
            <thead>
               <tr>
                  <th>User Id</th>
                  <th>Id</th>
                  <th>Title</th>
                  <th>Body</th>
               </tr>
            </thead>
            <tbody>
               {posts?.map(p => (
                  <tr key={p.id}>
                     <td>{p.userId}</td>
                     <td>{p.id}</td>
                     <td>{p.title}</td>
                     <td>{p.body}</td>
                     <td><button className='my-button' onClick={async () => setComments(await getComments(p.id))}>Get Comment</button></td>
                  </tr>
               ))}
            </tbody>
         </table>
         {comments && <PostComments comments={comments} />}
      </>
   )
}