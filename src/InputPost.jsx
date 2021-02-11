import React from 'react';
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

export default function Post() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container>
          <Grid item xs={10}>
            <TextField
              id="title"
              label="Enter your title"
              variant="outlined"
              size="small"
            />
          </Grid>
          <Grid item xs={2}>
            <IconButton onClick={() => console.log('click')}>
              <AddIcon />
            </IconButton>
          </Grid>
        </Grid>
        <TextField
          id="contet"
          label="Enter your Content"
          multiline
          rows={4}
          variant="outlined"
        />
      </CardContent>
    </Card>
  );
}
