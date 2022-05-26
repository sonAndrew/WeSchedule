import React from "react";

// Todo
// create the schedule table using the Bootstrap Tables as
// using the fields below:
// id, name, department, position, total hours, days

export const ScheduleTable = (props) => {
    return (
      <div>
        <br />
        <h4>Current Schedule:</h4>
        <br />
        <hr />
        <br />
        <table className="table table-striped table-hover">
          <thead>
            <tr className='table-primary'>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Department</th>
              <th scope="col">Position</th>
              <th scope="col">Total Hours</th>
              <th scope="col">Sunday</th>
              <th scope="col">Monday</th>
              <th scope="col">Tuesday</th>
              <th scope="col">Wednesday</th>
              <th scope="col">Thursday</th>
              <th scope="col">Friday</th>
              <th scope="col">Saturday</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">100</th>
              <td>John Smith</td>
              <th>Fiances</th>
              <td>Clerk</td>
              <th>40 hours</th>
              <td>9am-5pm</td>
              <th>9am-5pm</th>
              <td>9am-5pm</td>
              <th>off</th>
              <td>9am-5pm</td>
              <th>9am-5pm</th>
              <td>off</td>
            </tr>
            <tr>
              <th scope="row">259</th>
              <td>Terry Owens</td>
              <th>Communications</th>
              <td>Analyst</td>
              <th>40 hours</th>
              <td>Off</td>
              <th>9am-5pm</th>
              <td>9am-5pm</td>
              <th>9am-5pm</th>
              <td>9am-5pm</td>
              <th>9am-5pm</th>
              <td>Off</td>
            </tr>
            <tr>
              <th scope="row">138</th>
              <td>Samatha Walker</td>
              <th>HR</th>
              <td>HR Rep</td>
              <th>40 hours</th>
              <td>9am-5pm</td>
              <th>9am-5pm</th>
              <td>9am-5pm</td>
              <th>8am-4pm</th>
              <td>8am-4pm</td>
              <th>Off</th>
              <td>Off</td>
            </tr>
            <tr>
              <th scope="row">345</th>
              <td>Lisa Teller</td>
              <th>IT</th>
              <td>Systems Admin</td>
              <th>60 hours</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>Off</td>
            </tr>
            <tr>
              <th scope="row">564</th>
              <td>Derek Carter</td>
              <th>IT</th>
              <td>Network Admin</td>
              <th>60 hours</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>9am-7pm</td>
              <th>9am-7pm</th>
              <td>Off</td>
            </tr>
            {props.children}
          </tbody>
        </table>
      </div>
    )
}