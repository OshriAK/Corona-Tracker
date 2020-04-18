import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import './CountryPicker.scss';

import { fetchCountries } from '../../api/index';

const CountryPicker = ({ handleCountryChange }) => {
    const [fetchedCountries, setFetchCountries] = useState([]);
    useEffect(() => {

        const fetchAPI = async () => {
            setFetchCountries(await fetchCountries());
        };


        fetchAPI();
    }, [setFetchCountries]);


    return (
       <FormControl className="formControl">
           <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
               <option value="">Global</option>
               <option value="israel">Israel</option>
               {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
           </NativeSelect>
       </FormControl>
    );
};

export default CountryPicker;