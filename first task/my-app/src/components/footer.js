import React, { Component } from 'react' 
import I4g from '../I4G.png'
import zuri from '../Zuri.png'

class footer extends Component {
    render() { 
        return <footer className='footer-div'>
            <div className='footer-div1'>
                <img src={zuri} alt='zuri_intership_logo'></img>                
            </div>
            <div className='footer-div2'>
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div className='footer-div3'>
                <img src={I4g} alt='i4g_logo'></img>
            </div>
        </footer>
    }
}

export default footer;