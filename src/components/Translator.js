import React, { Component } from 'react';
import MicIcon from '@material-ui/icons/Mic';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import axios from "axios"
import Artyom from 'artyom.js';

import SpeechLangs from "../assets/languages/translatorLangages"
import convert from './convert.png';
import colors from "../config/colors";
import Spinner from "../components/Spiner"

const Jarvis = new Artyom();

class Translator extends Component {

    state = {
        selectedLanguage: "en",
        scannedText: this.props.onScannedText,
        translatedText: '',
        artyomIsReading: false,
        loading: false
    }

    speak = (text) => {
        this.setState({
            artyomIsReading: true
        });

        let _this = this;
        // Speak text with Artyom
        Jarvis.say(text, {
            onEnd() {
                _this.setState({
                    artyomIsReading: false
                });
            }
        });
    }

    speakScannedText = () => {
        this.speak(this.state.scannedText)
    }

    speakTranslatedText = () => {
        this.speak(this.state.translatedText)
    }

    handleScannedTextChange = (e) => {
        this.setState({ scannedText: e.target.value })
    }

    handleTranslatedTextChange = (e) => {
        this.setState({ translatedText: e.target.value })
    }

    handleLanguageChange = (e) => {
        this.setState({ selectedLanguage: e.target.value })
    }

    translateText = async () => {
        try {
            const body = {
                text: this.state.scannedText,
                to: this.state.selectedLanguage
            };

            this.setState({ loading: true })
            const { data } = await axios.post("https://dococrnode.herokuapp.com/api/translate", body)
            this.setState({ loading: false })
            this.setState({ translatedText: data })
        } catch (error) {

        }
    }

    swapText = () => {
        const temp = this.state.scannedText;
        this.setState({ scannedText: this.state.translatedText, translatedText: temp })
    }

    render() {
        const { selectedLanguage, scannedText, translatedText, loading } = this.state;

        return (
            <div className="d-flex" style={{ flexDirection: 'column', alignItems: "center" }} >

                {loading ?
                    <div className="d-flex" style={{ backgroundColor: "rgba(234, 227, 227, 0.5)", width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                        <Spinner />
                    </div>
                    : null
                }

                <div className="d-flex" style={{ flexDirection: 'column', alignItems: "center", marginTop: '3vw' }} >
                    <p style={{ fontSize: "3vw" }} >Translator</p>
                </div>
                <div className="d-flex" style={{ borderColor: colors.lightGrey, borderWidth: 1, borderStyle: "solid", borderTopRightRadius: 15, borderBottomRightRadius: 15, borderTopLeftRadius: 15, borderBottomLeftRadius: 15, margin: "2vw", flexDirection: 'column', alignItems: "center" }}>
                    <div className="d-flex" style={{ padding: "1.8vw", flexDirection: 'row', alignItems: "center" }}>
                        <div className="d-flex" style={{ flexDirection: 'column', alignItems: "left", marginRight: '20vw' }}>
                            <p style={{ fontSize: "1.3vw", marginBottom: '-0.8vw' }} > Auto Detected</p>
                        </div>
                        <div> <img onClick={this.swapText} style={{ cursor: "pointer" }} src={convert} alt="" width='35' length='35' /></div>
                        <div className="d-flex" style={{ flexDirection: 'column', alignItems: "right", marginLeft: '20vw' }}>
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
                        <div className="d-flex" style={{ borderColor: colors.lightGrey, borderWidth: 1, borderStyle: "solid", borderBottom: 0, borderLeft: 0, flexDirection: 'column' }}>
                            <div style={{ width: '47vw' }} >
                                <textarea value={scannedText} onChange={this.handleScannedTextChange} style={{ border: "none", margin: "1vw" }} rows="10" cols="69" placeholder="Type something" >
                                    {/* {scannedText} */}
                                </textarea>
                                <MicIcon onClick={this.speakScannedText} style={{ width: 30, height: 30, color: colors.grey, margin: "1vw", marginLeft: 0, cursor: "pointer" }} />
                            </div>
                        </div>
                        <div className="d-flex" style={{ borderColor: colors.lightGrey, borderWidth: 1, borderStyle: "solid", borderBottom: 0, borderRight: 0, flexDirection: 'column' }}>
                            <div style={{ width: '47vw' }} >
                                <textarea value={translatedText} onChange={this.handleTranslatedTextChange} style={{ border: "none", margin: "1vw" }} rows="10" cols="69" placeholder="Type something" >
                                    {/* {translatedText} */}
                                </textarea>
                                <MicIcon onClick={this.speakTranslatedText} style={{ width: 30, height: 30, color: colors.grey, margin: "1vw", marginLeft: 0, cursor: "pointer" }} />
                            </div>
                        </div>
                    </div>
                </div>

                <Button onClick={this.translateText} variant="contained" style={{ marginTop: "2vw", marginBottom: "2vw", paddingLeft: "1.6vw", paddingRight: "1.6vw", backgroundColor: colors.primary, color: colors.white }}>
                    Translate
                </Button>
            </div>
        );
    }
}

export default Translator;
