import React, { useState } from 'react';
import { Grid } from '@material-ui/core';

import Header from './Header';
import CardsContainer from './Cards-container';

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
    setPosts(posts.filter((post) => post.id !== id));
  };

  const clickSubmit = (e, title, content) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100);
    const post = { id, title, content };
    setPosts([...posts, post]);
  };

  return (
    <div>
      <Header />
      <Grid container>
        <CardsContainer
          posts={posts}
          clickDelete={clickDelete}
          clickSubmit={clickSubmit}
        />
      </Grid>
    </div>
  );
};

export default App;
