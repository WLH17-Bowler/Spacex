import React, {Component} from 'react'

export default class Top extends Component {
    state = {}
    render() {
        return (
            <div>
                <div id="main-img">
                <div id="mini-footer">

                    <div id="carousel-header">
                        <h1> NASA ASTRONAUTS ON CREW DRAGON </h1>
                        <button id="button"  > LEARN MORE </button>
                    </div>
                    <div className="carousel">
                        <div id="deadspace"></div>
                        <div>
                            <div id="linkbox"> 
                                <p id="number">01</p>
                                <p> STARLINK MISSION </p>
                            </div>
                        </div>
                        <div>
                            <div id="linkbox"> 
                                <p id="number">02</p>
                                <p> SMALLSAT RIDESHARE PROGRAM </p>
                            </div>
                        </div>
                        <div>
                            <div id="linkbox"> 
                                <p id="number">03</p>
                                <p> NASA ASTRONAUTS ON CREW DRAGON </p>
                            </div>
                        </div>
                        <div id="deadspace"></div> 
                    </div>
                </div>
                </div>
            </div>
        )
    }
}