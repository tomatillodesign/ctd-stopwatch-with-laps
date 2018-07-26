import React, { Component } from 'react';

const hour = 1000 * 60 * 60;
const minute = 1000 * 60;

export default function TimeDisplay(props) {
    let time = props.time;
    let hours = Math.floor(time / hour);
    time = time % hour;
    let minutes = Math.floor(time / minute);
    time = time % minute;
    let seconds = Math.floor(time / 1000);
    let tenthsOfASecond = Math.floor((time % 1000)/100);

    return <div>{`${hours}:${minutes}:${seconds}::${tenthsOfASecond}`}</div>;
}
