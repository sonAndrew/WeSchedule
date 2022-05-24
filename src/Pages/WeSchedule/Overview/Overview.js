import React from 'react';
import LineChart from "../Sections/Charts/Chart";
import { Departments } from "../Sections/Departments.js/Department";

// Todo
// import chart component
// import schedule component
// import location component
// import department component
// Overview page- lists availabilities and other employee data 

export const Overview = () => {
    return (
        <div>Overview
            <LineChart/>
            <Departments />
        </div>
    )
}