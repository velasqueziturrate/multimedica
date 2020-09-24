import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
    return (
        <nav className="navbar fixed-top">
            <div>
                <a className="navbar-brand" href="/home">
                    <img src="https://firebasestorage.googleapis.com/v0/b/suministros-multimedica.appspot.com/o/Logo.png?alt=media&token=c39d04bf-8822-4f60-b184-700c41621c48" width={225} height={42} classname="d-inline-block align-top" alt="logo" loading="lazy" />
                </a>
            </div>

        </nav>
    );
}