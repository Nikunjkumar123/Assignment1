import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const AppCp1: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 500 },
  ];

  return (
    <div style={{ 
      height: '400px', 
      width: '100%', 
      border: '1px solid #ccc', 
      borderRadius: '8px', 
      overflow: 'hidden',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}>
      <DataGrid rows={posts} columns={columns}  />
    </div>
  );
};

export default AppCp1;
