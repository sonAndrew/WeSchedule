import React from "react";

export const Button = () => {
    return (
        <div>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">Create New +</button>

            {/* <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
                    </div>
                        <div class="dropdown mt-3">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            Dropdown button
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div> */}


            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                <div className="offcanvas-header">
                    <h2>Report Form:</h2>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <br />
                <div className="container">
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
                </div>
                
                <div className="container">
                    <form className="row">
                        <label className="form-label">
                            First Name:
                            <input type="text" class="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="basic-addon1" />
                            <br />
                            Last Name:
                            <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="basic-addon1" />
                            <br />
                        </label>
                    </form>
                    <form className="row">
                        <label className="form-label">
                            Select your Department: 
                            <select className="form-select">
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
                    </form>
                    <br />
                    <div className="row container">
                        <input type="submit" value="Submit" className="btn btn-primary" />
                    </div>
                </div>
            </div>
        </div>
    )
}