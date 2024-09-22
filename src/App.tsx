import React from 'react';
import SidebarComponent from '../src/components/SidebarComponent';
import HighlightsComponent from '../src/components/HighlightsComponent';
import HeaderComponent from '../src/components/HeaderComponent';
import BetSlipComponent from '../src/components/BetSlipComponent';
import PopularGamesComponent from '../src/components/PopularGamesComponent';
import '../src/styles/App.css';
import FooterComponent from "./components/FooterComponent.tsx";

const App: React.FC = () => {
    return (
        <div className="app">
            {/* Хедер */}
            <HeaderComponent />

            {/* Основной контент (Sidebar и Highlights) */}
            <div className="main-content">
                <SidebarComponent />
                <div className="right-content">
                    <HighlightsComponent />
                    <div className="right-sidebar">
                        <BetSlipComponent />
                        <PopularGamesComponent /> {/* Добавляем секцию Popular Games под Bet Slip */}
                    </div>
                </div>
            </div>
            <FooterComponent />
        </div>
    );
};

export default App;
