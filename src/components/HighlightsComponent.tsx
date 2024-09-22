import React from 'react';
import '../styles/HighlightsComponent.css';

const matches = [
    { match: "Bayer Leverkusen - VfL Wolfsburg", date: "22.09", time: "15:30", id: "25892", odds: [1.25, 1.06, 6.75, 3.90, 10.50] },
    { match: "Fortuna Sittard - PSV Eindhoven", date: "22.09", time: "16:45", id: "26004", odds: [12.50, 4.30, 7.25, 1.04, 1.20] },
    { match: "SK Dynamo Ceske Budejovice - Sparta Prague", date: "22.09", time: "15:30", id: "30334", odds: [12.00, 4.10, 6.50, 1.03, 1.18] },
    { match: "Panathinaikos Athens - Panserraikos FC", date: "22.09", time: "17:00", id: "23136", odds: [1.20, 1.04, 6.50, 4.20, 14.00] }
];

const HighlightsComponent: React.FC = () => {
    return (
        <section className="highlights-section">
            {/* Верхняя часть с баннером */}
            <div className="highlights-banner">
                <img src="src/assets/027905ec-6642-4f5e-a1bd-d1b76e79c50c.jpeg" alt="Accumulator Bonus 1000%" />
            </div>

            {/* Секция Highlights */}
            <div className="highlights-content">
                <h2 className="highlights-title">Highlights</h2>

                {/* Вкладки */}
                <div className="highlights-tabs">
                    <button className="highlight-tab active">Most Popular</button>
                    <button className="highlight-tab">Bundesliga</button>
                    <button className="highlight-tab">Eredivisie</button>
                    <button className="highlight-tab">LaLiga</button>
                    <button className="highlight-tab">Ligue 1</button>
                    <button className="highlight-tab">EFL Cup</button>
                </div>

                {/* Таблица матчей */}
                <div className="highlights-table">
                    <div className="highlights-table-header">
                        <span>Match</span>
                        <span>Date</span>
                        <span>ID</span>
                        <span>1</span>
                        <span>1X</span>
                        <span>X</span>
                        <span>X2</span>
                        <span>2</span>
                    </div>

                    {matches.map((match, index) => (
                        <div key={index} className="highlights-table-row">
                            <span>⚽ {match.match}</span>
                            <span>{match.date} {match.time}</span>
                            <span>{match.id}</span>
                            {match.odds.map((odd, i) => (
                                <span key={i}>{odd}</span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HighlightsComponent;
