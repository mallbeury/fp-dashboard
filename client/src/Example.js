import React from 'react';
import Like from "./Like";
import {Frame} from "framer";
import rocket from './rocket.svg';

export default function Example(props) {
    if (props.type === 'page') {
        return (
            <div>
                <Frame
                    center
                    background={{}}
                    initial={{ x: 0, y: 0, width: 220, height: 220, rotate: 0, scale: 1, opacity: 1 }}
                >
                    <img src={rocket} alt="Rocket" />

                    <Like type={props.type} animating={props.animating} index={0} />
                </Frame>
            </div>
        )
    }
    else {
        return (
            <div>
                <Frame
                    center
                    background={{}}
                    initial={{ x: 0, y: 0, width: 220, height: 220, rotate: 0, scale: 1, opacity: 1 }}
                >
                    <img src={rocket} alt="Rocket" />

                    <Like type={props.type} animating={props.animating} index={0} />
                    <Like type={props.type} animating={props.animating} index={1} />
                    <Like type={props.type} animating={props.animating} index={2} />
                    <Like type={props.type} animating={props.animating} index={3} />
                    <Like type={props.type} animating={props.animating} index={4} />
                </Frame>
            </div>
        )
    }
}