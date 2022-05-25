// Todo
// create a reports table using the Bootstrap Table
// use dummy data
// the table takes:
// id, title, summary, introduction, body, department and user
import React from 'react';

export const ReportsTable = () => {

    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">summary</th>
                    <th scope="col">introduction</th>
                    <th scope="col">body</th>
                    <th scope="col">department</th>
                    <th scope="col">user</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Parking</td>
                    <td>We need more parking spaces.</td>
                    <td>We have 400 employees but only two parking spaces.</td>
                    <td>Please add more parking spaces.</td>
                    <td>R&D</td>
                    <td>User 1</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Ice cream</td>
                    <td>We need an ice cream machine.</td>
                    <td>McDonalds has an ice cream machine but we don't.</td>
                    <td>Please consider stealing the ice cream machine from McDonalds.</td>
                    <td>Market Research</td>
                    <td>User 2</td>
                </tr>
            </tbody>
        </table>
    );

}