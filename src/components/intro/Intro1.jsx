import React, { useEffect,useRef } from 'react';
import './intro.scss';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
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
            <div className="left" id="left">
                <div className="imageContainer">
                    <img src="assets/man.png" alt=""/>
                </div>
            </div>
            <div className="right" id="right">
                <div className="wrapper">
                    <h2>Hi My name is</h2>
                    <h1>Abhyuday Singh</h1>
                    <h3>I'm a <span ref={textRef}></span></h3>
                </div>
                <a href="#home">
                    <img src="assets/down.png" alt="" />

                </a>
            </div>
        </div>
    )
}
