import React from "react";

// Todo
// create the schedule table using the Bootstrap Tables as
// using the fields below:
// id, name, department, position, total hours, days

export const ScheduleTable = (props) => {
    return (
        /*<ul>
            <li>{props.id}</li>
            <li>{props.name}</li>
            <li>{props.department}</li>
            <li>{props.position}</li>
            <li>{props.totalHours}</li>
            <li>{props.days}</li>
        </ul> */
        <table class="table">
  <thead>
    <tr>
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
      <td>Fiances</td>
      <td>Clerk</td>
      <td>40 hours</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>off</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>off</td>
    </tr>
    <tr>
      <th scope="row">259</th>
      <td>Terry Owens</td>
      <td>Communications</td>
      <td>Analyst</td>
      <td>40 hours</td>
      <td>Off</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>Off</td>
    </tr>
    <tr>
      <th scope="row">138</th>
      <td>Samatha Walker</td>
      <td>HR</td>
      <td>HR Rep</td>
      <td>40 hours</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>9am-5pm</td>
      <td>8am-4pm</td>
      <td>8am-4pm</td>
      <td>Off</td>
      <td>Off</td>
    </tr>
    <tr>
    <th scope="row">345</th>
      <td>Lisa Teller</td>
      <td>IT</td>
      <td>Systems Admin</td>
      <td>60 hours</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>Off</td>
      </tr>
    <tr>
    <th scope="row">564</th>
    <td>Derek Carter</td>
      <td>IT</td>
      <td>Network Admin</td>
      <td>60 hours</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>9am-7pm</td>
      <td>Off</td>
    </tr>
   
  </tbody>
</table>
    )
}