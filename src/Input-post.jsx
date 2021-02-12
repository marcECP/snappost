import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import { Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    flexGrow: 1,
  },
  pos: {
    marginBottom: 12,
  },
  head: {
    flexGrow: 1,
    padding: 0,
  },
});

export default function InputPost(props) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { clickSubmit } = props;

  const onSubmit = (e) => {
    clickSubmit(e, title, content);
    setTitle('');
    setContent('');
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={10}>
              <TextField
                id="title"
                label="Enter your title"
                variant="outlined"
                size="small"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={2}>
              <IconButton onClick={onSubmit}>
                <AddIcon />
              </IconButton>
            </Grid>
          </Grid>
          <TextField
            id="content"
            label="Enter your Content"
            multiline
            rows={4}
            variant="outlined"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <input type="submit" />
        </form>
      </CardContent>
    </Card>
  );
}
