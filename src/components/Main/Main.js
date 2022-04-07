import React, { useState, useEffect } from 'react';
import useVolunteers from '../../hooks/useVolunteers';

import Activity from '../Activity/Activity';
import './Main.css';

const Main = () => {

    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);




    useEffect(() => {
        fetch('data.json')
            .then(response => response.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText))
                setSearchResult(match)
            })
    }, [searchText])



    const handleOnchangeEvent = event => {

        setSearchText(event.target.value)
    }





    // const handleOnchangeEvent2 = event => {
    //     const searchText = event.target.value;
    //     const match = volunteers.filter(v => v.title.includes(searchText))
    //     setSearchResult(match)
    // }

    return (
        <div>
            <h2>Volunteer Activities:</h2>
            <div style={{ 'margin': '20px' }}>
                <input onChange={handleOnchangeEvent} type="text" placeholder='search' />
            </div>
            <div className="activity-container">
                {
                    searchResult.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    />)
                }
            </div>
        </div>
    );
};

export default Main;