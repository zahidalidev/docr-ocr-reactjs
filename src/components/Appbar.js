import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from "react-router"

import colors from "../config/colors"

export default class Appbar extends Component {

    render() {
        return (
            <div style={{ flexGrow: 1, }}>
                <AppBar position="static" style={{ backgroundColor: colors.primary }} >
                    <Toolbar>
                        <Typography onClick={() => this.props.history.push('/')} variant="h6" style={{
                            flexGrow: 1,
                            fontWeight: "bold",
                            marginLeft: "1vw",
                            cursor: "pointer"
                        }}>
                            Doc OCR
                    </Typography>
                        <Typography onClick={() => this.props.history.push('/translator')} variant="h6" style={{ cursor: "pointer", fontWeight: "Bold", marginRight: "2vw" }} color="inherit">Translator</Typography>
                        <Typography onClick={() => this.props.history.push('/aboutus')} variant="h6" style={{ cursor: "pointer", fontWeight: "Bold", marginRight: "1vw" }} color="inherit">About</Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}
