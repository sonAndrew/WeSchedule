import React from "react";
// Todo
// create a locations component table using the Bootstrap Tables as referance
// using the fields below:
// id, name
export const Location = () => {
  return (
<table class="table table-striped">
  <thead>
    <tr> 
      <th>Location ID</th>
      <th>Location Name</th>
    </tr>
  </thead>
<tbody>
    <tr>
      <td>111</td>
      <td>Teaneck, New Jersey</td>
    </tr>
    <tr>
      <td>222</td>
      <td>Alpharetta, Georgia</td>
    </tr>
    <tr>
      <td>333</td>
      <td>New Delhi, India</td>
    </tr>
  </tbody> 
</table>
  )
}
