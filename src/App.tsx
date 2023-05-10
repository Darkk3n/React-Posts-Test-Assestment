import { useState } from 'react';
import './App.css';
import { PostComments } from './components/PostComments';
import { PostList } from './components/PostList';
import { usePosts } from './hooks/usePosts';
import { PostComment } from './models/Post';

function App() {
  const [comments, setComments] = useState<PostComment[]>()
  const { posts } = usePosts()

  const getComments = (postId: number) => {
    // axios.get<PostComment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
    //   .then(r => setComments(r.data));

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(res => res.json())
      .then((data: PostComment[]) => setComments(data));
  }

  return (
    <div className="App">
      {posts && <PostList posts={posts} getComments={getComments} />}
      {comments && <PostComments comments={comments} />}
    </div>
  )
}

export default App
