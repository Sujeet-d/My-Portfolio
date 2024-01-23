import './Form.css'

import React from 'react'

const Form = () => {
    return (
        <div className="form">
           <section className="content1">
            <div className="contact1-form">
                <h1>contact <span>Us</span> </h1>
                <p>I am avilable for freelance work. Connect with me via phone: 7603847076 or E-mail: sujeetds90@gmail.com</p>
                <form action="">
                    <input type="text" placeholder='Your Name' required/>
                    <input type="email" name='email' placeholder='E-mail' required/>
                    <input type="text" placeholder='Write a subject' required />
                    <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' />
                    <input type="submit" value="Submit" className='conbtn' />
                </form>
            </div>

                {/* <div className="contact1-img">
                    <img src="../../image/contactimg.jpg" alt="" width='100%'/>
                </div> */}

           </section>
        </div>
    )
}

export default Form