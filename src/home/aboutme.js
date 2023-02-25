import React from "react";
import { Home } from './home';
import softSuaveLogo from './softSuaveLogo.png';
import cognizantLogo from './cognizantLogo.png';
import oracle from './oracle.png';
import amex from './americanexpress.png';
import codeBlack from './styleTheme/images/arts/intro-section-illustration.png';
import { FaLinkedin } from "react-icons/fa";

const aboutMe = `
Since beginning my journey as a Software Engineer Intern , 
I have been working as a developer in an Organisation.
I have done remote work for Friends , Family and Private Startups.
Collaborated with talented people to create products for both business and personal use.
`
const greetingText = `Hi, I’m Arijit!! Nice to meet you...`;
export const AboutMe = () => {
    return (
        <>
            <section id="home" class="intro-section">
                <div class="container">
                    <div class="row align-items-center text-white">

                        <div class="col-md-6 intros text-start">
                            <h1 class="display-2">
                                <span class="display-2--intro">Hey!, I'm Arijit</span>

                            </h1>
                            <h2><Home /></h2>
                            <button type="button" class="rounded-pill btn-rounded">
                                Get in Touch
                                <span className="contactMe">
                                    <a class="button" href="https://www.linkedin.com/in/arijit-sengupta-/">
                                        <i style={{ 'font-size': '5rem', 'color': '#0072b1' }}>
                                            <FaLinkedin />
                                        </i>
                                    </a>
                                </span>
                            </button>
                        </div>

                        <div class="col-md-6 intros text-end">
                            <div class="video-box">
                                <img src={codeBlack} alt="video illutration" class="img-fluid" />
                                {/* <a href="#" class="glightbox position-absolute top-50 start-50 translate-middle">
                                        <span>
                                            <i class="fas fa-play-circle"></i>
                                        </span>
                                        <span class="border-animation border-animation--border-1"></span>
                                        <span class="border-animation border-animation--border-2"></span>
                                    </a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffffff" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,208C384,192,480,128,576,133.3C672,139,768,213,864,202.7C960,192,1056,96,1152,74.7C1248,53,1344,107,1392,133.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </section>

            {/* <div className="container aboutMe">
                <div className="row ">
                    <div className="col-sm-3">
                    </div>
                    <div className="col-sm-9">
                        <h1 className="greetText">Woooh</h1>
                    </div>
                </div>
            </div> */}
            <hr />
            {/* <div className="container">
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
            </div> */}
            <section id="campanies" class="campanies">
                <div class="container">
                    <div class="row text-center">
                        <h4 class="fw-bold lead mb-3">Worked for campanies like</h4>
                        <div class="heading-line mb-5"></div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-3 col-md-3 col-lg-2 companyBox">

                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-2 companyBox">
                            <div class="campanies__logo-box shadow-sm">
                                <img src={softSuaveLogo} alt="softSuaveLogo" title="Soft Suave Logo" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-2 companyBox">
                            <div class="campanies__logo-box shadow-sm">
                                <img src={cognizantLogo} alt="cognizantLogo" title="Cognizant" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-sm-3  col-md-3 col-lg-2 companyBox">
                            <div class="campanies__logo-box shadow-sm">
                                <img src={oracle} alt="oracle" title="Oracle" class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-sm-3 col-md-3 col-lg-2 companyBox">
                            <div class="campanies__logo-box shadow-sm">
                                <img src={amex} alt="amex" title="American Express" class="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}