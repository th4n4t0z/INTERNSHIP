import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () =>{
    var[pname,setpname] = useState("class");
    const[data,setData] = useState()
    const changename = ()=>{
      console.log("clicked");
        setpname("U")
    }
    const readValue = (e) =>{
      setData(e.target.value);
      console.log(data)
    }

    return (
      <div><br /><br /><br />
          <Typography variant='h2' color='blue'>WELCOME {pname}</Typography>
          <TextField label = "name" varient = "outlined" onChange={readValue}>Name</TextField><br/>
          <Button variant='contained' onClick={changename}>click</Button>
      </div>
    );
  }

export default Statebasics