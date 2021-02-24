import classes from './skills.module.scss'
import React from 'react'

const Skills = ()=>{

    return(
        <div className={classes.skills}>
            <header>
                <p>Skills</p>
            </header>
            <main>
                <div></div>
                <div>
                <div className="console-content">
                            <ul>
                                <li>&lt;<span className={classes.html}>html</span>&gt;</li>
                                <li>
                                  <ul className="no-top-padding">
                                    <li>
                                      &lt;<span className="html-1">head</span>&gt;
                                      &lt;/<span className="html-1">head</span>&gt;
                                    </li>
                                    <li>&lt;<span className="html-1">body</span>&gt;</li>
                                    <li>
                                      <ul className="no-top-padding">
                                        <li>&lt;<span className="html-1">ul</span>&gt;</li>
                                        <ul className="no-top-padding">
                                          <li>
                                            &lt;<span className="html-1">li</span>&gt;
                                            <span className="html-2">JavaScript</span>
                                            &lt;/<span className="html-1">li</span>&gt;</li>
                                          <li>
                                            &lt;<span className="html-1">li</span>&gt;
                                            <span className="html-2">ReactJS</span>
                                            &lt;/<span className="html-1">li</span>&gt;
                                          </li>
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">React Native</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">HTML5</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">CSS3</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">Bootstrap</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">Redux</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                         
                                          <li>
                                            &lt;<span className={classes.html_text}>li</span>&gt;
                                            <span className="html-2">SASS</span>
                                            &lt;/<span className={classes.html_text}>li</span>&gt;
                                          </li>
                                          
                                        </ul>
                                        <li>&lt;/<span className={classes.html_text}>ul</span>&gt;</li>
                                      </ul>
                                    </li>
                                    <li>&lt;/<span className={classes.html_text}>body</span>&gt;</li>
                                  </ul>
                                </li>
                                <li>&lt;/<span className={classes.html_text}>html</span>&gt;</li>
                            </ul>
                        </div>
                    <div>
                    </div>
                </div>
            </main>
        </div>
    )
}
export default Skills