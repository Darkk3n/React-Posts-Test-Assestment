import { PostComment } from '../models/Post';
interface Props {
   comments: PostComment[] | undefined
}

export function PostComments({ comments }: Props) {
   return (
      <>
         {
            comments!.map(c => (
               <section key={c.id}>
                  <h3>Post Id: {c.postId}</h3>
                  <h4>Comment Id: {c.id}</h4>
                  <p>{c.body}</p>
               </section>))
         }
      </>
   )
}