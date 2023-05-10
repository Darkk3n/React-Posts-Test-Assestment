import { useEffect, useState } from "react";
import { Post } from "../models/Post";

export function usePosts() {
   const [posts, setPosts] = useState<Post[]>();
   useEffect(() => {
      // axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      //   .then(r => setPosts(r.data));

      fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
         .then(res => res.json())
         .then((data: Post[]) => setPosts(data));

   }, [posts?.length])
   return { posts };
}