

import css from './App.module.css';
import imgAvatar from './assets/profileimg3.png'
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";
import { MdOutlineContactless } from "react-icons/md";
import Introduction from "./introduction/Introduction";
import AboutMe from "./aboutMe/AboutMe";
import ContactMe from './contactMe/ContactMe';
import Skills from './skills/Skill';
import Projects from './projects/Project';
import Dragable from './Dragable';

function App() {

  return (
    <>
      <div className={css.container}>
        <div className={css.fixedColumn}>
          <div className={css.imgAvatar}>
            <img src={imgAvatar} alt="Avatar" style={{ width: '200px' }} />
          </div>
          <div className={css.navbar}>
            <ul>
              <li><a className={css.active} href="#home"> <span className={css.navItems}><FaHome /></span> Home</a></li>
              <li><a href="#aboutMe"><span className={css.navItems}><CgProfile /></span>About Me</a></li>
              <li><a href="#skills"><span className={css.navItems}><HiOutlineLightBulb /></span>Skills</a></li>
              <li><a href="#projects"><span className={css.navItems}><FaFilePen /></span>Projects</a></li>
              <li><a href="#contact"><span className={css.navItems}><MdOutlineContactless /></span>Contact</a></li>
            </ul>
          </div>
        </div>
        <div className={css.contentColumn}>
          <div className={css.gridContent} >
            
          </div>
          <div className={css.gridContent} >
            <Introduction></Introduction>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects>
            <ContactMe></ContactMe>
            <Dragable></Dragable>
            
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
