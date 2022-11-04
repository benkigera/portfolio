import React from 'react'
import {
    AiFillGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function SocialLinks() {
    return (
        <>
            <ul className="footer-icons"  >
                <li className="nav-item">
                    <a
                        href="https://github.com/benkigera"
                        style={{ color: "white" }}


                    >
                        <AiFillGithub />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://twitter.com/benkigera"
                        style={{ color: "white" }}
                    >
                        <AiOutlineTwitter />
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="https://www.linkedin.com/in/benkigera/"
                        style={{ color: "white" }}
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
            </ul>

        </ >

    );
}

export default SocialLinks