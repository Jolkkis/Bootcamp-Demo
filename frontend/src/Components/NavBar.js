import React from "react";
import {Link} from "react-router-dom";

import "./NavBar.css";

export default function NavBar(props) {
    return (
        
                <nav className="navbar">
                    <ul className="navbar-nav">
                    <li className="logo">
                        <a href="#" className="nav-link">
                        <span className="link-text logo-text">Navigaatio</span>
                            <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fad"
                            data-icon="angle-double-right"
                            role="img"
                            viewBox="0 0 448 512"
                            class="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                        >
                            <g class="fa-group">
                            <path
                                fill="currentColor"
                                d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                                class="fa-secondary"
                            ></path>
                            <path
                                fill="currentColor"
                                d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                                class="fa-primary"
                            ></path>
                            </g>
                        </svg>
                        </a>
                    </li>


                    <li class="nav-item">
                        <a href="/" class="nav-link">
                        <svg 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="home" 
                        class="svg-inline--fa fa-home fa-w-18" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 576 512">

                        <path 
                        fill="currentColor" 
                        d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                            </path>
                            </svg>
                        <span class="link-text">Home</span>
                        </a>
                    </li>

                    <li class="nav-item">
                    <a href="/osto" class="nav-link">
                    <svg 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="car" 
                        class="svg-inline--fa fa-car fa-w-16" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512">
                        
                        <path 
                        fill="currentColor"
                        d="M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z"></path></svg>
                    <span class="link-text">Osto</span>
                        </a>
                    </li>

                    <li class="nav-item">
                    <a href="/myynti" class="nav-link">
                    <svg 
                    aria-hidden="true" 
                    focusable="false" 
                    data-prefix="fas" 
                    data-icon="dollar-sign" 
                    class="svg-inline--fa fa-dollar-sign fa-w-9" 
                    role="img" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 10 350 512">
                    <path 
                    fill="currentColor" 
                    d="M209.2 233.4l-108-31.6C88.7 198.2 80 186.5 80 173.5c0-16.3 13.2-29.5 29.5-29.5h66.3c12.2 0 24.2 3.7 34.2 10.5 6.1 4.1 14.3 3.1 19.5-2l34.8-34c7.1-6.9 6.1-18.4-1.8-24.5C238 74.8 207.4 64.1 176 64V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48h-2.5C45.8 64-5.4 118.7.5 183.6c4.2 46.1 39.4 83.6 83.8 96.6l102.5 30c12.5 3.7 21.2 15.3 21.2 28.3 0 16.3-13.2 29.5-29.5 29.5h-66.3C100 368 88 364.3 78 357.5c-6.1-4.1-14.3-3.1-19.5 2l-34.8 34c-7.1 6.9-6.1 18.4 1.8 24.5 24.5 19.2 55.1 29.9 86.5 30v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48.2c46.6-.9 90.3-28.6 105.7-72.7 21.5-61.6-14.6-124.8-72.5-141.7z">
                    </path>
                    </svg>
                    <span class="link-text">Myynti</span>
                    </a>
                     </li>

                     <li class="nav-item">
                    <a href="/fruits" class="nav-link">
                    <svg 
                        aria-hidden="true" 
                        focusable="false" 
                        data-prefix="fas" 
                        data-icon="user-check" 
                        class="svg-inline--fa fa-user-check fa-w-20" 
                        role="img" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 640 512">
                    <path 
                        fill="currentColor" 
                        d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z">
                    </path>
                    </svg>
                    <span class="link-text">Kirjaudu</span>
                    </a>
                     </li>
                    


                </ul>
            </nav>

    );
}

