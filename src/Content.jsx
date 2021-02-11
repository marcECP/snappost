import React from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post';
import InputPost from './InputPost';

const Content = (props) => {
  const { posts, clickDelete } = props;
  return (
    <React.Fragment>
      {posts.map((post) => (
        <Grid key={post.id} item xs={3}>
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            date={post.date}
            content={post.content}
            clickDelete={clickDelete}
          />
        </Grid>
      ))}
      <Grid item xs={3}>
        <InputPost
          title="SnapPost"
          date="10/02/2020"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        />
      </Grid>
    </React.Fragment>
  );
};

export default Content;
