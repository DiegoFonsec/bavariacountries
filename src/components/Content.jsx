import React, { Fragment } from 'react'
import './Contentstyle.css'
import Listdata from './Listdata';
import Filters from './Filters'


const Content = (props) => {
    const [countries, setCountries] = React.useState([]);
    const [filteredCountries, setfilteredCountries] = React.useState([]);


    React.useEffect((props) => {
        getCountries();
    }, [])
    //Get All Countries
    const getCountries = async () => {
        const res = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await res.json();
        setCountries(data);
        setfilteredCountries(data);
    }
    //Filter Country
    const searchCountry = (country, region) => {
        const newData = countries.filter((element) => {
            if (country !== '' && region !== '') {
                return element.name.toLowerCase().startsWith(country.toLowerCase()) && element.region.toLowerCase().startsWith(region.toLowerCase());
            } else if (country !== '') {
                return element.name.toLowerCase().startsWith(country.toLowerCase());
            } else {
                return element.region.toLowerCase().startsWith(region.toLowerCase());
            }
        });

        setfilteredCountries(newData);
        //setCountries(newData);
    }
    return (
        <Fragment>
            <div className=" cont" style={props.st}>
                <Filters onFiltered={searchCountry} />
                <Listdata data={filteredCountries} />
            </div>
        </Fragment>

    );
}

export default Content;