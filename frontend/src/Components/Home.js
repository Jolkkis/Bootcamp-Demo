import React from 'react';

import "./Css/Home.css";

export default function Home(props) {
    return (
      
      <body>

      <div class="main"></div>
      
          <hr/>
        
            <main>
            <div className="About me">
            <h3>Minusta</h3>
            <p className = "HomeP">Nimeni on Tomi Jolkkonen ja olen harrastellut tietokoneiden kanssa nyt kahdeksan vuotta.</p>
            <p className = "HomeP">Lorem ipsum dolor sit amet, tempor prodesset eos no. Temporibus necessitatibus sea ei, at tantas oporteat nam. Lorem ipsum dolor sit amet, tempor prodesset eos no.</p>
          </div>
           <hr/>
          <h3>Mitä haluaisin työpaikaltani</h3>
            <div className="row">
                <div className="column">
                  <div className="content">
                    <h3>Töitäni</h3>
                    <img className="kuva1" />
                    <p className = "HomeP">Tässä on minun tekemiä asioita.</p>
                  </div>
                </div>
              
                <div className="column">
                  <div className="content">
                  <h3>Töitäni</h3>
                    <img className="kuva2" />
                    <p className = "HomeP">Tässä on minun tekemiä asioita.</p>
                  </div>
                </div>
                
                <div className="column">
                  <div className="content">
                  <h3>Töitäni</h3>
                    <img className="kuva3"/>
                    
                    <p className = "HomeP">Tässä on minun tekemiä asioita.</p>
                  </div>
                </div>

                <div className="column">
                  <div className="content">
                    <h3>Töitäni</h3>
                    <img className="kuva1"/>
                    <p className = "HomeP">Tässä on minun tekemiä asioita.</p>
                  </div>
                </div>
                </div>
          </main>
        
      </body>
      
      );
}