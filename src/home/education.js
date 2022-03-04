import './home.css';
import kiitlogo from './kiitLogo.png';
import dpsLogo from './dpsLogo.png';
import softSuaveLogo from './softSuaveLogo.png';
import cognizantLogo from './cognizantLogo.png';

export function Education() {
    return (
        <>
            <div className=" container Education-page">
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8 Education-page'>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Cognizant Information Technology<img alt='logo' style={{ 'float': 'right' }} src={cognizantLogo} width="150px" height="100px" /></h2>
                                <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>Bangalore</p>
                                <p className="card-text">Developer</p>
                                <p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg> January-2020 - Present</p>
                                <div className="card-text">
                                    <ul>
                                        <li>Full Stack Developer</li>
                                        {/* <li>Contractor to American Express as a Frontend(React) Developer. Directly work with market to understand the requirement and implement.</li>
                                        <li>Contributed working on new product launches for American Express UK market.</li>
                                        <li>Build the Frontend of the application with React framework.</li>
                                        <li>Collaborated with other team, to understand the existing implementation.</li>
                                        <li>Worked for SNR(Save and Retrieve) services for American Express Cards.</li>
                                        <li>Worked with marketing teams to build there campaign in Application using React Tech.</li>
                                        <li>Contribute on Architect planning and participate on sprint planning.</li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">SOFT SUAVE TECHNOLOGIES Pvt. Ltd. <img alt='logo' style={{ 'float': 'right' }} src={softSuaveLogo} width="100px" height="100px" /></h2>
                                <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>Chennai</p>
                                <p className="card-text">Software Engineer Intern</p>
                                <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg> February-2019 - April-2019</p>
                                <div className="card-text">
                                    <ul>
                                        <li>Worked on Java, PHP,JavaScript.</li>
                                        <li>Was part of the development team for an online education platform project using PHP , Javascript.</li>
                                        <li>Developed a screen tracking application using Spring Boot and React.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Certified Training on BIG DATA- Linker Computers Pvt. Ltd.<img alt='logo' style={{ 'float': 'right' }} src={softSuaveLogo} width="100px" height="100px" /></h2>
                                <p className="card-text"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg> March-2018 - May-2018</p>
                                <p className="card-text">
                                    <ul>
                                        <li>Hands on training on how to deal with unstructured and structured data.</li>
                                        <li>Implemented  HADOOP,HDFS,MAPREDUCE concepts.</li>
                                    </ul>
                                </p>


                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Training on Embedded System. <img alt='logo' style={{ 'float': 'right' }} src={softSuaveLogo} width="100px" height="100px" /></h2>
                                <p className="card-text"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg> December-2017 - January-2018</p>
                                <p className="card-text">
                                    <ul>
                                        <li>Worked on 8051MC and Arduino UNO And did Practical Implementation.</li>
                                    </ul></p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">BACHELOR'S DEGREE <img alt='logo' style={{ 'float': 'right' }} src={kiitlogo} width="100px" height="100px" /></h2>
                                <p className="card-text">KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY</p>
                                <p className="card-text">ELECTRONICS AND TELECOMMUNICATION ENGINEERING</p>
                                <p className="card-text">GRADUATION - <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg></span> 2019</p>

                            </div>
                        </div>
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">SECONDARY SCHOOL <img alt='logo' style={{ 'float': 'right' }} src={dpsLogo} width="100px" height="100px" /></h2>
                                <p className="card-text">DELHI PUBLIC SCHOOL</p>
                                <p className="card-text">className XII - <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                                    <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                    <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg></span> 2015</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

