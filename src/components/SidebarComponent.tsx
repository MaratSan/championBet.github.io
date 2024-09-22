import React from 'react';
import '../styles/SidebarComponent.css';

const SidebarComponent: React.FC = () => {
    return (
        <aside className="sidebar">
            {/* Вкладки PREMATCH и SPECIAL OFFER */}
            <div className="sidebar__tabs">
                <button className="sidebar__tab active">PREMATCH</button>
                <button className="sidebar__tab">SPECIAL OFFER</button>
            </div>

            {/* Поисковая строка */}
            <div className="sidebar__search">
                <input type="text" placeholder="Search" className="sidebar__search-input" />
                <button className="sidebar__search-btn">&#128269;</button>
            </div>

            {/* Кнопки выбора даты */}
            <div className="sidebar__date-buttons">
                <button className="sidebar__date-btn active">Today</button>
                <button className="sidebar__date-btn">Tomorrow</button>
            </div>

            {/* Список Top Bets */}
            <div className="sidebar__top-bets">
                <h3 className="sidebar__section-title">TOP BETS</h3>
                <ul className="sidebar__list">
                    <li className="sidebar__item">
                        <span role="img" aria-label="UEFA Champions League">🌍</span> UEFA Champions League
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="UEFA Europa League">🌍</span> UEFA Europa League
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="UEFA Conference League">🌍</span> UEFA Conference League
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Premier League">🏴</span> Premier League
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="EFL Cup">🏴</span> EFL Cup
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="LaLiga">🇪🇸</span> LaLiga
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Serie A">🇮🇹</span> Serie A
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Bundesliga">🇩🇪</span> Bundesliga
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Ligue 1">🇫🇷</span> Ligue 1
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Eredivisie">🇳🇱</span> Eredivisie
                    </li>
                    <li className="sidebar__item">
                        <span role="img" aria-label="Liga Portugal">🇵🇹</span> Liga Portugal
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default SidebarComponent;
