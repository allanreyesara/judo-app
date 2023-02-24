import React, { useState, useEffect } from 'react';
import '../App.css';
import { Predicates } from 'aws-amplify';
import { DataStore } from 'aws-amplify';
import { Calendario } from '../models';

function CalendarFeed(){
    const [calendarData, setCalendarData] = useState([]);
    useEffect(() => {
        async function getCalendarData(){
            try{
                const calendarModel = await DataStore.query(Calendario, Predicates.ALL);
                const tournament = calendarModel.map((calendarItem) =>
                    <div className='calendarItem' key={calendarItem.id}>
                        <div className='containerTournament'>
                            <h2>{calendarItem.nombre}</h2>
                            <p>{calendarItem.lugar}</p>
                            <p>{calendarItem.fecha}</p>
                        </div>
                    </div>
                );
                setCalendarData(tournament);
            }catch(err){
                console.log("Error cargando el calendario", err)
            }
        }
        getCalendarData();
    })

    return(
        <div className='calendarFeed'>
            {calendarData}
        </div>
    )};

export default CalendarFeed;