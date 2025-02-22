"use client";

import React, { useState, useEffect } from "react";
import "./styles/CountdownTimer.css"; // Import the CSS file

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const CountdownTimer: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const targetDate = new Date("March 21, 2025 00:00:00").getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference <= 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setTimeLeft({
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            });
        };

        updateTimer();
        const timer = setInterval(updateTimer, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={"absolute right-20 bottom-20"}>
            <div className="countdown-container">
                <div className="year">2025</div>
                <div className="timer-container">
                    <div className="time-box">
                        <p className="time-value">{timeLeft.days.toString().padStart(2, "0")}</p>
                        <p className="time-label">DAYS</p>
                    </div>
                    <div className="time-box">
                        <p className="time-value">{timeLeft.hours.toString().padStart(2, "0")}</p>
                        <p className="time-label">HRS</p>
                    </div>
                    <div className="separator">:</div>
                    <div className="time-box">
                        <p className="time-value">{timeLeft.minutes.toString().padStart(2, "0")}</p>
                        <p className="time-label">MIN</p>
                    </div>
                    <div className="time-box">
                        <p className="time-value">{timeLeft.seconds.toString().padStart(2, "0")}</p>
                        <p className="time-label">SEC</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
