import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Form() {
    
    const formRef = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const SERVICE_ID = "service_xo6r34k";
    const TEMPLATE_ID = "template_cy4cphl";
    const PUBLIC_API_KEY = "Xlh11EC7pVP72RfuC";

    const sendEmail = (event) => {
        event.preventDefault();
        setIsSending(true);

        emailjs
           .sendForm(
              SERVICE_ID,
              TEMPLATE_ID,
              formRef.current,
              PUBLIC_API_KEY
           )
           .then(
              () => {
                setStatusMessage("Message sent Successfully!");
                setIsSending(false);
                formRef.current.reset();

              },
              (error) => {
                console.error("Failed to send message: ", error);
                setStatusMessage("Failed to send message. Please try again.");
                setIsSending(false);
              }
           );
    };
    return(
        <div className="contact-form">
            <form ref={formRef} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" required/>

                <label>Email</label>
                <input type="email" name="email" required/>

                <label>Message</label>
                <textarea name="message" rows="5" required/>

                <button type="submit" disabled={isSending}>
                    {isSending ? "Sending..." : "Send Message"}
                </button>

                {statusMessage && <p>{statusMessage}</p>}
            </form>
        </div>
    );
}

function Contact() {

    return(
        <section id="contact">
            <div className="contact-body">
                <h2>Want to reach out?</h2>
                <p>Feel free to shoot me a message below!</p>
                <Form/>
            </div>    
        </section>    
    );
}

export default Contact