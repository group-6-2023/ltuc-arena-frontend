import './Footer.css'


function Footer() {
    return (
        <div className='footer'>

            <h6>© 2023 All Rights Reserved.</h6>

            <div className="wrapper">
                <div className="social-icons">

                    <a className="social-icon whatsapp" href="https://github.com/Esmail-Jawabreh" target="_blank" rel="author">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>

                    <a className="social-icon mail" href="mailto:esmailjawabreh@gmail.com" target="_blank" rel="author">
                        <i className="fa-sharp fa-solid fa-envelope"></i>
                    </a>

                    <a className="social-icon instagram" href="https://www.instagram.com/esmail.sudgi/" target="_blank"
                        rel="author">
                        <i className="fab fa-instagram"></i>
                    </a>

                </div>
            </div>

        </div>
    )
}


export default Footer;