import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/terms"> Terms Of Use </a>
          <a href="/privacy"> Privacy Policy </a>
          <a href="/faq"> FAQ </a>
          <a href="/watchlist"> Watch List </a>
        </div>
        <div className="footer-text">
          <p>
            © 2023 WATCHIT. All Rights Reserved. All videos and shows on this
            platform are trademarks of, and all related images and content are
            the property of, Streamit Inc. Duplication and copy of this is
            strictly prohibited. All rights reserved.
          </p>
        </div>
        <div className="footer-social">
          <span>Follow Us:</span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i> {/* Facebook icon */}
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i> {/* Twitter icon */}
          </a>
          <a
            href="https://play.google.com/store/apps?hl=uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i> {/* Google icon */}
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i> {/* GitHub icon */}
          </a>
        </div>
        <div className="footer-app">
          <span> Watchit App:</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.example.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="path/to/google-play.png" alt="Google Play" />
          </a>
          <a
            href="https://apps.apple.com/us/app/example/id1234567890"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="path/to/app-store.png" alt="App Store" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
