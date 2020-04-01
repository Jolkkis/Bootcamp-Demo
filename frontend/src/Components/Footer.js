import React from "react";

import "./Css/Footer.css";

export default function Footer(props) {
    return(
    <html>
        <head>
	<meta charset="utf-8"/>
	<meta http-equiv="X-UA-Compatible" content="IE=edge"/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	<meta name="keywords" content="footer, address, phone, icons" />

	<link rel="stylesheet" href="style.css"/>
	
	<link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"/>

	<link href="http://fonts.googleapis.com/css?family=Cookie" rel="stylesheet" type="text/css"/>

    </head>
	<body>
		<footer class="footer-distributed">

			<div class="footer-left"/>

			<div class="footer-center">
                <div>
                <i class="fa fa-user"></i>
					  <p><span>Tomi Jolkkonen</span>
						</p>
				</div>
                
                <div>
					<i class="fa fa-map-marker"></i>
					  <p><span>Joensuu, Finland</span>
						</p>
				</div>

				<div>
					<i class="fa fa-phone"></i>
					<p>+358445013417</p>
				</div>
				<div>
					<i class="fa fa-envelope"></i>
					<p><a href="mailto:tomi.j.jolkkonen@gmail.com">tomi.j.jolkkonen@gmail.com</a></p>
				</div>
			</div>

			<div class="footer-right">
				<div class="footer-icons">
					<a href="https://fi-fi.facebook.com/"><i class="fa fa-facebook"></i></a>
					<a href="https://twitter.com/home"><i class="fa fa-twitter"></i></a>
					<a href="https://www.instagram.com/"><i class="fa fa-instagram"></i></a>
					<a href="https://www.linkedin.com/"><i class="fa fa-linkedin"></i></a>
					<a href="https://www.youtube.com/"><i class="fa fa-youtube"></i></a>
				</div>
			</div>
		</footer>
        </body>
    </html>
    )}