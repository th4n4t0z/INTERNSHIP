import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
  return (
    <div><br /><br />
        <AppBar color="primary">
            <Toolbar style={{color:'white'}}>
                <Typography style={{color:'#9FE2BF'}} align='left' sx={{flexGrow:1}}>BLOG</Typography>
91
                <Button varient='contained' style={{color:'white'}}>HOME</Button>
                <Button varient='contained' style={{color:'white'}}>ADD</Button>
        </Toolbar>       
        </AppBar>
    </div>
  )
}

export default Navbar