import { Typography,AppBar,Button,Toolbar } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Navigation = () => {
  return (
    <div>
        <AppBar>
            <Toolbar style={{color:'#a5d6a7'}}>
                <Typography align='left' sx={{flexGrow:1}}>Bonjour</Typography>
                <Button variant='contained'><Link to={'/'} style={{color:'white'}}>sign up</Link></Button>
                <Button variant='contained'><Link to={'/table'} style={{color:'white'}}>sign in</Link></Button>
                <Button variant='contained'><Link to={'/axios'} style={{color:'white'}}>view</Link></Button>
                </Toolbar>
                </AppBar>
             </div>
  )
}
export default Navigation
