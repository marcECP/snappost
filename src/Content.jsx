import React from 'react';
import { Grid } from '@material-ui/core';

import Post from './Post';

const Content = () => {
  return (
    <React.Fragment>
      <Grid item xs={3}>
        <Post></Post>
      </Grid>
      <Grid item xs={3}>
        <Post></Post>
      </Grid>
      <Grid item xs={3}>
        <Post></Post>
      </Grid>
      <Grid item xs={3}>
        <Post></Post>
      </Grid>
    </React.Fragment>
  );
};

export default Content;
