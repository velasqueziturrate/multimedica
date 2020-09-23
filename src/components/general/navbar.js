import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar fixed-top">
            <div>
                <a className="navbar-brand" href="/home">
                    <img src="https://firebasestorage.googleapis.com/v0/b/multimedica-c8e4c.appspot.com/o/Logo.png?alt=media&token=3f73b42c-f6e6-4f2a-beb4-2aee2ba7ec4b" width={225} height={42} classname="d-inline-block align-top" alt="logo" loading="lazy" />
                </a>
            </div>

        </nav>
    );
}