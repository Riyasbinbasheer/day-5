import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography align='left' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Student App
                        </Typography>
                        <Button color="inherit">
                            <Link to='/' style={{ color: 'white', textDecoration: 'none' }}>View</Link>
                        </Button>

                        <Button color="inherit">
                            <Link to='/Add' style={{ color: 'white', textDecoration: 'none' }}>Add</Link>

                        </Button>

                    </Toolbar>
                </AppBar>
            </Box>

        </div>
    )
}

export default Navbar
