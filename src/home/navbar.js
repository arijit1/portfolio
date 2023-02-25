import './styleTheme/assets/css/style.css';
import { BrowserRouter, NavLink } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import { AboutMe } from '../home/aboutme';
import { Skills } from '../home/projects';
import { Technology } from '../home/techStack';
import { Education } from '../home/education';
import { Services } from '../home/services';
import profilePicture from './profile.jpeg';

function Navbar() {
    return (
        <><BrowserRouter>
            <nav id="sidebarMenu" className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
                <div className="container">
                    <img
                        className="rounded-circle"
                        src={profilePicture}
                        height="125"
                        alt="Avatar"
                        loading="lazy"
                    />
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item"><NavLink className="nav-link" to="/about-me">About Me</NavLink></li>
                            <li class="nav-item"><NavLink className="nav-link" to="/services">Capable Of</NavLink></li>
                            <li class="nav-item"><NavLink className="nav-link" to="/experience">Experience</NavLink></li>
                            <li class="nav-item"><NavLink className="nav-link" to="/projects">Projects</NavLink></li>
                            <li class="nav-item"><NavLink className="nav-link" to="/tech-stack">Tech Stack</NavLink></li>
                        </ul>
                        <button type="button" class="rounded-pill btn-rounded">
                            <a class="button" href="mailto:sengupta.arijit84@gmail.com">sengupta.arijit84@gmail.com</a>
                            <span>
                                <i class="fas fa-phone-alt"></i>
                            </span>
                        </button>
                    </div>
                </div>

            </nav>

            <Routes>
                <Route path="/" element={<AboutMe />} />
                <Route path="/portfolio/" element={<AboutMe />} />
                <Route path="/projects" element={<Skills />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-me" element={<AboutMe />} />
                <Route path="/experience" element={<Education />} />
                <Route path="/tech-stack" element={<Technology />} />
            </Routes>

        </BrowserRouter>
        </>
    );
}
export default Navbar;
