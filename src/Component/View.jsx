import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Addstud from './Addstud'

const View = () => {
    var[update,setUpdate] = useState(false)
    var[selected,setSelected] = useState([])
    var[Students,setStudents] = useState([])
    useEffect(()=>{
        axios.get("http://localhost:3005/students")
        .then(response=>{
            setStudents(Students=response.data)
            console.log(response.data)
        })
        .catch(error=>console.log(error))

    },[])

    const updateValue =(value) =>{
        setSelected (value);
        setUpdate(true);
    }
    const deleteValue = (id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then((response)=>{
            console.log(response.idvalue);
            alert("successfully deleted");
            window.location.reload(false);
        })
    }

    var finalJSX = <TableContainer>
    <Table>
        <TableHead>
            
            <TableRow>
                <TableCell align='center'>GENER</TableCell>
                <TableCell align='center'>BOOK TITLE</TableCell>
                <TableCell align='center'>Author</TableCell>
                <TableCell>UPDATE</TableCell>
                <TableCell>DELETE</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {Students.map((value,index)=>{
                return <TableRow key={index}>
                <TableCell align='center'>{value.id}</TableCell>
                <TableCell align='center'>{value.name}</TableCell>
                <TableCell align='center'>{value.grade}</TableCell>
                <TableCell> <Button color='success' variant='contained' onClick={()=>updateValue(value)}>update</Button></TableCell>
                <TableCell>
                    <Button color='error' variant='contained' onClick={()=>deleteValue(value.id)}>Delete</Button>
                </TableCell>
               
                </TableRow>
            })}
                </TableBody>
    </Table>
   </TableContainer>
   if (update)
   finalJSX = <Addstud data={selected} method="put"/>
  return (
    <div>
  {finalJSX}
   </div>

   

     
  )
}

export default View
