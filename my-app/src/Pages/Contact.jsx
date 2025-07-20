import React from 'react';
import '../css/contact.css';

function Contact(){
    const onSubmit = async (event) =>{
        event.preventDefault();
        const formData = new formData(event.target);

        formData.append("AccessKey", "Your Access Key herenpm ")
    }

    return(
        <section className="Contact">
            <form>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" className='field' placeholder='Enter your name' required></input>
                </div>
                <div className='input-box'>
                    <label>Email Address</label>
                    <input type="email" className='field' placeholder='Enter your email' required></input>
                </div>
                 <div className='input-box mess'>
                    <label>Your Message</label>
                    <textarea className="field mess" id="" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Send Message</button>

            </form>
        </section>
    )

}

export default Contact;

















// import React, {useRef} from 'react';
// import emailjs from '@emailjs/browser';

// export const Contact = () =>{

//     const form = useRef();

//     const sendEmail = (e) => {
//         e.preventDefault();
//     }

//     emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form.current, 'PUBLIC_KEY')
//         .then((result) => {
//             console.log(result.text);
//         }, (error) => {
//             console.log(error.text);
//         });

//     return(
//         <form ref={form} onSubmit={sendEmail}>
//             <label>Name</label>
//             <input type="text" name="user_name"/>
//             <label>Email</label>
//             <input type="email" name="user_email"/>
//             <label>Message</label>
//             <textarea name="message"/>
//             <input type="submit" value="Send"/>

//         </form>
//     )

// }

// export default Contact;