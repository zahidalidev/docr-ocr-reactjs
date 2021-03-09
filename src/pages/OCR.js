import React, { Component } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UploadFile from '../components/UploadFile';

class OCR extends Component {

    render() {
        const { onLoading, onHandleChangeImage, onSaveFile, onCurrentFile } = this.props;
        return (
            <div>
                {onLoading !== 1 ?
                    <div className="d-flex" style={{ backgroundColor: "rgba(234, 227, 227, 0.5)", width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                        <div className="d-flex" style={{ width: "8vw", height: "8vw", marginTop: "-10vw" }} >
                            <CircularProgressbar value={onLoading} text={`${onLoading}%`} />;
                    </div>
                    </div>
                    : null
                }

                <UploadFile onCurrentFileChild={onCurrentFile} onHistory={this.props.history} onHandleChange={onHandleChangeImage} onSaveFileChild={onSaveFile} />
            </div>
        );
    }
}


export default OCR;
