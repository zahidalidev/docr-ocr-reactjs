import React from 'react';

import UploadFile from '../components/UploadFile';
import Translator from '../components/Translator';

function OCR(props) {
    return (
        <div>
            <UploadFile />
            <Translator />
        </div>
    );
}


export default OCR;
