import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './Header';
import Content from './Content';

const App = () => {
  return (
    <div>
      <Header />
      <Grid container>
        <Grid item xs={1}>
          Left
        </Grid>
        <Grid item container xs={10} spacing={2}>
          <Content></Content>
        </Grid>
        <Grid item xs={1}>
          Right
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
