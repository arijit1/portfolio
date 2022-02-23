import React from "react";
import { Home } from './home';

const aboutMe = `
Since beginning my journey as a Software Engineer Intern , 
I have been working as a developer in an Organisation.
I have done remote work for Friends , Family and Private Startups.
Collaborated with talented people to create products for both business and personal use.
`
const greetingText =   `Hi, I’m Arijit!! Nice to meet you...`;
export const AboutMe = () => {
    return (
        <>
            <Home />
            <div className="container aboutMe">
                <div className="row ">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-9">
                        <h1 className="greetText">{greetingText}</h1>
                        <p>{aboutMe}</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <div className="row ">
                    <div className="col-sm-2">
                    </div>
                    <div className="col-sm-8">
                        <div className="footer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="green" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                            </svg>
                            <span className="footer-text"> Happy Clients</span>
                        </div>
                        <div className="footer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" fill="blue" className="bi bi-people-fill" viewBox="0 0 16 16">
                                <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                <path fill="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z" />
                                <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                            </svg>
                            <span className="footer-text"> Collaboration</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}