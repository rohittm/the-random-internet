import React, { Component } from 'react';
import sites from './assets/js/sites';
import logo from './assets/img/logo.png'
import $ from 'jquery';

class App extends Component {

  
  componentWillMount() {
		return this.state;
	}

	componentWillUnmount() {
		return false;
  }

  render() {

    const onClickButton = () => {
      let number_of_sites = sites.length;
      let site = Math.floor(Math.random() * number_of_sites);
      this.siteName = sites[site].name;
      this.siteURL = sites[site].URL;
      this.siteDescription = sites[site].description;
      $('#modal-siteName').text(this.siteName);
      $('#modal-siteDescription').html(this.siteDescription);
      $("#modal-goButton").attr("href", this.siteURL);
    };

    return (
      <div className="body">
        <header className="header">
          <img src={logo} alt="The Random Internet logo" className="logo" />
        </header>
        <section className="content">
          <p className="intro">
            Entering here means entering the randomness present in the <del>Galaxy</del>... <del>Nopes, in the Universe</del>...
            Well random can never be defined. You are just one click away from visiting the undiscovered gems
            of the internet. Click the button below to drive away in the unknown (or, maybe some known to you 😅 ), but certainly interesting parts of the internet.
          </p>
          <div className="click-button">
              <button className="click-button-openmodal" data-toggle="modal" data-target="#siteModal" onClick={onClickButton}>
                Let's Start!
              </button>
          </div>
          <div className="modal fade" id="siteModal" tabIndex="-1" role="dialog" aria-labelledby="siteModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="siteeModalLabel">The Website you are going to visit is...</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h2><strong id="modal-siteName">Name</strong></h2>
                  {<p id="modal-siteDescription">Website description will be updated soon! 😊</p>}
                  <div id="modal-siteURL">
                    <a id="modal-goButton" target="_blank">
                      <button id="modal-letsGo"className="click-button-alt">Let's Go!</button>
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <a href="#next" onClick={onClickButton}>I might want to visit something else...</a>
                </div>
              </div>
            </div>
          </div>
          <div className="modal fade" id="aboutModal" tabIndex="-1" role="dialog" aria-labelledby="aboutModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="aboutModalLabel">About</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p>This website takes you to some of the most interesting websites on the internet.
                    You can use this website anytime you want to. The main purpose of The Random Internet is to utilize the time whenever you are using the internet (or, on a break from your work, or whatever 😅) and don't know what to surf.
                    The sites here are cool, interesting (AFAIK), and most importantly, impeccible usage of your time.
                  </p>
                  <p>Don't believe me? You can look for yourself by click the big, "Let's Start" button on the homepage. Or, if you want, you can have your money back (Only, if you paid). Talking of money 🤑, you can donate me (or, buy me a coffee, <del>here</del> [Donate page in progress] 😅).</p>
                  <p><span id="little-note"><strong>NOTE</strong>: The sites, and, the descriptions of the websites here are used from <a href="https://beebom.com/cool-interesting-websites/" target="_blank">this awesome list</a> (I'm planning to add more websites and update the descriptions soon, content writer needed 😓). The idea of this website is inspired from <a href="http://www.theuselessweb.com/" target="_blank">The Useless Web</a>.</span></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="footer">
            <div className="footer-left">
              <div className="footer-social">
                <a href="https://twitter.com/rohittm" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="https://github.com/rohittm" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github"></i>
                </a>
                <a href="#about" data-toggle="modal" data-target="#aboutModal">
                  <span className="footer-menu">About</span>
                </a>
              </div>
            </div>
            <div className="footer-right">
              <p>Brought to you by <a href="https://rohitmotwani.com">Rohit Motwani</a></p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
