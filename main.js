'use strict';

{
    const btn = document.getElementById('btn');

    btn.addEventListener('click', () => {
        // or(Math.random() * results.length);
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = '吉'; //5%
        } else if (n < 0.2) {
            btn.textContent = '中吉'; //20%
        } else {
            btn.textContent = '大吉'; //80%
        }
    });
} 