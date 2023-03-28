import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Addstud = () => {
    var[input,setInput]=useState({
        name:'',
        grade:''
    })
    const inputHandler =(e)=>{
        const{name,value} = e.target
        setInput({...input,[name]:value})
    }
    const readValues= ()=>{
        console.log("clicked")
        axios.post("http://localhost:3005/students",input)
        .then(response=>{
            alert("success")
        })
        .catch(err=>console.log(err))

    }
  return (
    <div>
        <br>
        </br>
        <TextField label='Name' name='name' variant='outlined' value={input.namevalue} onChange={inputHandler}></TextField>
        <br></br>
        <br></br>
        <TextField label='Grade' name='grade' variant='outlined' value={input.grade} onChange={inputHandler}></TextField>
        <br>
        </br>
        <br></br>
        <Button color="success" variant='contained' onClick={readValues}> Submit </Button>
   
    </div>
  )
}

export default Addstud
