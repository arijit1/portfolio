import React from "react";
import './home.css';

export const Skills = () => {
    return (
        <>
            <div className="container projects">
                <div className="row">
                    <div className="col-sm-4 projects">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">BUS TICKET APPLICATION</h5>
                                <p className="card-text">MERN Stack Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 projects">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">BLOG APPLICATION</h5>
                                <p className="card-text">PERN Stack Development</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 projects">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">DETECTING FAKE NEWS</h5>
                                <p className="card-text">By Using ML- Random Forest Algorithm Predicted Fake News On Social Media</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 projects">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Bluetooth Control Car Using Arduino</h5>
                                <p className="card-text">Achieved Bluetooth control communication between the mobile and the vehicle.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 projects">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">5G HACKATHON</h5>
                                <p className="card-text">Build cloud based application which can communicate over 5G network using Python and React Frontend (Client Side).Included Machine Learning Services.
                                </p>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </>
    )
}