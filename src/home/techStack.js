import './home.css';
import {   FaNodeJs ,FaPython , FaHtml5 ,FaJs,FaReact ,FaCss3Alt, FaCode ,FaCodeBranch} from "react-icons/fa";


export const Technology = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 ">
                        <div className="techstack-icons">
                            <a href="https://github.com/arijit1" className='techstack-icon-github'  style={{ 'font-size': '88px' }}>
                                
                                {<FaCodeBranch/>}
                            </a>
                            <i style={{ 'font-size': '88px','color':'orange' }}>
                                <FaCode/>
                            </i>
                            <i style={{ 'font-size': '88px','color':'skyblue' }}>
                                <FaReact/>
                            </i>
                            <i  style={{ 'font-size': '88px', 'color':'green' }}>
                                <FaNodeJs/>
                            </i>
                            <i  style={{ 'font-size': '88px' , 'color':'blue'}}>
                                <FaPython/>
                            </i>
                            <i  style={{ 'font-size': '88px', 'color':'grey' }}>
                                <FaHtml5/>
                            </i>
                            <i  style={{ 'font-size': '88px' }}>
                                <FaJs/>
                            </i>
                            <i  style={{ 'font-size': '88px', 'color':'purple'  }}>
                                <FaCss3Alt/>
                            </i>
                        </div>
                        <div className="techstack">
                            <ul>
                                <h3>UI DEVELOPMENT</h3>
                                <li>
                                    <p>Javascript</p>
                                </li>
                                <li>
                                    <p>ECMA Script 6</p>
                                </li>
                                <li>
                                    <p>React / Redux / React-Router-Dom</p>
                                </li>
                                <li>
                                    <p>HTML / CSS / BOOTSTRAP</p>
                                </li>
                                <li>
                                    <p>AJAX / JQUERY </p>
                                </li>
                            </ul>
                        </div>
                        <div className="techstack">
                            <ul>
                                <h3>BACKEND DEVELOPMENT</h3>
                                <li>
                                    <p>Java</p>
                                </li>
                                <li>
                                    <p>Spring</p>
                                </li>
                                <li>
                                    <p>Python</p>
                                </li>
                                <li>
                                    <p>Node JS</p>
                                </li>
                                <li>
                                    <p>Solidity </p>
                                </li>
                            </ul>
                        </div>
                        <div className="techstack">
                            <ul>
                                <h3>IDE's</h3>
                                <li>
                                    <p>Eclipse</p>
                                </li>
                                <li>
                                    <p>Visual Studio Code</p>
                                </li>
                                <li>
                                    <p>IntellIJ</p>
                                </li>
                                <li>
                                    <p>Pycharm</p>
                                </li>
                                <li>
                                    <p>Jupyter Notebook </p>
                                </li>
                            </ul>
                        </div>
                        <div className="techstack">
                            <ul>
                                <h3>Version Tool</h3>
                                <li>
                                    <p>Git</p>
                                </li>
                            </ul>
                        </div>
                        <div className="techstack">
                            <ul>
                                <h3>Technologies</h3>
                                <li>
                                    <p>Machine Learning</p>
                                </li>
                                <li>
                                    <p>Artificial Intelligence </p>
                                </li>
                                <li>
                                    <p>Blockchain Development</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}