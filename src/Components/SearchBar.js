import React, { useEffect } from 'react'
import { Button, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux"
import { setItems } from "../Redux/Actions/ItemAction"
import ImageList from './ImageList';



const useStyles = makeStyles({
    body: {
        margin: "0 10%"
    },
    input: {
        width: "75%",
        border: "0",
        height: "2.5em",
        boxShadow: "0 4px 6px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        fontSize: "15px",
        outline: "none",
        borderRadius: "4px",
        padding: "20px",
        float: "left",
        margin: "0 2%",
    },
    form_div: {
        display: "flex",
        flexDirection: "row",
        textAlign: "center",
        margin: "5% 0"
    },
    btn: {
        color: "white",
        backgroundColor: "black",
        width: "10%",
        height: "2.8em",
        // margin: "0 4%",
        '& :hover': {
            color: "black",
        }

    },
    form: {
        width: "100%"
    },
    list_div: {
        // margin: "-2% 9.5%"
    }
})

export default function SearchBar() {
    const classes = useStyles();

    const [clicked, setclicked] = useState(false);
    const [input, setinput] = useState("");

    const items = useSelector(state => state);
    const API_KEY = "d0qttRinsBiMfcVWl6c-rZBUTmYbCTwft9flwawgLT8";
    const dispatch = useDispatch();
    const fetchItems = async () => {
        const res = await axios.get(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${clicked}`).catch((err) => console.log("error", err));
        dispatch(setItems(res.data.results));
    };
    console.log(clicked);



    function handleClick(e) {
        e.preventDefault();
        setclicked(input === "" ? "random" : input);
        fetchItems();

    }

    function handleChange(e) {
        setinput(e.target.value);
    }

    return (
        <><div className={classes.body}>
            <div className={classes.form_div}>
                <form className={classes.form}>
                    <div>
                        <input type="text" placeholder="Search for Photos" className={classes.input} value={input} onChange={(e) => handleChange(e, 10)}></input>
                        <Button className={classes.btn} onClick={(e) => handleClick(e)}><SearchIcon /></Button>
                    </div>
                </form>
            </div>
            <div className={classes.list_div}>
                {clicked !== false ? <ImageList clicked={clicked} /> : null}
            </div></div>
        </>
    )
}
