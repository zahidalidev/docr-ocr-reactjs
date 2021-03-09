import React, { Component } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import RefreshIcon from '@material-ui/icons/Refresh';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';

import SpeechLangs from "../assets/languages/translatorLangages"
import convert from './convert.png';
import colors from "../config/colors";

class Translator extends Component {

    state = {
        selectedLanguage: "en"
    }

    handleLanguageChange = (e) => {
        this.setState({ selectedLanguage: e.target.value })
    }

    render() {
        const { selectedLanguage } = this.state;

        return (
            <div>
                <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center", marginTop: '5vw' }} >
                    <p style={{ fontSize: "3vw" }} >Translator</p>
                </div>
                <div className="d-flex align-content-center" style={{ borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid", borderTopRightRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, margin: "2vw", flexDirection: 'column', alignItems: "center" }}>
                    <div className="d-flex align-content-center" style={{ padding: "1.8vw", flexDirection: 'row', alignItems: "center" }}>
                        <div className="d-flex align-content-left" style={{ flexDirection: 'column', alignItems: "left", marginRight: '20vw' }}>
                            <p style={{ fontSize: "1.3vw", marginBottom: '-0.8vw' }} > Auto Detected</p>
                        </div>
                        <div> <img src={convert} alt="" width='35' length='35' /></div>
                        <div className="d-flex align-content-right" style={{ flexDirection: 'column', alignItems: "right", marginLeft: '20vw' }}>
                            <FormControl style={{ minWidth: 120, border: "none" }}>
                                <Select
                                    value={selectedLanguage}
                                    onChange={this.handleLanguageChange}
                                    displayEmpty
                                    style={{ marginTop: "1vw", border: "none" }}
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >

                                    {SpeechLangs.map((lan, i) => (
                                        <MenuItem value={lan.code}>{lan.name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                    </div>

                    <div className="d-flex" style={{ flexDirection: 'row' }}>
                        <div className="d-flex align-content-center" style={{ borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid", borderBottom: 0, borderLeft: 0, flexDirection: 'column' }}>
                            <div style={{ width: '47vw' }} >
                                <textarea style={{ border: "none", margin: "1vw" }} rows="15" cols="69" placeholder="Type something" >

                                </textarea>
                                <MicIcon style={{ width: 30, height: 30, color: colors.grey, margin: "1vw", marginLeft: 0, cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className="d-flex align-content-right" style={{ borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid", borderBottom: 0, borderRight: 0, flexDirection: 'column' }}>
                            <div style={{ width: '47vw' }} >

                                <textarea style={{ border: "none", margin: "1vw" }} rows="15" cols="69" placeholder="Type something" >

                                </textarea>
                                <MicIcon style={{ width: 30, height: 30, color: colors.grey, margin: "1vw", marginLeft: 0, cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Translator;
