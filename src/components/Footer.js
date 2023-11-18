import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "./Footer.css"
function Footer() {

    const mailtoLink = `mailto:${'sunilkumar.shah1115@gmail.com'}?subject=${encodeURIComponent('')}`;

    return (
        <div className="footer">
            <div className="info">
                <h2>Smart Event Decor</h2>
                <div className="address">
                    <h3>Contact Us</h3>
                    <p>Address: Krishnagar Saijpur Ahmedabad, Gujrat</p>
                    <p id='email'>
                        Email Id:-  
                         <a href={mailtoLink}>{'sunilkumar.shah1115@gmail.com'}</a>
                    </p>
                    <p>WhatsApp Only: 9624655631</p>
                </div>
            </div>
            <div class="social-media-links">
                <h4>Social Media Links</h4>
                <a href="https://www.facebook.com/profile.php?id=100002573098320&mibextid=ZbWKwL" target="_blank">Facebook</a>
                <a href="https://www.instagram.com/smart_event_group/" target="_blank">Instagram</a>
            </div>

        </div>
    )
}

export default Footer;