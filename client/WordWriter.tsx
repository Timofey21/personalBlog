import React, { useState, useEffect } from 'react';

type Props = {
    text: string;
};

const WordWriter: React.FC<Props> = ({ text }) => {
    const [currentWord, setCurrentWord] = useState('');

    useEffect(() => {
        let currentIndex = 0;
        const intervalId = setInterval(() => {
            setCurrentWord(text.slice(0, currentIndex + 1));
            currentIndex++;
            if (currentIndex === text.length) {
                clearInterval(intervalId);
            }
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [text]);

    return <p>{currentWord}</p>;
};

export default WordWriter;
