
import css from './introduction.module.css';
import { Button } from 'primereact/button';
import cv from './../assets/bawatha_CV.pdf'
import 'primereact/resources/themes/lara-light-blue/theme.css'; // Theme
import 'primereact/resources/primereact.min.css';
function Introduction() {

    return (
        <div className={css.container} id='home'>
            <div className={css.workWithMe}></div>
            <div className={css.blueBox}></div>
            <div className={css.firstItem}>
                <div className={css.headingItems}>
                    <span className={css.number}>01</span>
                    <h3><span className={css.grayText}>&#60;</span> Hello, I'm <span className={css.blueText}>Bawantha!</span> <span className={css.grayText}>&#62;</span></h3>
                </div>
            </div>
            <div className={css.secondItem}>
                <div className={css.headingItems}>
                    <span className={css.number}>02</span>
                    <h3><span className={css.grayText}>&#60;</span> and I'm a <span className={css.blueText}>full-stack web developer </span><span className={css.grayText}>&#62;</span></h3>
                </div>

                <p className={css.detail}> I'm passionate about building dynamic, scalable, and user-friendly applications. With expertise in both front-end and back-end technologies, I craft seamless digital experiences that merge functionality with great design. Whether it's developing custom web applications, optimizing performance, or integrating APIs, I love solving complex challenges and bringing ideas to life.  </p>
                <div className={css.btnHire}>
                    <a href='#contact'><Button label="Hire Me" rounded  /></a>
                    
          
                    <a href={cv} download style={{marginLeft: "15px"}}><Button label="Download CV" severity="secondary" rounded /></a>
                </div>
            </div>
        </div>
    )

}

export default Introduction;