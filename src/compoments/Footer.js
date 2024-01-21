import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Footer.css';
import blacklogo from '../assets/blacklogo.png';
import Facebooklogo from '../assets/Facebooklogo.jpg';
import twitterlogo from '../assets/twitterlogo.jpg';
import Tiktoklogo from '../assets/Tiktoklogo.jpg';
import Instagramlogo from '../assets/Instagramlogo.jpg';
import Youtubelogo from '../assets/Youtubelogo.jpg';
import Snapchatlogo from '../assets/Snapchatlogo.jpg';
import Vklogo from '../assets/Vklogo.jpg';

<script src="http://localhost:3000"></script>
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <img src={blacklogo} alt="logo" width="200" height="200" className="float-left mb-4" />
          </div>
          <div className="col-md-3">
            <h4>Olympic's Game &copy; {new Date().getFullYear()}</h4>
            <hr className="hr-custom" />
            <p>Paris 2024</p>
            <p>Results & Medals</p>
            <p>Replays & Highlights</p>
            <p>All Olympic Games</p>
          </div>
          <div className="col-md-3">
            <h4>Olympic Channel</h4>
            <hr className="hr-custom" />
            <p>TV Channel</p>
            <p>Live Events</p>
            <p>Original Series</p>
            <p>Corporate</p>
          </div>
          <div className="col-md-3">
            <h4>News</h4>
            <hr className="hr-custom" />
            <p>Podcast</p>
            <p>Topics</p>
            <p>Athletes</p>
            <p>Sports</p>
          </div>
        </div>
      </div>
      <hr className="hr-customs" />
      <div className="menu-bar">
        <ul>
          <li>International Olympic Committee</li>
          <li>Museum</li>
          <li>Shop</li>
          <li>About Us</li>
          <li>Contact Centre</li>
          <li>Sitemap</li>
          <li>Careers</li>
        </ul>
      </div>
      <hr></hr>
      <div className='ft-two'>
      {/* <div className="footer-links">
          <a href="link_to_cookie_policy">Cookie Policy</a>
          <a href="link_to_cookie_settings">Cookie Settings</a>
          <a href="link_to_privacy_policy">Privacy Policy</a>
          <a href="link_to_terms_of_service">Terms of Service</a>
      </div> */}
      <iframe className='excutemaps'
                  title="Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3724.1127483277796!2d105.770377!3d21.0281742!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab00954decbf%3A0xdb4ee23b49ad50c8!2zRlBUIEFwdGVjaCBIw6AgTuG7mWkgLSBI4buHIHRo4buRbmcgxJHDoG8gdOG6oW8gbOG6rXAgdHLDrG5oIHZpw6puIHF14buRYyB04bq_!5e0!3m2!1svi!2s!4v1704475879765!5m2!1svi!2s"
                  width="1200"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"    
                  referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="social-media-logos">
        <a href="link_to_facebook_page">
         <img src={Facebooklogo} alt="Facebook" className="social-logo" />
        </a>
        <a href="link_to_twitter_page">
         <img src={twitterlogo} alt="Twitter" className="social-logo" />
        </a>
        <a href="link_to_tiktok_page">
         <img src={Tiktoklogo} alt="Tiktok" className="social-logo" />
        </a>
        <a href="link_to_instagram_page">
         <img src={Instagramlogo} alt="Instagaram" className="social-logo" />
        </a>
        <a href="link_to_youtube_page">
         <img src={Youtubelogo} alt="Facebook" className="social-logo" />
        </a>
        <a href="link_to_snapchat_page">
         <img src={Snapchatlogo} alt="Snapchat" className="social-logo" />
        </a>
        <a href="link_to_vk_page">
         <img src={Vklogo} alt="Vk" className="social-logo" />
        </a>
       </div>
      </div>
      <div className="faq-section">
        <h4>Frequently Asked Questions (FAQ)</h4>
        <ul>
        <li>
      <strong>Q1:</strong> What is the Olympic Games?
    </li>
    <li>
      <strong>Q2:</strong> How can I buy tickets?
    </li>
    <li>
      <strong>Q3:</strong> Where can I watch live events?
    </li>
    <li>
      <strong>Q4:</strong> How long until the next Olympics?
    </li>
    </ul>
      </div>
    </footer>
  );
}

export default Footer;