import React from 'react';

// Todo
// Import the schedule table 
import { ScheduleTable } from './ScheduleTable';
import { TableRow } from './TableRow';

export const Schedule = (props) => {
    return (
        <div className='container'>
            <ScheduleTable>
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
                <TableRow />
            </ScheduleTable> 
        </div>
    )
}