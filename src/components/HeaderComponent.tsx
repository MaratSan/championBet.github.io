import React, { useState, useEffect } from 'react';

import '../styles/HeaderComponent.css';

const HeaderComponent: React.FC = () => {
    const [time, setTime] = useState<string>("");

    // Функция для обновления времени
    const updateTime = () => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, "0");
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const seconds = String(now.getSeconds()).padStart(2, "0");
        setTime(`${hours}:${minutes}:${seconds}`);
    };

    // Используем useEffect для запуска таймера
    useEffect(() => {
        updateTime(); // Устанавливаем время при первом рендере
        const intervalId = setInterval(updateTime, 1000); // Обновляем каждую секунду

        return () => clearInterval(intervalId); // Очищаем таймер при размонтировании
    }, []);

    return (
        <>
            {/* Верхний хедер */}
            <header className="header-top">
                <div className="header-top__left">
                    <span className="header-top__time">{time}</span>
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
