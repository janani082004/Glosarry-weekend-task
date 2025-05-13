import React from 'react';
import './Manage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container } from 'react-bootstrap';

function Manage() {
  return (
    <section className="manage-section">
      <Container>
        <div className="manage-container">
          {/* Left Section */}
          <div className="manage-left">
            <h1>
              Start managing your
              <br />
              websites
            </h1>
            <p className="manage-description">
              The first comprehensive tool developed for Website Managers.
              <br />
              Everything you need in one place for your team.
            </p>
            <button type="button" className="custom-button">
              <i className="fas fa-arrow-right"></i> <span className="get-started-text">Get Started</span>
            </button>

          </div>

          {/* Right Section */}
          <div className="manage-right">
            {[
              'Standard: $69 (Life Time Deal)',
              'Agency: $125 (Life Time Deal)',
              'Pro: $350 (Life Time Deal)',
            ].map((plan, index) => (
              <div key={index} className="manage-item">
                <div className="manage-icon-circle">
                  <i className="fas fa-check"></i>
                </div>
                <p className="manage-item-text">{plan}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Manage;
