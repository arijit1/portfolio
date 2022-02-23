import './nav.css';
import { BrowserRouter, NavLink} from 'react-router-dom';
import {  Route, Routes } from 'react-router-dom';
import { AboutMe } from '../home/aboutme';
import { Skills } from '../home/projects';
import {Technology} from '../home/techStack';
import {Education} from '../home/education';
import profilePicture from './profilePic.png'

function Navbar() {
    return (
        <><BrowserRouter>
            <nav id="sidebarMenu" className="sidebar bg-white">
                <div className="">
                    <div className="list-group list-group-flush mx-3 mt-4">
                        <img
                            src={profilePicture}
                            className="rounded-circle"
                            height="200"
                            alt="Avatar"
                            loading="lazy"
                        />
                         <div className="list-group-item" >
                           <p style={{'margin-left':'2rem'}}>DEVELOPER</p>
                        </div>
                        <div className="list-group-item list-group-item-action py-2 ripple" >
                            <NavLink className="nav-link" to="/about-me">About Me</NavLink>
                        </div>
                        <div className="list-group-item list-group-item-action py-2 ripple" >
                            <NavLink className="nav-link" to="/experience">Experience</NavLink>
                        </div>
                        <div className="list-group-item list-group-item-action py-2 ripple" >
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </div>
                        <div className="list-group-item list-group-item-action py-2 ripple" >
                            <NavLink className="nav-link" to="/tech-stack">Tech Stack</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
            
          <Routes>
              <Route exact path="/" element={<AboutMe />} />
              <Route path="/projects" element={<Skills />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/experience" element={<Education/>}/>
              <Route path="/tech-stack" element={<Technology />} />
            </Routes>
     
        </BrowserRouter>
        </>
    );
}
export default Navbar;
