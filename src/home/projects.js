import React from "react";
import './home.css';
import MERN from './MERN.png';
import PERN from './PERN.png';
import FakeNews from './FakeNews.png';
import BluetoothControlCar from './BluetoothControlCar.png';
import docsehelp from './docsehelp.png';

export const Skills = () => {
    return (
        <>
            <section id="portfolio" class="portfolio">
                <div class="container">
                    <div class="row text-center mt-5">
                        <h1 class="display-3 fw-bold text-capitalize">Projects Worked On</h1>
                        <div class="heading-line"></div>
                        <p class="lead">

                        </p>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-md-6">
                            <div class="portfolio-box shadow">
                                <img src={MERN} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>Bus Ticket Application</h4>
                                        <p>MERN STACK APPLICATION</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="portfolio-box shadow">
                                <img src={PERN} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>Blog Writing Platform</h4>
                                        <p>PERN STACK APPLICATION</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="portfolio-box shadow">
                                <img src={FakeNews} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>DETECTING FAKE NEWS</h4>
                                        <p>Trained Model On Detecting Fake News with Python (sk-learn/pandas/numpy)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="portfolio-box shadow">
                                <img src={BluetoothControlCar} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>Bluetooth Control Car</h4>
                                        <p>Developed a Prototype which Achieves Bluetooth control communication between the mobile and the vehicle Using Arduino.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="portfolio-box shadow">
                                <img src={docsehelp} alt="portfolio 1 image" title="portfolio 1 picture" class="img-fluid" />
                                <div class="portfolio-info">
                                    <div class="caption">
                                        <h4>5G HACKATHON</h4>
                                        <p>Developed a working prototype for an 5G Healthcare Idea using Python as Backend and Reactjs as Frontend.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}