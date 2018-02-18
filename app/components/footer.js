import React from 'react';
import * as styles from './Footer.scss'; // eslint-disable-line

const currentDate = new Date().getFullYear();

export function FooterClass() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a
          target="_blank"
          className="a-icons"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ariel-salem/"
        >
          <i className="fab fa-linkedin" aria-hidden="true" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="a-icons"
          href="https://github.com/Asalem1"
        >
          <i className="fab fa-github" aria-hidden="true" />
        </a>
      </div>
      <div className="footer-copyright">© Ariel Salem {currentDate}</div>
    </div>
  );
}

export default FooterClass;
