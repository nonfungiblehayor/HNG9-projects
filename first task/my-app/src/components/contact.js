import React, { Component } from "react";
import Footer from './footer';
import './contact.css';
import '../App.css'

class Contact extends Component {
    render() {
        return <div className='contact-div'>
            <div className='contact-head'>
                <h3>Contact me</h3>
                <p>Hi there, contact me to ask me about anything you have in mind.</p>
            </div>
            <form>
                <div className="name-div">
                    <div className='fname'>
                    <label>First Name</label>  <input type='text' placeholder='Enter your first name' id='first_name' />
                    </div>
                    <div className='lname'>
                       
                    <label>Last Name</label>  <input type='text' placeholder='Enter your last name' id='last_name' />
                    </div>
                </div>
                    <div className='email-div'>
                       
                    <label>Email</label> <input type='email' placeholder='yourname@email.com' id='email' />
                    </div>
                    <div className="message-div">
                        
                    <label>Message</label> 
                    <textarea id='message' placeholder='Send me a message i will reply as soon as possible...'></textarea>
                    </div>
                    <div className='btn-divs'>
                        <div className='radio-div'>
                        <input type='checkbox' /> <label>You agree to submit your data to nonfungibleayo who may contact you.</label>
                        </div>
                        <button type="submit" id='btn_submit'>Send message</button>
                    </div>
            </form>
            <Footer />
        </div>
    }
}

export default Contact