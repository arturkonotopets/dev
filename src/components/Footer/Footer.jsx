import React from 'react';
import './Footer.css';


const Footer = () => {
    

    return (
        <footer className="site-footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-2 col-md-1 footer-logo">
                
                <img alt="Washmix Footer Logo" src='../../assets/footer-logo.svg' width="48" height="48" />
                
              </div>
              <div className="col-xs-12 col-sm-10 col-md-11 footer-widgets">
                <div className="row footer-sections">
                  <div className="col-xs-12 col-sm-12 col-md-4 links col-1-">
                    <ul className="list-unstyled">
                      <li>
                       WASHMIX
                      </li>
                      <li>
                        About us
                      </li>
                      <li>
                        Pricing
                      </li>
                      <li>
                        Terms
                      </li>
                      <li>
                        Privacy
                      </li>
                    </ul>
                  </div>
  
                  <div className="col-xs-12 col-sm-12 col-md-4 col-2-">
                    <ul className="list-unstyled contact-info">
                      <li>CONTACT INFORMATION</li>
                      <li>
                        <a href='/'>phoneLiteral</a>
                      </li>
                      <li>
                        <a href='/'>emailInfo</a>
                      </li>
                      <li>
                        <a href='/' target="_blank" rel="noopener noreferrer">
                          address
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-4 col-3-">
                    <ul className="list-unstyled">
                      <li>FOLLOW US</li>
                      <li>
                        <a href="https://www.facebook.com/GetWashmix/" target="_blank" rel="noopener noreferrer">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="https://twitter.com/WashmixInfo/" target="_blank" rel="noopener noreferrer">
                           Twitter
                        </a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/washmix/" target="_blank" rel="noopener noreferrer">
                          Instagram
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-badges">
              <img src='../../assets/SSL.png' alt="Powered by Stripe" width="200px" />
  
              <div id="yelp-biz-badge-rrc-rBoyJKLU665qJ7zE1dJvwQ">
                <a
                  href="https://www.yelp.com/biz/washmix-mountain-view?utm_medium=badge_star_rating_reviews&utm_source=biz_review_badge%22"
                  target="_blank"
                  rel="noreferrer"
                >
                  Check out WashMix on Yelp
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center">
          <p>© 2022 WashMix, Inc. All Rights Reserved.</p>
        </div>
      </footer>
  );
};

export default Footer;