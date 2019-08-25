import React, { Component } from 'react';
import { Container, Grid, TextField, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import shortid from 'shortid'


const useStyles = {
  root: {},
  input: {
    marginTop: '0 !important',
    fontSize: '20px',
    fontWeight: '500',
    color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }, 
  button: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%) !important',
    marginTop: '9px !important'
  }
};
class AddTodo extends Component {
  state = {
    title: ''
    
    
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo({
      id:shortid.generate(),
      title:this.state.title,
      completed:false
     });
    this.setState({title:''})
  };
  render() {
    const { classes } = this.props; 
    return (
      <Container>
        <Grid container spacing={0} className={classes.root}>
          <Grid item sm={3} />
          <Grid item sm={6}>
            <form onSubmit={this.onSubmit}>
              <TextField
                id='input-id'
                label='Add Todo...'
                type='text'
                className={classes.input}
                margin='normal'
                style={{ width: '85%' }}
                value={this.state.title}
                onChange={this.onChange}
                name='title'
              />
              <Button
                className={classes.button}
                variant='contained'
                color='primary'
                onClick={this.onSubmit}
                style={{ width: '13%' }}
              >
                Add
              </Button>
            </form>
          </Grid>
          <Grid item sm={3} />
        </Grid>
      </Container>
    );
  }
}
export default withStyles(useStyles)(AddTodo);
