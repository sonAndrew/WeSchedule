import React from "react";
// Todo
// create a locations component table using the Bootstrap Tables as referance
// using the fields below:
// id, name
export const Location = () => {
  return (
    <div className='container'>
      <h4>Location Availability:</h4>
      <hr />
      <table class="table table-striped table-hover">
        <thead>
          <tr className='table-primary'> 
            <th scope="col">Location ID</th>
            <th scope="col">Location Name</th>
            <th scope="col">Positions Avail.</th>
          </tr>
        </thead>
        <tbody>
            <tr>
              <th scope="row">111</th>
              <td>Teaneck, New Jersey</td>
              <th scope="row">55</th>
            </tr>
            <tr>
              <th scope="row">222</th>
              <td>Alpharetta, Georgia</td>
              <th scope="row">111</th>
            </tr>
            <tr>
              <th scope="row">333</th>
              <td>New Delhi, India</td>
              <th scope="row">16</th>
            </tr>
            <tr>
              <th scope="row">444</th>
              <td>Shire, Middle Earth</td>
              <th scope="row">200</th>
            </tr>
            <tr>
              <th scope="row">444</th>
              <td>London, United Kingdom</td>
              <th scope="row">200</th>
            </tr>
        </tbody> 
      </table>
    </div>
  )
}
