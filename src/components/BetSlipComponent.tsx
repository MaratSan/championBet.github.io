import React from 'react';
import '../styles/BetSlipComponent.css';

const BetSlipComponent: React.FC = () => {
    return (
        <div className="bet-slip">
            <h2>Your Ticket</h2>
            <div className="bet-slip__empty">Your ticket is still empty</div>
            <button className="bet-slip__button">Check Ticket</button>
        </div>
    );
};

export default BetSlipComponent;
