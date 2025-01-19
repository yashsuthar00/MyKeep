import React, { useState, useEffect, useRef } from 'react';

const Pomodoro = () => {
    const [time, setTime] = useState(1500); // 25 minutes in seconds
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        if (isActive && !isPaused) {
            intervalRef.current = setInterval(() => {
                setTime((prevTime) => {
                    if (prevTime === 1) {
                        clearInterval(intervalRef.current);
                        playAlarm();
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else {
            clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive, isPaused]);

    const playAlarm = () => {
        const alarm = new Audio('/sound/bedside-clock-alarm-95792.mp3');
        alarm.play();
    };

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handleStop = () => {
        setIsActive(false);
        setIsPaused(true);
    };

    const handleReset = () => {
        setIsActive(false);
        setIsPaused(false);
        setTime(1500);
    };

    return (
        <>
            <div className="flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500">
                <div className="pomodoro bg-white p-8 rounded-lg shadow-2xl">
                    <div className="pomodoro__time text-6xl font-bold mb-8 text-gray-800">{formatTime(time)}</div>
                    <div className="pomodoro__buttons flex space-x-4">
                        <button onClick={handleStart} className="pomodoro__button bg-green-500 text-white py-3 px-6 rounded-full hover:bg-green-700 transition duration-300">Start</button>
                        <button onClick={handleStop} className="pomodoro__button bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-700 transition duration-300">Stop</button>
                        <button onClick={handleReset} className="pomodoro__button bg-gray-500 text-white py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300">Reset</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Pomodoro;
