import { Post } from "../models/Post";

interface Props {
   posts: Post[] | undefined
   getComments(postId: number): void
}
export function PostList({ posts, getComments }: Props) {
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
                     <td><button className='my-button' onClick={() => getComments(p.id)}>Get Comment</button></td>
                  </tr>
               ))}
            </tbody>
         </table>
      </>
   )
}