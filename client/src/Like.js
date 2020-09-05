import React, { useState } from 'react';
import {Frame, useAnimation} from "framer";

export default function Like(props) {
//    const [animating, setAnimating] = useState(props.animating);

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
            y: 30,
            rotate: 0,
            scale: 0,
            opacity: 1,
            transition: { duration: 0 },
        })
    }

    return (
        <Frame
            center
            background={{}}
            initial={{ x: 0, y: 30, width: 85, height: 74.575, rotate: 0, scale: 0, opacity: 1, color: '#ff0000' }}
            animate={controls}
        >

            <svg width="35px" height="35px" viewBox="0 0 35 35" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="icn_step3" transform="translate(-167.000000, -29.000000)">
                        <g id="Group-28" transform="translate(45.000000, 29.000000)">
                            <g id="Group-27" transform="translate(122.000000, 0.000000)">
                                <circle id="Oval-12" fill="#B81064" cx="17.5" cy="17.5" r="17.5"></circle>
                                <path d="M13.0445701,9.5 C11.5796448,9.5 10.156977,10.125972 9.21322701,11.2282271 C6.6355219,14.2083981 8.11453303,18.0594868 10.8330963,20.6314152 C13.3403724,23.0128305 15.6786185,24.7002333 17.678805,27 L24.7921442,20.903577 C27.6093083,18.4405132 29.2573493,14.657465 26.8064165,11.5684292 C25.8626666,10.3845257 24.3836555,9.67690513 22.848301,9.67690513 C21.0312302,9.67690513 19.1296445,10.6566874 17.9746072,12.9700622 C16.8759132,10.5478227 14.9179842,9.5 13.0445701,9.5" id="Shape" fill="#FFFFFF" fillRule="nonzero"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>

        </Frame>
    )

}