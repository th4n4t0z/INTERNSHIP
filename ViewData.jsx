import { Table,TableBody,TableCell, TableContainer, TableFooter, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const ViewData = () => {
    var[userEvent,setUser]=useState([])
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data);
        setUser(response.data)
    })
return(
    <div style={{padding:"100px"}}>
    <Typography variant='h3'>Axios view</Typography>
    <br />
        <TableContainer sx={{maxWidth:650}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{color:"skyblue"}}>name</TableCell>
                        <TableCell style={{color:"skyblue"}}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        userEvent.map((Value,index)=>{
                            return(
                                <TableRow key={index}>
                                    <TableCell>{Value.name}</TableCell>
                                    <TableCell>{Value.email}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default ViewData