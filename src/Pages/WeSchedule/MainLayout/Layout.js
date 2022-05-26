import React from 'react';

import { Outlet, Link } from 'react-router-dom'

import { Sidebar } from '../Sections/Navigation/Sidebar';

export const Layout = () => {
    return (
        <div className="cotainer">
            <section className="row">
                <section className="col-sm-2">
                    <Sidebar 
                        title={
                            <Link className='navbar-brand link text-white' aria-current='page' to="/overview">
                                WeSchedule
                            </Link>
                        }
                        link={
                            <Link className='nav-link active text-white' aria-current='page' to="/overview">
                                Overview
                            </Link>
                        }
                        link2={
                            <Link className='nav-link text-white' to="/dashboard">
                                Dashboard
                            </Link>
                        }
                        link3={
                            <Link className='nav-link text-white' to="/reports">
                                Reports
                            </Link>
                        }
                    />
                </section>
                <section className="col-sm-1"></section>
                <section className="col-lg-4">
                    <Outlet />
                </section>
            </section>
        </div>
    )
}