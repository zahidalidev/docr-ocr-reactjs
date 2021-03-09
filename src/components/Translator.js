import React, { Component } from 'react';
import colors from "../config/colors";
import MicIcon from '@material-ui/icons/Mic';
import RefreshIcon from '@material-ui/icons/Refresh';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import convert from './convert.png';
import Box from '@material-ui/core/Box';

console.log(convert);

class Translator extends Component {
    render(){
        return(
            <div>
                <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center", marginTop: '5vw' }} >
                        <p style={{ fontSize: "3vw" }} >Translator</p>
                </div>
                <div className="d-flex align-content-center" style={{borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid",borderTopRightRadius:  15, borderBottomRightRadius:  15, borderTopLeftRadius:  15, borderBottomLeftRadius:  15, margin: "2vw", flexDirection: 'column', alignItems: "center" }}>
                    <div className="d-flex align-content-center" style={{ padding: "3vw", flexDirection: 'row', alignItems: "center" }}>
                        <div className="d-flex align-content-left" style={{ flexDirection: 'column', alignItems: "left", marginRight: '20vw'}}>
                            <InputLabel id="label">Choose Language:</InputLabel>
                            <Select labelId="label" id="select" value="">
                                <MenuItem value="">English</MenuItem>
                                <MenuItem value="">Urdu</MenuItem>
                                <MenuItem value="">Arabic</MenuItem>
                                <MenuItem value="">Potuguese</MenuItem>
                                <MenuItem value="">Chineese</MenuItem>
                                <MenuItem value="">Bengali</MenuItem>
                                <MenuItem value="">Russian</MenuItem>
                                <MenuItem value="">Spanish</MenuItem>
                                <MenuItem value="">German</MenuItem>
                                <MenuItem value="">French</MenuItem>
                            </Select>
                        </div>
                        <div> <img src={convert} alt="" width = '35' length = '35' /></div>
                        <div className="d-flex align-content-right" style={{ flexDirection: 'column', alignItems: "right", marginLeft: '20vw'}}>
                            <InputLabel id="label2">Choose Language:</InputLabel>
                            <Select labelId="label2" id="select2" value="">
                                <MenuItem value="">English</MenuItem>
                                <MenuItem value="">Urdu</MenuItem>
                                <MenuItem value="">Arabic</MenuItem>
                                <MenuItem value="">Potuguese</MenuItem>
                                <MenuItem value="">Chineese</MenuItem>
                                <MenuItem value="">Bengali</MenuItem>
                                <MenuItem value="">Russian</MenuItem>
                                <MenuItem value="">Spanish</MenuItem>
                                <MenuItem value="">German</MenuItem>
                                <MenuItem value="">French</MenuItem>
                            </Select>
                        </div>
                    </div>
                    <div className="d-flex" style={{flexDirection: 'row'}}>
                        <div className="d-flex align-content-center" style={{borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid", borderBottom: 0,borderLeft : 0, flexDirection: 'column'}}>
                            <div style= {{width: '50%'}}>
                                <Box display="flex" bgcolor="background.paper" style={{paddingBottom: '15vw', width: '47vw'}} >
                                    <p style={{ fontSize: "2vw", color: colors.grey, fontSize: '3vw', marginTop: '3vw', marginLeft: '15vw'}} >Enter Text:</p>
                                    <div className="d-flex align-content-right" alignContent='flex-end' style={{display:'flex', flexDirection: 'column'}} >
                                        <RefreshIcon style={{ color: colors.grey}} />
                                        <MicIcon style={{ color: colors.grey}} />
                                    </div>
                                </Box>
                            </div>
                        </div>
                        <div className="d-flex align-content-right" style={{borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "solid", borderBottom: 0, borderRight: 0, flexDirection: 'column'}}>
                            <div style= {{width: '50%'}}>
                                <Box display="flex" p={1} bgcolor="background.paper" style={{paddingBottom: '15vw', width: '47vw', borderRightWidth: 0}}>
                                    <p style={{ fontSize: "2vw", color: colors.grey, fontSize: '3vw', marginTop: '3vw', marginLeft: '15vw'}} >Translate:</p>
                                </Box>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Translator;
