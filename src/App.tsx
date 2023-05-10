import { useEffect, useState } from 'react';
import './App.css';
import { PostComments } from './components/PostComments';
import { PostList } from './components/PostList';
import { Post, PostComment } from './models/Post';

function App() {
  const [posts, setPosts] = useState<Post[]>();
  const [comments, setComments] = useState<PostComment[]>();

  useEffect(() => {
    // axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
    //   .then(r => setPosts(r.data));

    fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10')
      .then(res => res.json())
      .then((data: Post[]) => setPosts(data));

  }, [posts?.length])

  const getComments = (postId: number) => {
    // axios.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    //   .then(r => setComments(r.data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then((data: PostComment[]) => setComments(data));
  }

  return (
    <div className="App">
      <h1>Test Assestment</h1>
      {posts && <PostList posts={posts} getComments={getComments} />}
      <h3>Comments</h3>
      {comments && <PostComments comments={comments} />}
    </div>
  )
}

export default App
