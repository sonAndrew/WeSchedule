// Todo
// create a report form using the Bootstrap Forms
// the form has inputs for data 
// Use the fields below
// id - auto generated, title, summary, introduction, body, department - drop down and user - drop down 
import React from 'react';

export const ReportForm = () => {

    return (
        <div>
            <h4>Report Form:</h4>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Title:</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" />
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Summary:</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea2" class="form-label">Introduction:</label>
                <textarea class="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea3" class="form-label">Body:</label>
                <textarea class="form-control" id="exampleFormControlTextarea3" rows="3"></textarea>
            </div>
            
            <form>
        <label>
          Select your User: 
          <select>
            <option value="User 1">User 1</option>
            <option value="User 2">User 2</option>
            <option value="User 3">User 3</option>
            <option value="User 4">User 4</option>
            <option value="User 5">User 5</option>
            <option value="User 6">User 6</option>
            <option value="User 7">User 7</option>
            <option value="User 8">User 8</option>        
          </select>
        </label>

        <label>
          &nbsp;&nbsp;&nbsp;Select your Department: 
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
        &nbsp;&nbsp;&nbsp;
        <input type="submit" value="Submit" />
      </form>
        </div>
    );

}