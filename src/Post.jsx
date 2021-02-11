import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { CardActions } from '@material-ui/core';

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

export default function Post(props) {
  const classes = useStyles();

  const { id, title, date, content, clickDelete } = props;

  return (
    <Card className={classes.root}>
      <CardContent>
        <CardActions className={classes.head}>
          <Typography variant="h5" component="h2" className={classes.title}>
            {title}
          </Typography>
          <IconButton onClick={() => clickDelete(id)}>
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <Typography className={classes.pos} color="textSecondary">
          {date}
        </Typography>
        <Typography variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}
