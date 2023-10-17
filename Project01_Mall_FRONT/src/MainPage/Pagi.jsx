import React, { useState, useEffect } from 'react';

function Pagi() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 5000);

        return () => clearInterval(interval);  // Component가 unmount될 때 interval을 제거
    }, []);

    return (
        <div>
            {[...Array(4)].map((_, index) => (
                <span key={index} className={activeIndex === index ? 'active' : ''}></span>
            ))}
        </div>
    );
}

export default Pagi;