import { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    setPosts(data);
  };
  return (
    <div>
      <ul>
        {posts.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
