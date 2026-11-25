import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./CompanyJourney.scss";
import {companyJourney} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function CompanyJourney() {
  const {isDark} = useContext(StyleContext);
  if (!companyJourney.display) {
    return null;
  }

  return (
    <div
      className={isDark ? "journey-section journey-dark" : "journey-section"}
      id="journey"
    >
      <Fade bottom duration={1000} distance="20px">
        <h1 className="journey-heading">{companyJourney.title}</h1>
        <p className="journey-subtitle">{companyJourney.subtitle}</p>

        <ol className="journey-track">
          {companyJourney.companies.map(item => (
            <li
              key={item.company}
              className={
                item.current ? "journey-stop journey-current" : "journey-stop"
              }
            >
              <span className="journey-period">{item.period}</span>
              <span className="journey-dot" aria-hidden="true" />
              <div className="journey-card">
                <div className="journey-logo-tile">
                  <img src={item.logo} alt={`${item.company} logo`} />
                </div>
                <h3 className="journey-role">{item.role}</h3>
                <p className="journey-highlight">{item.highlight}</p>
                {item.current && (
                  <span className="journey-now-badge">Currently here</span>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Fade>
    </div>
  );
}
