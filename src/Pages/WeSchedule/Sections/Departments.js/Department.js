// Todo
// Create a component that shows a table using the Bootstrap Tables as reference
// using the elements below:
// id, name

import React from 'react';


export const Departments = () => {

//     const handleChange = (event) => {
//       preventDefault();
//     this.setState({value: event.target.value});
//   }

//     const handleSubmit = (event) => {
//     };

  
    return (
      <form>
        <label>
          Select your Department:
          <select>
            <option value="Department 1">Department 1</option>
            <option value="Department 2">Department 2</option>
            <option value="Department 3">Department 3</option>
            <option value="Department 4">Department 4</option>
            <option value="Department 5">Department 5</option>
            <option value="Department 6">Department 6</option>
            <option value="Department 7">Department 7</option>
            <option value="Department 8">Department 8</option>        
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );

}