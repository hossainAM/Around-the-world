import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import Demography from '../Demography/Demography';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setCountries(data)
        });
    }, []);

    const handleClick = (country) => {
        console.log(country)
    }

    // console.log(countries)

    return (
        <div className='allCountries'>
            <div className="countryContainer">
                {
                    countries.map(country => <Country 
                            country={country}  
                            key={country.cca3}
                            handleClick={handleClick}
                             ></Country>)
                }
            </div>
            <div className="countryDemography">
                <h2>Country demography section</h2>
                <Demography></Demography>
            </div>
        </div>
    );
};

export default Countries;