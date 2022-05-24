import React from 'react';

// Todo
// import the chart table 
// import the schedule component to show the user schedule
import { Schedule } from '../Sections/Schedules/Schedule';  
// section the layout of the dashboard meaning add section elements
// the dashboard is for the users data only

export const Dashboard = () => {
    return (
        <div>Dashboard
            <Schedule />
        </div>

    )
}