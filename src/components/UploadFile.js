import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AttachmentIcon from '@material-ui/icons/Attachment';

import colors from '../config/colors';

class UploadFile extends Component {
    render() {
        return (
            <div className="d-flex align-content-center" style={{ borderColor: colors.lightGrey, borderWidth: 2, borderStyle: "dashed", margin: "2vw", flexDirection: 'column', alignItems: "center" }} >
                <div className="d-flex align-content-center" style={{ padding: "3vw", flexDirection: 'column', alignItems: "center" }} >
                    <div>
                        <img src="https://www.prepostseo.com/imgs/upload-icon.svg" style={{ width: "7vw", height: "7vw" }} />
                    </div>

                    <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center" }} >
                        <p style={{ fontSize: "2vw" }} >Drag Files to upload</p>
                        <p style={{ fontWeight: "600", marginTop: -12, color: colors.grey }} >or copy paste photo</p>
                    </div>

                    <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center" }} >
                        <label className="btn btn-default" style={{ fontSize: '1vw', color: 'grey', fontWeight: "500", borderWidth: 2, borderColor: colors.secondary, paddingLeft: "2vw", paddingRight: "2vw" }} >
                            UPLOAD PICTURE <input type="file" hidden />
                        </label>
                    </div>
                </div>

                <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center", backgroundColor: "#eff4f9", padding: "2vw", width: "100%" }} >
                    <p style={{ fontWeight: "bold", color: colors.grey }} >- OR - Paste URL</p>

                    <div className="d-flex align-content-center" style={{ flexDirection: 'row', alignItems: "center", width: "100%" }}  >
                        <div className="d-flex align-content-center" style={{ flexDirection: 'column', alignItems: "center", justifyContent: "center", width: "3.1vw", height: "3.1vw", backgroundColor: colors.primary }} >
                            <AttachmentIcon style={{ color: colors.white }} />
                        </div>
                        <input type="text" style={{ width: "90%", padding: "0.5vw", borderWidth: 1.4, borderColor: colors.secondary }} />
                    </div>
                </div>

                <Button variant="contained" style={{ marginTop: "2vw", marginBottom: "2vw", paddingLeft: "1.6vw", paddingRight: "1.6vw", backgroundColor: colors.primary, color: colors.white }}>
                    Submit
                </Button>

            </div>
        );
    }
}

export default UploadFile;