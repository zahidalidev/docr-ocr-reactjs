import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import colors from "../config/colors"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: "bold",
        marginLeft: "1vw"
    },
}));

export default function Appbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ backgroundColor: colors.primary }} >
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Doc OCR
                    </Typography>
                    <Typography variant="h6" style={{ cursor: "pointer", fontWeight: "Bold", marginRight: "1vw" }} color="inherit">About</Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
