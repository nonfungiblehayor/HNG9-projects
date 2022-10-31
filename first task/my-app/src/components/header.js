import React, { useRef } from 'react' 
import img from '../img.png';
import Icon from '../Icon.png'
import shareButton from '../share button.png'

function Header() {

    return  <header className="App-header">
        <div className="div1">
      <img src={img} className="App-logo" alt="profile" id='profile__img'></img>
            <p id="twitter" title='ayo'>0x_founder</p>
            <p id="slack">nonfungibleayo</p>
        </div>
        <div className="div2">
        <img src={Icon} className="share_btn_desktop" alt='share button'></img>
          <img src={shareButton} className="share_btn" alt='share button'></img>
        </div>
      </header>
}

export default Header
