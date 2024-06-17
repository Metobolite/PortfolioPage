const Contact = () => {
    return (
        <div id="contact" className="contactAll">
            <div className="contact">
                <h3>Contact 👌</h3>
                <br />
                <h2>You Can Contact Me From Here</h2>
            </div>
            <div className="contactInfo">
                <div className="mailAll">
                    <span>
                        <a href="https://outlook.live.com/" alt="mail icon" id="mail" rel="noreferrer">mail</a>
                    </span>
                    <div className="mail">
                       <h3>Mail</h3>
                       <p>nebiyev02@hotmail.com</p>
                    </div>
                </div>
                <div className="numberAll">
                    <span>
                        <a href="https://web.whatsapp.com/" alt="whatsapp icon" id="whatsapp" rel="noreferrer">wp</a>
                    </span>
                    <div className="number">
                        <h3>Business Whatsapp</h3>
                        <p>+905528448322</p>
                    </div>
                </div>
            </div>
        </div>    
     );
}
 
export default Contact;