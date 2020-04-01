import React from 'react';

import "./Css/Contact.css";

export default function Contact(props) {
  
  return (
        <body>
        
        <h2>Ota yhteyttä:</h2>
        
          <form className = "Contact" action = "mailto:tomi.j.jolkkonen@gmail.com" method = "post" enctype = "text/plain">
            Name:<br/>
            <input type = "text" name = "name"/><br/>
            E-mail:<br/>
            <input type = "text" name = "mail"/><br/>
            Comment:<br/>
            <input type = "text" name = "comment" size = "50"/><br/><br/>
            <input type = "submit" value = "Send"/>
            <input type = "reset" value = "Reset"/>
          </form>
        
        </body>
      );
      
}