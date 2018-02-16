import React from 'react';

export function FooterClass() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-icons">
        <a
          target="_blank"
          className="a-icons"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ariel-salem/"
        >
          <i className="fa fa-linkedin" aria-hidden="true" />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="a-icons"
          href="https://github.com/Asalem1"
        >
          <i className="fa fa-github" aria-hidden="true" />
        </a>
      </div>
      <br />
      <div className="footer-copyright">© Ariel Salem </div>
      <br />
      <br />
    </div>
  );
}

export default FooterClass;
