import React, { Component } from 'react';
import sites from './assets/js/sites';
import gradients from './assets/js/gradients';

class App extends Component {

  state = {
    siteName: '',
    siteURL: '',
    siteDescription: '',
  };

  componentWillMount() {
		return this.state;
	}

	componentWillUnmount() {
		return false;
  }

  render() {

    const onClickButton = (event) => {
      event.preventDefault();
      const number_of_sites = sites.length;
      const site = Math.floor( Math.random() * number_of_sites );
      const siteName = sites[site].name;
      this.setState({ siteName });
      const siteURL = sites[site].URL;
      this.setState({ siteURL });
      const siteDescription = sites[site].description;
      this.setState({ siteDescription });
    };

    const numColor = Math.floor( Math.random() * ( gradients.length ) );
    const color = gradients[numColor].colors;
    const backgroundGradient = {
      background: `linear-gradient( to right, ${color} )`,
    };

    return (
      <div className="body">
        <section id="header" className="content" style={backgroundGradient}>
          <div className="inner">
            <span className="icon"></span>
            <h1 className="title">The <strong>Random</strong> Internet</h1>
            <p className="description">You are just one click away from visiting the random gems of the internet.</p>
            <ul className="actions">
              <li>
                <button className="button" data-toggle="modal" data-target="#aboutModal">About</button>
              </li>
              <li>
                <button className="button" data-toggle="modal" data-target="#siteModal" onClick={onClickButton}>Discover</button>
              </li>
            </ul>
          </div>
        </section>
        <div className="modal fade" id="siteModal" tabIndex="-1" role="dialog" aria-labelledby="siteModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="siteeModalLabel">The website you are going to visit is...</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h2><strong id="modal-siteName">{ this.state.siteName || 'Name' }</strong></h2>
                  <p id="modal-siteDescription">{ this.state.siteDescription || 'Website description will be updated soon!' }</p>
                  <div id="modal-siteURL">
                    <a id="modal-goButton" target="_blank" href={ this.state.siteURL || '#' }>
                      <button id="modal-letsGo" className="button">Discover</button>
                    </a>
                  </div>
                </div>
                <div className="modal-footer">
                  <a href="/" onClick={onClickButton}>I want to visit something else...</a>
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
                    You can use this website anytime you want to. The main purpose of The Random Internet is to utilize the time whenever you are using the internet (or, on a break from your work, or whatever <span role="img" aria-labelledby="shy emoji">😅</span>) and don't know what to surf.
                    The sites here are cool, interesting (AFAIK), and most importantly, impeccible usage of your time.
                  </p>
                  <p>Don't believe me? You can look for yourself by clicking that, "Discover" button. Or, if you want, you can have your money back (only, if you paid). Talking of money <span role="img" aria-labelledby="money emoji">🤑</span>, you can donate me (or, buy me a coffee, <a href="https://www.paypal.me/RohitMotwani" rel="noopener noreferrer" target="_blank">here</a> <span role="img" aria-labelledby="shy emoji">😅</span>).</p>
                  <p>The idea of this website is inspired from <a href="http://www.theuselessweb.com/" target="_blank" rel="noopener noreferrer">The Useless Web</a>.</p>
                  <p>Background gradients from <a href="https://uigradients.com/" rel="noopener noreferrer" target="_blank">uiGradients</a>.</p>
                  <p>You can see the <a href="https://github.com/rohittm/the-random-internet" rel="noopener noreferrer" target="_blank">project source</a> and <a href="https://github.com/rohittm/the-random-internet/blob/master/CONTRIBUTORS.md" rel="noopener noreferrer" target="_blank">list of contributors</a>.</p>
                  <p>If you know a website that can be added to the list, <a href="https://github.com/rohittm/the-random-internet#adding-the-websites" rel="noopener noreferrer" target="_blank">here's</a> how you can add them.</p>
                  <p>Brought to you by <a href="https://rohitmotwani.com/" rel="noopener noreferrer" target="_blank">Rohit Motwani</a> (<a href="https://github.com/rohittm/" rel="noopener noreferrer" target="_blank">GitHub</a> | <a href="https://twitter.com/rohittm/" rel="noopener noreferrer" target="_blank">Twitter</a>)</p>
                  <p>Made using <a href="https://reactjs.org" rel="noopener noreferrer" target="_blank">React Js</a> and hosted on <a href="https://pages.github.com/" rel="noopener noreferrer" target="_blank">GitHub Pages</a>.</p>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
