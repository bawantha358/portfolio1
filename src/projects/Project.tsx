
import css from './project.module.css';
import mac from './../assets/mac.png'
import { FaGitAlt } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";

function Projects() {
    return (
        <div className={css.container} id='projects'>
            <div className={css.blueBox}></div>
            <div className={css.textheading}>Projects</div>
            <div className={css.samplesGrid}>
                <div className={css.containercard}>
                    <div className={css.mac}>
                        <img src={mac} alt="" />
                        <div className={`${css.imgBx} ${css.img1}`}></div>
                        <div className={css.links}><FaGitAlt /> <CiLogin /></div>
                    </div>
                    <div className={css.mac}>
                        <img src={mac} alt="" />
                        <div className={`${css.imgBx} ${css.img2}`}></div>
                        <div className={css.links}><FaGitAlt /> <CiLogin /></div>
                    </div>
                    <div className={css.mac}>
                        <img src={mac} alt="" />
                        <div className={`${css.imgBx} ${css.img3}`}></div>
                        <div className={css.links}><FaGitAlt /> <CiLogin /></div>
                    </div>
                    {/* <div className={css.item}>
                        <div className={css.card}>
                            <div className={`${css.circle} ${css.circle2}`}></div>
                            <div className={`${css.circle} ${css.circle1}`}></div>
                            <img src={homeweb} />
                        </div>
                        <div className={css.content}>
                            <div className={css.links}><FaGitAlt /></div>
                            <div className={css.links}><CiLogin /></div>
                        </div>
                    </div>
                    <div className={css.item}>
                        <div className={css.card}>
                            <div className={`${css.circle} ${css.circle2}`}></div>
                            <div className={`${css.circle} ${css.circle1}`}></div>
                            <img src={sinhalatypingweb} />
                        </div>
                        <div className={css.content}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus felis, porttitor eu est sit amet, aliquet laoreet ligula.</p>
                        </div>
                    </div>
                    <div className={css.item}>
                        <div className={css.card}>
                            <div className={`${css.circle} ${css.circle2}`}></div>
                            <div className={`${css.circle} ${css.circle1}`}></div>
                            <img src={cartweb} />
                        </div>
                        <div className={css.content}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dolor mauris, eleifend ac fermentum at, pellentesque non sem. Vivamus lectus felis, porttitor eu est sit amet, aliquet laoreet ligula.</p>
                        </div>
                    </div> */}
                </div>



            </div>
        </div>
    )
}

export default Projects;