import React from 'react' 
import img from '../img.png';
import Icon from '../Icon.png'
import shareButton from '../share button.png'
import camera from '../camera.png'

function Header() {

const hoverClass = document.querySelector('.hoverClass')

const changeDisplay = function() {
    hoverClass.style.display = 'flex'
  }
const removeDisplay = function() {
    hoverClass.style.display = 'none'
  }

    return  <header className="App-header">
        <div className="div1">
      <img src={img} className="App-logo" alt="profile" id='profile__img' onMouseOut={removeDisplay} onMouseOver={changeDisplay}></img>
      <div className="hoverClass"><img src={camera} alt="profile_hover"></img></div>
            <p id="twitter" title='ayo'>0x_founder</p>
            <p id="slack">nonfungibleayo.eth</p>
        </div>
        <div className="div2">
        <img src={Icon} className="share_btn_desktop" alt='share button'></img>
          <img src={shareButton} className="share_btn" alt='share button'></img>
        </div>
      </header>
}

export default Header