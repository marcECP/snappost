import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Header from './Header';
import Content from './Content';

const initialPosts = [
  {
    id: 1,
    title: 'SnapPost 1',
    date: '11/02/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    title: 'SnapPost 2',
    date: '11/02/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 3,
    title: 'SnapPost 3',
    date: '11/02/2020',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const App = () => {
  const [posts, setPosts] = useState(initialPosts);

  const clickDelete = (id) => {
    console.log(posts.filter((post) => post.id !== id));
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={1}>
          Left
        </Grid>
        <Grid item container xs={10} spacing={2}>
          <Content posts={posts} clickDelete={clickDelete} />
        </Grid>
        <Grid item xs={1}>
          Right
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
