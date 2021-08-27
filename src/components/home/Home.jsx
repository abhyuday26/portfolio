import React from 'react'
import './home.scss';
export default function Home() {
    return (
        <div className="home" id="home">
            <h1>Projects</h1>
            <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="imgContainer">
                            <img src="assets/mobile.png" className="icon"/>
                        </div>
                        <h2>Portfolio</h2>
                        <h3>This Portfolio was made using ReactJs and SCSS. It has 3 pages namely About, Projects and Contacts.</h3>
                        <a href="https://github.com/abhyuday26/portfolio">Source Code</a>
                    </div>
                    <div className="right">
                        <img src="assets/rart.jpg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                         <div className="imgContainer">
                            <img src="assets/mobile.png" className="icon"/>
                        </div>
                        <h2>Result Analyser</h2>
                        <h3>This python project fetches result from official website of KNIT Sultanpur and displays it in Rank-wise order.</h3>
                        <a href="https://github.com/abhyuday26/KNIT-Result-Analyser">Source Code</a>
                    </div>
                    <div className="right">
                        <img src="assets/pyt4.jpg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <div className="imgContainer">
                            <img src="assets/mobile.png" className="icon"/>
                        </div>
                        <h2>Wiki Path Finder</h2>
                        <h3>This Project gives you shortest Path between two wikipedia pages.</h3>
                        <a href="https://github.com/abhyuday26/Wiki-Path-Finder">Source Code</a>
                    </div>
                    <div className="right">
                        <img src="assets/pyt5.jpg" alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="left">
                        <div className="imgContainer">
                            <img src="assets/mobile.png" className="icon"/>
                        </div>
                        <h2>Dummy Website</h2>
                        <h3>This is a Dummy website of KNIT Sultanpur created using HTML, CSS and Vanilla JS.</h3>
                        <a href="https://github.com/abhyuday26/Knit-Site-New">Source Code</a>
                    </div>
                    <div className="right">
                        <img src="assets/web3.png" alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    )
}
