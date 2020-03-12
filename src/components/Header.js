import React, {Component} from 'react'
import logo from '../spacex_logo_white.png'

class Header extends Component {
    state = {}
    render() {
        return (
            <div id="app-header">
                <div></div>
                    <div id="left-header">
                        <img id="logo" src={logo} alt="" />
                        <span id="link"> FALCON 9 </span>
                        <span id="link"> FALCON HEAVY </span>
                        <span id="link"> DRAGON </span>
                        <span id="link"> STARSHIP </span>
                    </div>
                    <div id="right-header">
                        <span id="link"> UPDATES </span>
                        <span id="link"> ABOUT SPACEX </span>
                        <span id="link"> CAREERS </span>
                        <span class="shop"> SHOP </span>
                    </div>
                <div></div>
            </div>
        )
    }
}
export default Header