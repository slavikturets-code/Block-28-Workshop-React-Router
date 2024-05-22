import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div id="footer">
            <Link to="/">home</Link>
            <Link to="/blue">blue</Link>
            <Link to="/red">red</Link>
            <Link to="/green">green</Link>
            <Link to="/purple">purple</Link>
        </div>
    );
}