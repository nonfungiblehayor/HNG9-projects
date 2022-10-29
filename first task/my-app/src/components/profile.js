import React, { Component } from 'react'
import slack from '../slack.png'
import github from '../github.png'

class Profile extends Component {
    render() {
        return  <div className='links'>
      <a href='' target="_blank" id="btn__zuri">Twitter link</a>
      <a href='https://training.zuri.team/' target="_blank" id="btn__zuri">Zuri Team</a>
      <a href='http://books.zuri.team/' title='Find the best books on design & coding' target="_blank" id="btn__zuri">Zuri Books</a>
      <a href='https://books.zuri.team/python-for-beginners?ref_id=<nonfungibleayo.eth>' target="_blank" id="book__python">Python Books</a>
      <a href='https://background.zuri.team' target="_blank" id="pitch">Background check for coders</a>
      <a href='https://books.zuri.team/design-rules' target="_blank" id="bok_design">Design Books</a>
      <div className="div3">
        <img src={slack} className="slack-logo" alt="slack" id='slack__img'></img>
        <img src={github} className="github-logo" alt="Github" id='github__img'></img>        
      </div>
      </div>
    }
}

export default Profile