import React from 'react';
import textContent from '../copy.json';
import './home.css';
// import { IconName } from "react-icons/di";

export const Home = () => {
    return (
        <div>

            <div className="jumbotron">
                <div className="container">
                    <h1>{textContent.profile}</h1>
                    <p>{textContent['profile-summary']}</p>
                </div>
            </div>
        </div>
    )
}
