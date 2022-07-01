import React from 'react';
import './BadgeContainer.css';

const BadgeContainerNew = () => {
    

    return (
        <footer>
        <section className="badge-section">
          <div className="badge-container-new badge-container">
            <div className="badge-main">
              <img className="badgeimageMain" src='./icons/Voted1.png' alt="Voted1" />
              <p className="tagline">Voted #1</p>
              <p className="subtag">Popular for a Reason</p>
            </div>
            <div className="badge-main">
              <img className="badgeimageMain" style={{ marginLeft:'15px' }} src='./icons/FastDelivery.png' alt="FastDelivery" />
              <p className="tagline">Fast Delivery</p>
              <p className="subtag">
                Fast turn around time
                <br />
                Rush Service Available
              </p>
            </div>{' '}
            <div className="badge-main">
              <img className="badgeimageMain" src='./icons/ReliableService.png' alt="ReliableService" />
              <p className="tagline">Reliable Service</p>
              <p className="subtag">Over 25 Years of Experience</p>
            </div>{' '}
            <div className="badge-main">
              <img className="badgeimageMain" src='./icons/WashmixProcessingPlant.png' alt="WashmixProcessingPlant" />
              <p className="tagline">Washmix Processing Plant</p>
              <p className="subtag">Washmix operates its own plant, we don&apos;t oursource our work</p>
            </div>
            <div className="badge-main">
              <img className="badgeimageMain" style={{ marginLeft: '15px' }} src='./icons/UnmatchedPricesandServices.png' alt="UnmatchedPricesandServices" />
              <p className="tagline">Unmatched Prices and Services</p>
            </div>
            <div className="badge-main">
              <img className="badgeimageMain" src='./icons/EnvironmentallyMinded.png' alt="EnvironmentallyMinded" />
              <p className="tagline">Environmentally Minded</p>
            </div>
          </div>
        </section>
      </footer>
  );
};

export default BadgeContainerNew;