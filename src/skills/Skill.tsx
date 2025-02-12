
import css from './skill.module.css';

function Skills() {
    return (
        <div className={css.container} id='skills'>
            <div className={css.blueBox}></div>
            <div className={css.textheading}>Skills</div>
            <div className={css.flexdiv}>
                <div className={css.para}>
                    <p>I have a strong command of modern web development frameworks and database technologies, allowing me to build efficient, scalable, and user-friendly applications.<br/><br/> My expertise in front-end development includes working with React, Next.js, and Angular, enabling me to create dynamic and high-performance user interfaces. On the back-end, I specialize in Express.js and Spring Boot, developing robust and secure server-side applications that seamlessly integrate with databases and APIs.<br/><br/>

With a deep understanding of database management, I work extensively with MongoDB for flexible, NoSQL solutions and leverage my Advanced SQL skills to optimize relational database performance. My ability to design, implement, and maintain efficient database structures ensures smooth data flow and reliability in every project.<br/><br/>

I am always exploring new technologies to stay ahead in the ever-evolving world of web development, continuously refining my skills to deliver innovative and future-ready solutions.</p>
                </div>
                <div className={css.skills}>
                    <li>
                        <h3>Angular</h3>
                        <span className={css.bar}><span className={css.angular}></span></span>
                    </li>

                    <li>
                        <h3>Spring boot</h3>
                        <span className={css.bar}><span className={css.springboot}></span></span>
                    </li>

                    <li>
                        <h3>React</h3>
                        <span className={css.bar}><span className={css.react}></span></span>
                    </li>

                    <li>
                        <h3>Next.js</h3><span className={css.bar}><span className={css.nextjs}></span></span>
                    </li>
                    
                    <li>
                        <h3>express.js</h3><span className={css.bar}><span className={css.expressjs}></span></span>
                    </li>
                    <li>
                        <h3>php</h3><span className={css.bar}><span className={css.php}></span></span>
                    </li>
                    <li>
                        <h3>MongoDB</h3><span className={css.bar}><span className={css.mongoDB}></span></span>
                    </li>
                    <li>
                        <h3>SQL</h3><span className={css.bar}><span className={css.sql}></span></span>
                    </li>
                    <li>
                        <h3>Sinhala Typing</h3><span className={css.bar}><span className={css.sinhalatyping}></span></span>
                    </li>
                    <li>
                        <h3>Photoshop</h3><span className={css.bar}><span className={css.photoshop}></span></span>
                    </li>
                </div>

            </div>
        </div>
    )
}

export default Skills;