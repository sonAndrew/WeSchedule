import React from 'react';

import { Outlet, Link } from 'react-router-dom'

import { Sidebar } from '../Sections/Navigation/Sidebar';

export const Layout = () => {
    return (
        <div className="cotainer">
            <section className="row">
                <section className="col-sm-2">
                    <Sidebar 
                        link={
                            <Link className='nav-link' to="/overview">
                                Overview
                            </Link>
                        }
                        link2={
                            <Link className='nav-link' to="/dashboard">
                                Dashboard
                            </Link>
                        }
                        link3={
                            <Link className='nav-link' to="/reports">
                                Reports
                            </Link>
                        }
                    />
                </section>
                <section className="col-lg">
                    <Outlet />
                </section>
            </section>
        </div>
    )
}