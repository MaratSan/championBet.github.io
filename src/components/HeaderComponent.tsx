import React from 'react';
import '../styles/HeaderComponent.css';

const HeaderComponent: React.FC = () => {
    return (
        <>
            {/* Верхний хедер */}
            <header className="header-top">
                <div className="header-top__left">
                    <span className="header-top__time">14:28:33</span>
                </div>
                <div className="header-top__right">
                    <a href="/" className="header-link">Terms and Conditions</a>
                    <a href="/" className="header-link">Help/Contact</a>
                    <a href="/" className="header-link">Forgotten password?</a>
                    <button className="header-top__register-btn">REGISTRATION</button>
                </div>
            </header>

            {/* Средний хедер */}
            <header className="header-middle">
                <div className="header-middle__left">
                    <span className="header-logo">
                        <img src="src/assets/footer-logo.svg" alt="Logo"/>
                    </span>
                </div>
                <nav className="header-middle__nav">
                    <a href="/" className="header-tab active">Sports</a>
                    <a href="/" className="header-tab">Games</a>
                </nav>
                <div className="header-middle__auth">
                    <input type="text" placeholder="Username" className="header-input" />
                    <input type="password" placeholder="Password" className="header-input" />
                    <button className="header-middle__login-btn">LOGIN</button>
                </div>
            </header>

            {/* Нижний хедер */}
            <header className="header-bottom">
                <nav className="header-bottom__nav-left">
                    <a href="/" className="header-link active">PREMATCH</a>
                    <a href="/" className="header-link">LIVE BETTING</a>
                    <a href="/" className="header-link">LIVESCORE</a>
                    <a href="/" className="header-link">
                        KIWI ARENA <span className="header-link-new">NEW</span>
                    </a>
                </nav>
                <nav className="header-bottom__nav-right">
                    <a href="/" className="header-link">BONUSES</a>
                    <a href="/" className="header-link">DEPOSIT</a>
                    <a href="/" className="header-link">WITHDRAWALS</a>
                </nav>
            </header>
        </>
    );
};

export default HeaderComponent;
