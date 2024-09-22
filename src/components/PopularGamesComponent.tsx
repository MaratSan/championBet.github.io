import React from 'react';
import '../styles/PopularGamesComponent.css';

const PopularGamesComponent: React.FC = () => {
    return (
        <div className="popular-games">
            <h3 className="popular-games__title">Popular Games</h3>
            <div className="popular-games__grid">
                <div className="popular-games__item">
                    <img src="src/assets/aviator.webp" alt="Gates of Olympus" />
                </div>
                <div className="popular-games__item">
                    <img src="src/assets/aviator.webp" alt="Sugar Rush" />
                </div>
                <div className="popular-games__item">
                    <img src="src/assets/aviator.webp" alt="Gates of Olympus 1000" />
                </div>
                <div className="popular-games__item">
                    <img src="src/assets/aviator.webp" alt="5 Lions Megaways" />
                </div>
            </div>
            <div className="popular-games__pagination">
                <span className="pagination-dot active"></span>
                <span className="pagination-dot"></span>
                <span className="pagination-dot"></span>
                <span className="pagination-dot"></span>
            </div>
        </div>
    );
};

export default PopularGamesComponent;
