import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    const buttonStyle = {
        position: 'fixed',
        top: '10px',
        left: '10px',
        background: 'none',
        border: 'none',
        fontSize: '24px',
        cursor: 'pointer',
        color: '#007bff',
    };

    const buttonHoverStyle = {
        color: '#0056b3',
    };

    return (
        <button
            className="back-button"
            onClick={handleClick}
            style={buttonStyle}
            onMouseOver={(e) => e.currentTarget.style.color = buttonHoverStyle.color}
            onMouseOut={(e) => e.currentTarget.style.color = buttonStyle.color}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
};

export default BackButton;