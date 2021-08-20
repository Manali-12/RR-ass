import { Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react'
import { useSelector } from "react-redux"
const useStyle = makeStyles({
    img_div: {
        margin: "auto",
    },
    root: {
        display: "inline-flex",
        flexDirection: "row",
        width: "275px",
        height: "180px",
        margin: "2%",

    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: "4px"
    },
    text: {
        margin: "0 0 0 2%"
    },
    btn: {
        color: "white",
        backgroundColor: "black",
        margin: " auto 45%",
        minWidth: "40px"
    }
})


export default function ImageList({ clicked }) {
    const classes = useStyle();
    const [shown, setShown] = useState(4);

    var Items = useSelector(state => {
        return state.allItems.Items
    });
    console.log(Items)

    const renderList = Items.slice(0, shown).map((item) => {
        return (
            <>
                <div key={item.id} className={classes.root}>
                    <img src={item.urls.regular} alt={item.user.name} className={classes.img} />
                </div>
            </>
        )
    })

    if (Items.length === 0)
        return null;
    else
        return (
            <div className={classes.img_div}>
                <Typography variant="h6" className={classes.text}>{clicked}</Typography>
                <Typography variant="body1" color="textSecondary" className={classes.text}>{Items.length} Images have been found</Typography>
                {renderList}
                <Button onClick={() => setShown((prevValue) => prevValue + 4)} className={classes.btn}>Load More</Button>
            </div>

        )
}

