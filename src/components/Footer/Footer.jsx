import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.TextContainer}>
        <div className={styles.SpecialText}>
          <a href="/terms">Terms Of Use</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/faq">FAQ</a>
          <a href="/watchlist">Watch List</a>
        </div>
        <p>
          © 2023 WATCHIT. All Rights Reserved. All videos and shows on this
          platform are trademarks of, and all related images and content are the
          property of, Streamit Inc. Duplication and copy of this is strictly
          prohibited. All rights reserved.
        </p>
      </div>
      <div className={styles.IconsContainer}>
        <p>Follow us:</p>
        <ul className={styles.FooterIcons}>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps?hl=uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoogleIcon />
            </a>
          </li>
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.WatchitApp}>
        <p>Watchit App:</p>
        <div className={styles.DownloadIcons}>
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
