import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './house.css';
import Link from '@mui/material/Link';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default class House extends Component {
    constructor(props){
        super(props);
    }
    render () {
        const {id, price, bedrooms, sitting_rooms, showers, town, suburb} =this.props.details;
        return (
            <>
            <Card className="card">
                <CardMedia
                    component="img"
                    height="140"
                    image="https://render.fineartamerica.com/images/images-profile-flow/400/images-medium-large-5/simple-country-chuck-pinson.jpg"
                    alt="green iguana"
                    className="card-img-top"
                />
                <CardContent className="card-body">
                    <Typography gutterBottom variant="h5" component="div">
                        {bedrooms} bedroom house
                    </Typography>
                    <h6><i className = {["fas","map-marker-alt"]} className="locator"/> {town} {suburb}</h6>
                    <p className="card-text">Ksh {price}</p>
                    <ul>
                        <li><FontAwesomeIcon icon = {["fas","bed"]}/> {bedrooms}</li> 
                        <li><FontAwesomeIcon icon = {["fas","chair"]}/> {sitting_rooms}</li>
                        <li><FontAwesomeIcon icon = {["fas","shower"]}/> {showers}</li>
                    </ul>
                </CardContent>
                <div className="card-overlay">
                    <Link href="#" className="btn btn-success">Features</Link>
                </div>
            </Card>
            </>
        )
    }
}
