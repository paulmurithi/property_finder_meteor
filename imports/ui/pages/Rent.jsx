import React, { Component } from 'react';
import Link from '@mui/material/Link';
import Hero from '../../Components/Hero';
import Banner from '../../Components/Banner';
import Box from '@mui/material/Box';
import House from '../../Components/House';
import Grid from '@mui/material/Grid';
// import { styled } from '@mui/material/styles';
// import Paper from '@mui/material/Paper';
// const Item = styled(Paper)(({ theme }) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

class Rent extends Component {
    constructor(props){
        super(props);
        this.state = {
            houses:[
                {
                    bedrooms: 5,
                    sitting_rooms:1,
                    price:20000,
                    town:  "Nairobi",
                    suburb: "Muthaiga",
                    showers: 5
                },
                {
                    bedrooms: 3,
                    sitting_rooms:1,
                    price:20000,
                    town:  "Nairobi",
                    suburb: "Muthaiga",
                    showers: 3
                },
                {
                    bedrooms: 2,
                    sitting_rooms:1,
                    price:20000,
                    town:  "Nairobi",
                    suburb: "Muthaiga",
                    showers: 2
                },
                {
                    bedrooms: 2,
                    sitting_rooms:1,
                    price:20000,
                    town:  "Nairobi",
                    suburb: "Muthaiga",
                    showers: 2
                }
            ],
        }
    }

    render () {
        const { houses } = this.state;

        return (
            <Box sx={{ flexGrow: 1 }}>
                    <Hero>
                        <Banner title="Rental Houses" subtitle="Vacant houses for rent" >
                            <Link href="/" className="btn">Return home</Link>
                        </Banner>
                    </Hero>
                    
                    {houses?(
                        <Grid container spacing="10">
                                { houses.map(
                                    house => (
                                        <Grid item xs={12} sm={6} md={4} lg={3}>
                                            <House details = {house} key={house.id}/>
                                        </Grid>
                                    )
                                ) }
                            
                        </Grid>
                    ):(<h1>No rental houses available.</h1>)}
            </Box>
        )
    }
}

export default Rent;
