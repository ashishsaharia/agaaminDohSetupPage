
import './App.css'

import { Fragment, useEffect } from "react";

import logo from "./assets/agaaminImages/logo.png";
import dohSetup from "./assets/agaaminImages/dohSetup.png";


export default function DohSetup() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            if (cursor) {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            }
        };

        const handleMouseEnter = () => {
            if (cursor) {
                cursor.classList.add('large');
            }
        };

        const handleMouseLeave = () => {
            if (cursor) {
                cursor.classList.remove('large');
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        const textElements = document.querySelectorAll('body *:not(.cursor)');
        textElements.forEach(element => {
            element.addEventListener('mouseenter', handleMouseEnter);
            element.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            textElements.forEach(element => {
                element.removeEventListener('mouseenter', handleMouseEnter);
                element.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <Fragment>
            <div className="doh">
                <div className="cursor"></div>
                <a to="/agaaminFrontend">
                <div className="dohSetuplogo">
                    <img className="dohLogo" src={logo} alt="company logo" />
                </div>
                </a>
                <div className="dohSetup">
                    <h1 className="mainHeading text-hover">
                    Handshake Gateway
                    </h1>
                    <h3 className="text-hover">
                    Welcome to the Handshake Gateway, a secure and easy way to resolve HNS Domains.
                    </h3>
                    <p className="text-hover">
                    A one stop gateway (DOH server) for seamless resolution of Handshake (HNS) smart domains. Our state-of-the-art gateway ensures secure, private, and efficient domain name resolution, leveraging the decentralized nature of the Handshake ecosystem. Whether you're a developer, a tech enthusiast, or a business looking to harness the power of decentralized internet, the Handshake gateway provides a robust solution for accessing HNS smart domains with ease and confidence. Explore a new era of internet freedom and security.
                    </p>
                    <h1 className="text-hover">DOH</h1>
                    <p className="text-hover">
                    A DNS over HTTPS (DOH) server is a specialized server that enables the resolution of domain names to IP addresses via the HTTPS protocol. By using encryption and transmitting DNS queries over secure HTTPS connections, DOH servers enhance privacy, security, and integrity in the domain resolution process.
                    </p>
                    <div className="dohSettingSteps">
                        <h2 className="text-hover">Just update your browser settings and access the world of Web3 natively on your browser:</h2>
                        <ol>
                            <li>Click the three dots on top right of your Chrome/Brave browser.</li>
                            <li>Click on Settings. </li>
                            <li>Click on Privacy and Security.</li>
                            <li>Click on Security.</li>
                            <li>Scroll down to 'Secure DNS'. </li>
                            <li>Click on ‘Select DNS Provider’.</li>
                            <li>Choose the ‘Custom DNS Provider’.</li>
                            <li>Add the domain name - <a className="dohSetupAnchor" target="_blank" href="https://hnslogin.world">https://hnslogin.world</a></li>
                            <li>9.	That's it! </li>
                        </ol>
                        <p>You are all set to access Web3 on your browser.
                      </p>
                    </div>
                    <div className="dohSetupImage">
                        <img src={dohSetup} alt="steps" />
                    </div>
                    <a to='/agaaminFrontend/'>
                        <div className="dohHomeButton">
                            <button className="dohHomeButtonButton">Home Page</button>
                        </div>
                    </a>
                </div>
            </div>
        </Fragment>
    );
}

