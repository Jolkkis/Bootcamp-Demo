import React from "react";

import "./Css/NavBar.css";

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
                        <span class="link-text">Koti</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/works" class="nav-link">
                        <svg 
                            aria-hidden="true" 
                            focusable="false" 
                            data-prefix="fas" 
                            data-icon="suitcase" 
                            class="svg-inline--fa fa-suitcase fa-w-16" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 512 512">
                            <path 
                            fill="currentColor" 
                            d="M128 480h256V80c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48v400zm64-384h128v32H192V96zm320 80v256c0 26.5-21.5 48-48 48h-48V128h48c26.5 0 48 21.5 48 48zM96 480H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48h48v352z">
                            </path>
                        </svg>
                        <span class="link-text">Töitäni</span>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a href="/contact" class="nav-link">
                        <svg 
                            aria-hidden="true" 
                            focusable="false" 
                            data-prefix="fas" 
                            data-icon="address-card" 
                            class="svg-inline--fa fa-address-card fa-w-18" 
                            role="img" 
                            xmlns="http://www.w3.org/2000/svg" 
                            viewBox="0 0 576 512">
                            <path 
                            fill="currentColor" 
                            d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2zM512 312c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16zm0-64c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h144c4.4 0 8 3.6 8 8v16z">
                            </path>
                        </svg>
                        <span class="link-text">Ota yhteyttä</span>
                        </a>
                    </li>

                </ul>
            </nav>

    );

    
}

