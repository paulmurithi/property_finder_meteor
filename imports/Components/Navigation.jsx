import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Link from '@mui/material/Link';
import './navigation.css';


export default function ButtonAppBar() {
  return (
            <Box >
            <AppBar position="static" className="nav">
                <Toolbar>
                <Link href="#" className="link">
                    Pfinder
                </Link>
                <Link href="#" className="link">
                    Rent
                </Link>
                <Link href="#" className="link">
                    Buy
                </Link>
                <Link href="#" className="link">
                    Sell
                </Link>
                </Toolbar>
            </AppBar>
            </Box>
  );
}