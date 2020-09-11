import React from 'react';
import { createUseStyles } from 'react-jss'
import { ReactComponent as HeartIcon } from './heart.svg';

const useStyles = createUseStyles({
    wrapper: {
        '& circle': {
            fill: "#B81064",
//            fill: "#0000ff",
        }
    }
});

export default function LikeHeart(props) {
    const classes = useStyles()

    return (
        <HeartIcon className={classes.wrapper} />
    )
}