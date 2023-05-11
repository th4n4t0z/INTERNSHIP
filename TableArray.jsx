import { Table,TableBody,TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React, { useState } from 'react'

const TableArray = () => {
    var [Names,setName]= useState([{Name:"me",Age:19},{Name:"you",Age:15}])
  return (
    <div >
        <Typography variant='h3' color={"orange"} >Table and Array</Typography>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                    <TableCell style={{color:"red"}}></TableCell>
                    <TableCell style={{color:"red"}}></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                            {Names.map((value,index) =>{
                                return(
                        <TableRow key={index}>
                         <TableCell>{value.Name}</TableCell>
                         <TableCell>{value.Age}</TableCell>
                         </TableRow>
                         )
                                })}
                    </TableBody>
        </Table>
        </TableContainer>
        </div>
  )
}

export default TableArray