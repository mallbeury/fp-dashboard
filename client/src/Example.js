import React from 'react';
import Like from "./Like";
import {Frame} from "framer";
import logo from './background.svg';

export default function Example(props) {
    return (
        <div>

            <Frame
                center
                background={{}}
                initial={{ x: 0, y: 0, width: 220, height: 220, rotate: 0, scale: 1, opacity: 1 }}
            >
                <img src={logo} alt="logo" />

                <Like animating={props.animating} index={0} />
                <Like animating={props.animating} index={1} />
                <Like animating={props.animating} index={2} />
                <Like animating={props.animating} index={3} />
                <Like animating={props.animating} index={4} />
            </Frame>

        </div>
    )

}