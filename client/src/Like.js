import React from 'react';
import {Frame, useAnimation} from "framer";
import LikeHeart from "./LikeHeart";
import LikeAvatar from "./LikeAvatar";

export default function Like(props) {
    // Create a function to get a random integer
    function getRandomInt(min, max) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min
    }

    // Randomly generate rotate and x travel distance values for each heart
    let rotate = getRandomInt(-20, 20)
    let travelX = 20 + (getRandomInt(0, 1) * 2 - 1) * 10

    const controls = useAnimation()

    if (props.animating === true) {
        controls.start({
            x: 0,
            y: 0,
            rotate: 0,
            scale: 0,
            opacity: 1,
            transition: { duration: 0 },
        })

        controls.start({
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 0.2,
                delay: 0.4 * props.index,
            },
        })
        // Float the heart to the top
        controls.start({
            y: -140,
            opacity: 0,
            transition: {
                ease: "easeOut",
                duration: 2.6,
                delay: 0.4 * props.index,
            },
        })
        // Rotate and make the heart float left and right as it goes up
        controls.start({
            rotate: [rotate, -rotate, rotate, -rotate, rotate],
            x: [travelX, -travelX, travelX, -travelX, travelX],
            transition: {
                ease: "easeOut",
                duration: 3,
                delay: 0.4 * props.index,
            },
        })
    }
    else {
        controls.start({
            x: 0,
            y: 0,
            rotate: 0,
            scale: 0,
            opacity: 1,
            transition: { duration: 0 },
        })
    }

    let color = "#B81064";
//            <LikeHeart />

    return (
        <Frame
            center
            background={{}}
            initial={{ x: 0, y: 0, width: 85, height: 74.575, rotate: 0, scale: 0, opacity: 1 }}
            animate={controls}
        >
            <LikeAvatar />
        </Frame>
    )
}