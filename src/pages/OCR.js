import React, { Component } from 'react';
import { createWorker } from 'tesseract.js';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import UploadFile from '../components/UploadFile';
import Translator from '../components/Translator';

const worker = createWorker({
    logger: m => console.log(m),
});

class OCR extends Component {

    state = {
        currentFile: null,
        ocr: "",
        loading: 1
    }

    handleChange = (e) => {
        this.setState({ currentFile: e.target.files[0] })
    }

    saveFile = async (e) => {
        e.preventDefault();
        try {
            const worker = createWorker({
                logger: m => this.setState({ loading: (Math.floor(m.progress * 100) / 100) * 100 }),
            });

            await worker.load();
            await worker.loadLanguage('eng');
            await worker.initialize('eng');
            const { data: { text } } = await worker.recognize(this.state.currentFile);

            this.setState({ ocr: text, loading: 1 });

        } catch (error) {
            alert(error)
            this.setState({ loading: 1 });
        }
    }

    render() {
        console.log("loading: ", this.state.loading)
        const { loading } = this.state;
        return (
            <div>
                {loading !== 1 ?
                    <div className="d-flex" style={{ backgroundColor: "rgba(234, 227, 227, 0.5)", width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "center", flexDirection: 'column' }} >
                        <div className="d-flex" style={{ width: "8vw", height: "8vw", marginTop: "-10vw" }} >
                            <CircularProgressbar value={loading} text={`${loading}%`} />;
                    </div>
                    </div>
                    : null
                }

                <UploadFile onHandleChange={this.handleChange} onSaveFile={this.saveFile} />
                <Translator />
            </div>
        );
    }
}


export default OCR;
