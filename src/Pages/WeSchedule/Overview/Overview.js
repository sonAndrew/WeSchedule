import React from 'react';
import LineChart from "../Sections/Charts/Chart";
import { Departments } from "../Sections/Departments.js/DepartmentsAndLeadsTable";
import { Location } from '../Sections/Locations/Location'; 
import { ScheduleTable } from '../Sections/Schedules/ScheduleTable';
import { TableRow } from '../Sections/Schedules/TableRow';
// Todo
// import chart component
// import schedule component
// import location component
// import department component
// Overview page- lists availabilities and other employee data 

export const Overview = () => {
    return (
        <div className=''>
            <br />
            <div className='container row'>
                <section className='col'>
                    <h2>Schedule Overview</h2>
                </section>
            </div>
            <br />
            <hr />
            <br />
            <div className='row'>
                <section className='row'>
                    <section className='col-4'>
                        <LineChart/>
                    </section>
                    <section className='col-4'>
                        <Departments />
                    </section>
                    <section className='col-4'>
                        <Location />
                    </section>
                </section>
            </div>
            <div className='row'>
                <section className='col'>
                    <ScheduleTable>
                        <TableRow />
                        <TableRow />
                    </ScheduleTable>
                </section>
            </div>
        </div>
    )
}