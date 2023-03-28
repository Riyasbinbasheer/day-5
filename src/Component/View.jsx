import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    var[Students,setStudents]=useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            setStudents(Students=response.data)
            console.log(response.data)
        })
        .catch(error=>console.log(error))

    },[])
    const deleteValue = (id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("successfully deleted");
            window.location.reload(false);
        })
    }
  return (
    <div>
   <TableContainer>
    <Table>
        <TableHead>
            
            <TableRow>
                <TableCell align='center'>ID</TableCell>
                <TableCell align='center'>NAME</TableCell>
                <TableCell align='center'>GRADE</TableCell>
                <TableCell>DELETE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {Students.map((value,index)=>{
                return <TableRow key={index}>
                <TableCell align='center'>{value.id}</TableCell>
                <TableCell align='center'>{value.name}</TableCell>
                <TableCell align='center'>{value.grade}</TableCell>
                <TableCell>
                    <Button color='error' variant='contained' onClick={()=>deleteValue(value.id)}>Delete</Button>
                    
                </TableCell>
                </TableRow>
            })}
                </TableBody>
    </Table>
   </TableContainer>
   </div>

   

     
  )
}

export default View
