import './App.css';
import { PostList } from './components/PostList';
import { usePosts } from './hooks/usePosts';

function App() {
  const { posts } = usePosts()

  return (
    <div className="App">
      {posts && <PostList posts={posts} />}
    </div>
  )
}

export default App
