import React from 'react';
import Topbar from './components/topbar/Topbar';
import Home from './pages/home/Home';
import Post from './components/post/Post';
import Single from './pages/single/Single';
import SinglePost1 from './components/singlePost1/SinglePost1';
import SinglePost2 from './components/singlePost2/SinglePost2';
import SinglePost3 from './components/singlePost3/SinglePost3';
import SinglePost4 from './components/singlePost4/SinglePost4';
import Posts from './components/posts/Posts';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Single />} />
        <Route path="/post/1" element={<SinglePost1 />} />
        <Route path="/post/2" element={<SinglePost2 />} />
        <Route path="/post/3" element={<SinglePost3 />} />
        <Route path="/post/4" element={<SinglePost4 />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
