import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import '../App.css';
import CheckBox from '@material-ui/core/Checkbox';

const useStyles = {
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderBottom: '1px dotted #1cff0f',
    justify: 'flex-end'
  },
  content: {
    background: 'transparent',
    boxShadow: 'transparent !important'
  },
  paper: {}
};

class TodoItem extends Component {
  render() {
    const { classes } = this.props;
    const { id, title } = this.props.todo;
    return (
      <Container>
        <Grid
          className={classes.root}
          container
          spacing={0}
          direction='row'
          justify='flex-end'
          alignItems='center'
        >
          <Grid item xs={6} className={classes.content}>
            <Paper className={classes.paper}>
              <CheckBox onCheck={this.props.checkbox} checked={this.props.completed} onChange={this.props.markCompleted.bind(this, id)} />
              <span
                style={{
                  textDecoration: this.props.todo.completed
                    ? 'line-through'
                    : 'none'
                }}
              >
                {title}
              </span>
            </Paper>
          </Grid>
          <Grid
            container
            direction='row'
            justify='flex-end'
            alignItems='center'
            item
            xs={6}
          >
            <Paper className={classes.paper}>
              <Fab>
                <Edit />
              </Fab>
              <Fab>
                <Delete onClick={this.props.deltodo.bind(this,id)}/>
              </Fab>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}
export default withStyles(useStyles)(TodoItem);
