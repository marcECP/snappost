import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Post from './Post';
import InputPost from './Input-post';

const useStyles = makeStyles({
  root: {
    margin: '10vh',
  },
});

const CardsContainer = (props) => {
  const classes = useStyles();
  const { posts, clickDelete, clickSubmit } = props;
  return (
    <Grid container spacing={2} className={classes.root}>
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
        <InputPost clickSubmit={clickSubmit} />
      </Grid>
    </Grid>
  );
};

export default CardsContainer;
