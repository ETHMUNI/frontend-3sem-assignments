import React, { useState, useEffect } from 'react';

function CountdownTimer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [timeInSeconds, setTimeInSeconds] = useState(0);

    useEffect(() => {
        let interval = null;

        if (isActive && timeInSeconds > 0) {
            interval = setInterval(() => {
                setTimeInSeconds(timeInSeconds => timeInSeconds - 1);
            }, 1000);
        } else if (!isActive && timeInSeconds !== 0 && timeInSeconds === 0) {
            setIsActive(false);
        }

        return () => clearInterval(interval);
    }, [isActive, timeInSeconds]);

    useEffect(() => {
        setMinutes(Math.floor(timeInSeconds / 60));
        setSeconds(timeInSeconds % 60);
    }, [timeInSeconds]);

    const handleStart = () => {
        setTimeInSeconds(minutes * 60 + seconds);
        setIsActive(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setTimeInSeconds(0);
        setMinutes(0);
        setSeconds(0);
    };
// e is the event object that is passed to the event handler function
    const handleMinutesChange = (e) => {
        if (!isActive) {
            setMinutes(Number(e.target.value));
            setTimeInSeconds(Number(e.target.value) * 60 + seconds);
        }
    };
// the pause button will only be display if the timer is active
    const handlePause = () => {
        setIsActive(false);
    };

    const handleSecondsChange = (e) => {
        if (!isActive) {
            setSeconds(Number(e.target.value));
            setTimeInSeconds(minutes * 60 + Number(e.target.value));
        }
    };

    const handleSetTime = (min) => {
        setIsActive(false);
        setTimeInSeconds(min * 60);
        setMinutes(min);
        setSeconds(0);
    };

// padStart is a string method that pads the current string with another string until the resulting string reaches the desired length
    return (
        <div>
            <h2>Countdown Timer</h2>
            <div>
                <label>
                    Minutes:
                    <input type="number" value={minutes} onChange={handleMinutesChange} disabled={isActive} />
                </label>
                <label>
                    Seconds:
                    <input type="number" value={seconds} onChange={handleSecondsChange} disabled={isActive} />
                </label>
            </div>
            <div>
                <button onClick={handleStart} disabled={isActive}>Start</button>
                {isActive && <button onClick={handlePause}>Pause</button>}
                <button onClick={handleReset}>Reset</button>
                <button onClick={() => handleSetTime(5)}>5 Minutes</button>
                <button onClick={() => handleSetTime(10)}>10 Minutes</button>
                <button onClick={() => handleSetTime(15)}>15 Minutes</button>
            </div>
            <h3>
                Time Remaining: {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
            </h3>
        </div>
    );
}

export default CountdownTimer;
