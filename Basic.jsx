import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import app from '../App';

const Statebasics = () =>{
    var[pname,setpname] = useState("");
    function change(){
        setpname("U")
    }

    return (
      <div style={{padding:"100px"}}><br /><br /><br />
          <Typography variant='h3' color='black'>WELCOME{pname}</Typography> <br />
          <TextField label='user'></TextField><br/><br/>
          <Button variant='contained' onClick={change}>click</Button>
         
      </div>
    );
  }

export default Statebasics