// Todo
// Create a component that shows a table using the Bootstrap Tables as reference
// using the elements below:
// id, name

import React from 'react';


export const Departments = () => {
  return (
    <div className='container'>
      <h4>Departments and Leads:</h4>
      <hr />
      <table className='table table-striped table-hover'>
        <thead>
          <tr className='table-primary'>
            <th scope='col'>Dept ID</th>
            <th scope='col'>Dept Name</th>
            <th scope='col'>Dept Lead</th>
            <th scope='col'># of Associates</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">19</th>
            <td>Cashiers</td>
            <th>Flow Easy</th>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">22</th>
            <td>Sales Floor</td>
            <th>Eileen Dover</th>
            <td>15</td>
          </tr>
          <tr>
            <th scope="row">24</th>
            <td>Household</td>
            <th>Justin Case</th>
            <td>10</td>
          </tr>
          <tr>
            <th scope="row">25</th>
            <td>Furniture</td>
            <th>John Sidder</th>
            <td>12</td>
          </tr>
          <tr>
            <th scope="row">25</th>
            <td>Furniture</td>
            <th>John Sidder</th>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  )

    // return (
    //     <div className="table-responsive-xl row">
    //         <section className="col">
    //             <h2>Departments and Leads:</h2>
    //         <br></br>
    //         <table class="table, table table-hover, table table-bordered">
    //           <tbody>
    //             <tr>
    //               <th scope="col">Dept #</th>
    //               <th scope="col">Dept Name</th>
    //               <th scope="col">Dept Lead</th>
    //               <th scope="col"># of Associates</th>
    //             </tr>
    //             <tr>
    //               <th scope="row">19</th>
    //               <td>Cashiers</td>
    //               <td>Flow Easy</td>
    //               <td>10</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">22</th>
    //               <td>Sales Floor</td>
    //               <td>Eileen Dover</td>
    //               <td>15</td>
    //             </tr>
                // <tr>
                //   <th scope="row">24</th>
                //   <td>Household</td>
                //   <td>Justin Case</td>
                //   <td>10</td>
                // </tr>
                // <tr>
                //   <th scope="row">25</th>
                //   <td>Furniture</td>
                //   <td>John Sidder</td>
                //   <td>12</td>
                // </tr>
    //             <tr>
    //               <th scope="row">29</th>
    //               <td>Receiving/Dock</td>
    //               <td>Gitter Dunn</td>
    //               <td>14</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">33</th>
    //               <td>Custodial</td>
    //               <td>Dawn D'Tergent</td>
    //               <td>10</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         </section>

    //         <br></br>
    //         <br />

    //         <section className="col">
    //         <h2>Associates by Department:</h2>
    //             <br></br>
    //         <table class="table, table table-hover, table table-bordered">
    //           <thead>
    //             <tr>
    //               <th scope="col">Dept #</th>
    //               <th scope="col">First</th>
    //               <th scope="col">Last</th>
    //               <th scope="col">Role</th>
    //             </tr>
    //           </thead>
    //           <tbody>
    //             <tr>
    //               <th scope="row">19</th>
    //               <td>Dwayne</td>
    //               <td>Johnson</td>
    //               <td>Lead Associate</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">19</th>
    //               <td>Ed</td>
    //               <td>Norton</td>
    //               <td>Associate</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">22</th>
    //               <td>Larry</td>
    //               <td>Bird</td>
    //               <td>Associate</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">24</th>
    //               <td>Charlize</td>
    //               <td>Theron</td>
    //               <td>Lead Associate</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">24</th>
    //               <td>Sandra</td>
    //               <td>Bullock</td>
    //               <td>Associate</td>
    //             </tr>
    //             <tr>
    //               <th scope="row">29</th>
    //               <td>Kate</td>
    //               <td>Beckinsale</td>
    //               <td>Associate</td>
    //             </tr>
    //           </tbody>
    //         </table>
    //         </section>


    //   </div>
    // );

}