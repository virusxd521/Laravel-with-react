import React, { useState } from 'react';
import PeopleList from './PeopleList';
import SearchInput from './SearchInput';


const App = ()  => {
    
    const [apiData, setApiData] = useState(null);
    const [searchingValue, setSearchingValue] = useState('');
    
    // The url to the API we created
    let url = `api/people-of-interest?searching=${searchingValue}`;

    const fetchingData = async () => {
        const response = await fetch(url);
        const data = await response.json();
        setApiData(data);
        console.log(data);
    }

    // Function for updating the url with the right parameters
    const paramUpdate = e => {
        e.preventDefault();
        setSearchingValue(e.target.searching.value);
        fetchingData();
    }

    return (
        <>
            <SearchInput submitHandle={paramUpdate} />
            <PeopleList data_api={apiData} /> 
        </>

    )
}

export default App;