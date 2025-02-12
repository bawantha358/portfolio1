

import imgAvatar from './../assets/aboutMeImg5.jpg'
import css from './AboutMe.module.css';

function AboutMe() {
    return (
        <div className={css.container} id='aboutMe'>
            <div className={css.blueBox}></div>
            <div className={css.textheading}>About Me</div>
            <div className={css.flexContainer}>
                <img src={imgAvatar} alt="" />
                <div className={css.paragraph}>
                    <p>Hi, I’m Bawantha—a full-stack web developer passionate about crafting seamless, high-performance web applications.  I thrive on building elegant solutions that blend functionality with great user experiences. From front-end development to back-end architecture, I enjoy transforming ideas into reality through clean, scalable, and efficient code.<br/><br/>

With a strong problem-solving mindset, I specialize in designing intuitive user interfaces, optimizing performance, and developing robust APIs. I believe in continuous learning and staying ahead of the latest web technologies to create modern, future-ready applications.<br/><br/>

Beyond coding, I find inspiration in nature, which fuels my creativity and problem-solving approach. When I’m not immersed in development, you’ll likely find me running, exploring the outdoors, or brainstorming my next big project.

Let’s connect and build something incredible together!</p>
                </div>
            </div>
        </div>
    )
}
export default AboutMe;