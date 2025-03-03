import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BackButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <button
            className="back-button"
            onClick={handleClick}
        >
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
    );
};

export default BackButton;