import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="all">
        <h1 id="name">Sarmilan Somasundaram</h1>
          <div className="icons">
            <i className="icon-html5-alt" id="first-icon"></i>
            <i className="icon-css3"></i>
            <i className="icon-javascript-alt"></i>
            <i className="icon-nodejs"></i>
            <i className="icon-sass"></i>
            <i className="icon-jquery"></i>
            <i className="icon-bootstrap"></i>
            <i className="icon-reactjs"></i>
            <i className="icon-angular"></i>
            <i className="icon-mongodb"></i>
            <i className="icon-postgres"></i>
          </div>
        <div className="contain">
          <div className="contain-up">
            <nav className="nav">
              <div className="menu">
                portfolio | about | resume
              </div>
            </nav>
          </div>
          <div className="contain-mid">
            <div className="main">
              <h2 id="hello">I went to a coding bootcamp.</h2>
              <p>
                It's been about ten days since I finished a full stack bootcamp at BrainStation. It was fast,
                dense and pretty expensive. Sort of like Vin Diesel in Fast and Furious. Sorry Vin, joke at your
                expense.
              </p>
              <p>
                <b>The before. </b>Up until taking the course, I prided myself as a self-taught programmer who 
                could build and design web sites. The truth was: I had learned HTML as a child because it was cool
                to make Dragonball Z websites and brag about it in AIM chat groups (Hey. A/S/L?). I learned Photoshop
                through trial and error and CSS because people told me I should. Equipped with just these three tools
                I built websites for friends and family and businesses and local politicians.
              </p>
              <p>
                <b>The before pt2. </b>I started learning JavaScript on my own. I took online courses from CodeSchool 
                and 
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tristique sem sit amet augue vehicula, lacinia scelerisque dui pulvinar. Maecenas tempor, mi ut rhoncus consectetur, dolor mi aliquet lacus, vel accumsan felis nulla congue purus. Integer cursus augue at diam porttitor, ut egestas lectus laoreet. Donec aliquam, risus quis posuere ornare, est mi laoreet arcu, at rhoncus magna odio quis nisi. Duis pharetra nisi in ultrices faucibus. Quisque pulvinar facilisis ante ut dictum. Suspendisse eu risus sit amet ligula consectetur mollis vel convallis nulla. Aenean dictum nunc in massa ullamcorper commodo. Nunc finibus ligula sit amet finibus faucibus.
              </p>
              <p>
                Praesent viverra ultrices urna eu rutrum. Etiam id massa in tellus malesuada rutrum. Aenean diam metus, condimentum vitae est a, convallis tempus dui. Vestibulum auctor, eros id auctor semper, eros sapien sagittis risus, ut gravida dui ante ut ex. Donec id risus sit amet diam finibus molestie sed sed velit. Donec at erat eu arcu condimentum facilisis id eu nulla. Sed ac lectus eget justo egestas tempor nec quis neque. Ut mattis cursus neque, non gravida nisl pulvinar sed. Etiam ac mauris pulvinar dui dapibus maximus vel scelerisque nisl. Vestibulum aliquet faucibus est et auctor. Maecenas ullamcorper eros eleifend augue ultricies, sed tristique nulla pretium. Phasellus sem erat, consectetur id tellus ac, convallis egestas sapien.
              </p>
            </div>
           
          </div>
        </div>
      </div>
    );
  }
}

export default App;
