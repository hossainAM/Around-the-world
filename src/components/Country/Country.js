import React from 'react';
import './Country.css';
import Card from 'react-bootstrap/Card'

const Country = ({country, handleClick}) => {
    // console.log(country)
     const { name, population, area, region, flags } = country;

    return (
        <Card className = 'countryDetails'>
           <Card.Img src={flags.png} alt="" />
           <Card.Body>
                <h3>Country Name: {name.common}</h3>
                <p className = 'mt-2' > <span className='fw-bold'> Population:</span> {population}</p >
                <p><span className='fw-bold'>Area:</span>{area}</p>
                <p><span className='fw-bold'>Region: </span>{region}</p>
           </Card.Body>
           <button onClick={() => handleClick(country)} className='btn btn-success'>Google Map</button>
        </Card>
    );
};

export default Country;