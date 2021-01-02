import React from "react";
import "../index.css";

function Footer(props) {
  return (
    <footer className='footer'>
      {/* div for social media */}
      <div className='copyright-social-media'>
        <span>
          <a
            href='https://github.com/chrisjmckeown/React_Portfolio/blob/master/LICENSE'
            target='_blank'
            rel='noreferrer'
          >
            &#169; 2020
          </a>{" "}
          - Chris Mckeown -{" "}
        </span>
        <a
          href='https://www.linkedin.com/in/chrisjmckeown/'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-linkedin'></i>
        </a>
        <a
          href='https://twitter.com/ChrisMckeown6'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-twitter-square'></i>
        </a>
        <a
          href='https://www.facebook.com/christopher.j.mckeown.3'
          target='_blank'
          rel='noreferrer'
        >
          <i className='fab fa-facebook-square'></i>
        </a>
        <a
          href='https://github.com/chrisjmckeown'
          target='_blank'
          rel='noreferrer'
        >
          {" "}
          <i className='fab fa-github-square'></i>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
