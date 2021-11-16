import React, {useEffect, useState} from 'react';

export const useTimer = (date) => {
    const [seconds, setSeconds] = useState(0);
    const [minute, setMinute] = useState(0);
    const [hours, setHours] = useState(0);
    let interval;
    const startTimer = () => {
        const countDownDate = new Date(date).getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countDownDate - now;

            const hours = Math.floor((distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);

            if (distance < 0) {
                // Stop Timer
                clearInterval(interval.current);
            } else {
                // Update Timer
                setHours(hours);
                setMinute(minutes);
                setSeconds(seconds);
            }
        });
    };
    useEffect(() => {
        startTimer();
    });
    return (
        <div>

        </div>
    );
};
