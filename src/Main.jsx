import profile from './images/PRASANNA_P- Profile.png'
import aboutProfile from './images/PRASANNA P.jpeg'
import skilImg from './images/work3.jpg'
import elearningImg from "./images/e-learning.jpg"
import gameImg from "./images/Game.jpg"
import healthcareImg from "./images/healthcare.jpg"
import Resume from "./Resume/Prasanna_React Developer.pdf";
const Main = () =>{
    
    return (

        <main className="l-main">

        {/* ===== HOME ===== */}

        <section className="home bd-grid" id="home">

            <div className="home__data">
                <h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Prasanna</span><br/> React Developer</h1>
                <div className='btns'>
                <a href="#contact" className="button">Contact</a>
                <a href={Resume} className="button" target='blank'  >Resume</a>
                </div>
                
            </div>

            <div className="home__social">
                <a href="https://www.linkedin.com/in/prasanna07" target='blank' className="home__social-icon"><i className='bx bxl-linkedin'></i></a>
                <a href="https://github.com/Coderprasanna21" target='blank' className="home__social-icon"><i className='bx bxl-github' ></i></a>
            </div>

            <div className="home__img">
                <img src={profile} alt='Profile'/>
            </div>

        </section>

        {/* <!--===== ABOUT =====--> */}

        <section className="about section " id="about">
            <h2 className="section-title">About</h2>

            <div className="about__container bd-grid">
                <div className="about__img">
                    <img src={aboutProfile} alt=""/>
                </div>
                
                <div>
                    <h2 className="about__subtitle">I'am Prasanna</h2>
                    <p className="about__text">I am a skilled and dedicated React developer with a passion for creating dynamic and responsive web applications. I have a strong foundation in JavaScript, HTML, and CSS, and I specialize in using React.js to build user interfaces that are both efficient and intuitive. I hold a Bachelor of Computer Applications (BCA) degree, which I completed at Annamalai University.</p>           
                </div>                                   
            </div>
        </section>

        {/* <!--===== SKILLS =====--> */}
        <section className="skills section" id="skills">
            <h2 className="section-title">Skills</h2>

            <div className="skills__container bd-grid">          
                <div>
                    <h2 className="skills__subtitle">Profesional Skills</h2>
                    <p className="skills__text">As a React Developer, I excel in both technical and soft skills necessary for crafting sophisticated web applications.</p>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-html5 skills__icon'></i>
                            <span className="skills__name">HTML5</span>
                        </div>
                        <div className="skills__bar skills__html">

                        </div>
                        <div>
                            <span className="skills__percentage">95%</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-css3 skills__icon'></i>
                            <span className="skills__name">CSS3</span>
                        </div>
                        <div className="skills__bar skills__css">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">85%</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxl-javascript skills__icon' ></i>
                            <span className="skills__name">JAVASCRIPT</span>
                        </div>
                        <div className="skills__bar skills__js">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">65%</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxs-paint skills__icon'></i>
                            <span className="skills__name">Reactjs</span>
                        </div>
                        <div className="skills__bar skills__ux">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">25%</span>
                        </div>
                    </div>
                    <div className="skills__data">
                        <div className="skills__names">
                            <i className='bx bxs-paint skills__icon'></i>
                            <span className="skills__name">Git&Github</span>
                        </div>
                        <div className="skills__bar skills__ux">
                            
                        </div>
                        <div>
                            <span className="skills__percentage">20%</span>
                        </div>
                    </div>
                </div>
                
                <div>              
                    <img src={skilImg} alt="" className="skills__img"/>
                </div>
            </div>
        </section>

        {/* <!--===== WORK =====--> */}
        <section className="work section" id="work">
            <h2 className="section-title">Projects</h2>

            <div className="work__container bd-grid">

                <a href="https://coderprasanna21.github.io/E-Learning-Platform/" className="work__img" target='blank'>
                    <img src={elearningImg} alt=""/>
                    <div className="proj-details">
                        <div className='proj-title'>
                        <span>E-learning Platform </span>
                        <p>(HTML,CSS)</p>
                        </div>
                        <div className='proj-description'>
                            <p>♦️ Our online learning platform boasts a diverse array of courses spanning various subjects, catering to learners of all ages and backgrounds.</p>
                            <p>♦️ Its user-friendly interface ensures accessibility, allowing individuals to learn at their own pace and convenience.</p>
                        </div>
                    </div>

                </a>
                <a href="https://coderprasanna21.github.io/Rock_paper_Scissors/" className="work__img" target='blank'>
                    <img src={gameImg} alt=""/>
                    <div className="proj-details">
                        <div className='proj-title'>
                        <span>Rock Paper & Scissors </span>
                        <p>(HTML,CSS,Javascript)</p>
                        </div>
                        
                        <div className='proj-description'>
                            <p>♦️ The Rock, Paper, Scissors game, crafted with HTML, CSS, and JavaScript, engages users through  and dynamic DOM updates. </p>
                            <p>♦️ JavaScript allowing players to engage in the timeless challenge with seamless flow and captivating visuals.</p>
                        </div>
                    </div>

                </a>
                <a href='https://coderprasanna21.github.io/E-Healthcare-Platform/' className="work__img" target='blank'>
                    <img src={healthcareImg} alt=""/>
                    <div className="proj-details">
                        <div className='proj-title'>
                        <span>E-Healthcare Platform </span>
                        <p>(HTML,CSS,Javascript)</p>
                        </div>
                        <div className='proj-description'>
                            <p>♦️ The E-Healthcare project utilizes HTML, CSS, and JavaScript to create an interactive platform for medical services. </p>
                            <p>♦️ Our Platform offers users seamless access to healthy diet plans,personal Trainer Support, and Simply exercises.</p>
                        </div>

                    </div>
                </a>
               
            </div>
        </section>
        
    </main>
    );
}
export default Main;