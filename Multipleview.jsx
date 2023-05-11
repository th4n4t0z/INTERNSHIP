import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Multipleview = () => {
    var[val1,setval1] = useState()

    const readName =(e) =>{
        setval1(e.target.value);
    }
    var[val2,setval2] = useState()

    const readName1 =(e) =>{
        setval2(e.target.value);
    }
    return (
      <div>
          <br/><br/><br /><br />
          <TextField label='name' onChange={readName}/>
          <br/><br/>
          {val1}
          <br/><br/>
          <TextField label='place' onChange={readName1}/>
          <br/><br/>
          {val2}
           </div>
    )
  }

export default Multipleview