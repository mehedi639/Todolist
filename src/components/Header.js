import React,{Component} from 'react'
import { Container, Grid } from '@material-ui/core';
import {withStyles} from '@material-ui/styles'

const useStyle={
  root:{
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
    textAlign:'center',
    fontSize:'25px',
    fontWeight:'bold',
    color:'#c4c4c4'
  }
}

 class Header extends Component{
   render(){

   const {classes}=this.props
  return (
    <Container>
      <Grid direction='column'justify='center' alignItems='center' className={classes.root}>
        <Grid item xm={12}>
          <h1>Todo List</h1>
        </Grid>
      </Grid>
    </Container>
  )
   }
}
export default withStyles(useStyle)(Header)