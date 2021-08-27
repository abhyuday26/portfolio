import React, { useEffect,useRef } from 'react';
import './intro.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { init } from 'ityped';
export default function Intro() {
    const textRef= useRef();

    useEffect(() => {
        init(textRef.current, {
                backDelay:1500,
                showCursor:true,
                strings: ['Web Developer', 'Python Programmer','Problem Solver' ] 
            })

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="right" id="right">
                <div className="wrapper" >
                    <h2>Hi My name is</h2>
                    <h1>Abhyuday Singh</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                </div>
                <div className="icons">
                    <a href="https://twitter.com/abhyuday_singh9?s=08" target="_blank" rel="noopener noreferrer" className="twt"><TwitterIcon className="icon"></TwitterIcon></a>    
                    <a href="https://www.linkedin.com/in/abhyuday-singh-9778981a5/" target="_blank" rel="noopener noreferrer" className="link"><LinkedInIcon className="icon"></LinkedInIcon></a>
                    <a href="https://github.com/abhyuday26" target="_blank" rel="noopener noreferrer" className="git"><GitHubIcon className="icon"></GitHubIcon></a>
                    <a href="https://www.instagram.com/abhyudaysingh9/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer" className="ins"><InstagramIcon className="icon"></InstagramIcon></a>
                </div>
                <a href="#home" className="down">
                   <ExpandMoreOutlinedIcon className="down1"></ExpandMoreOutlinedIcon>

                </a>
            </div>
        </div>
    )
}
