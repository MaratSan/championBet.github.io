import React from 'react';
import '../styles/FooterComponent.css';

const FooterComponent: React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__info">
                <p>
                    Your bets and payouts are processed by Synerlink Group - SMC Limited, which is licensed by the
                    National Lotteries and Gaming Regulatory Board of Uganda. Licence: NLGRB-BM-06-693 and NLGRB-BMTOL-74-886.
                    You have to be 25 years old or above to bet. Betting is addictive and can be psychologically harmful.
                </p>
            </div>

            <div className="footer__social">
                <a href="#"><img src="/path/to/facebook-icon.png" alt="Facebook" /></a>
                <a href="#"><img src="/path/to/instagram-icon.png" alt="Instagram" /></a>
                <a href="#"><img src="/path/to/twitter-icon.png" alt="Twitter" /></a>
                <a href="#"><img src="/path/to/youtube-icon.png" alt="YouTube" /></a>
            </div>

            <div className="footer__links">
                <a href="#">Help/Contact</a>
                <a href="#">Terms & Conditions</a>
            </div>

            <div className="footer__legal">
                <span>25+ No minors allowed</span>
                <a href="#">Responsible gaming: GameCare</a>
                <a href="#">For self-exclusion contact us: HELP</a>
            </div>

            <div className="footer__copyright">
                <p>Copyright © 2024 SYNERLINK GROUP - SMC LIMITED</p>
                <div className="footer__logo">
                    <img src="src/assets/footer-logo.svg" alt="KIWIBET" />
                </div>
            </div>
        </footer>
    );
};

export default FooterComponent;
