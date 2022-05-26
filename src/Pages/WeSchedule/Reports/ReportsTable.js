// Todo
// create a reports table using the Bootstrap Table
// use dummy data
// the table takes:
// id, title, summary, introduction, body, department and user
import React from 'react';
import { Button } from './Button'

export const ReportsTable = () => {

    return (
        <div className='container'>
            <div className='row'>
                <section className='col-10'>
                    <h2>Current Reports</h2>
                </section>
                <section className='col-2'>
                    <Button />
                </section>
            </div>
            <hr />
            <br />
            <table className="table table-striped table-hover">
                <thead>
                    <tr className='table-primary'>
                        <th scope="col">Id</th>
                        <th scope="col">Title</th>
                        <th scope="col">Summary</th>
                        <th scope="col">Introduction</th>
                        <th scope="col">Body</th>
                        <th scope="col">Department</th>
                        <th scope="col">User</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Parking</td>
                        <th>We need more parking spaces.</th>
                        <td>We have 400 employees but only two parking spaces.</td>
                        <th>Please add more parking spaces.</th>
                        <td>R & D</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Ice cream</td>
                        <th>We need an ice cream machine.</th>
                        <td>McDonalds has an ice cream machine but we don't.</td>
                        <th>Please consider stealing the ice cream machine from McDonalds.</th>
                        <td>Market Research</td>
                        <th>William B.</th>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}