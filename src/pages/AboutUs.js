import React from 'react';
import colors from '../config/colors';

function AboutUs(props) {
    return (
        <div className="d-flex" style={{ margin: "2vw", flexDirection: 'column', alignItems: "center" }} >
            <div className="d-flex" style={{ flexDirection: "row", marginTop: "3vw" }} >
                <p style={{ color: colors.primary, fontSize: "2.5vw", fontWeight: "500" }} >About DOC OCR</p>
            </div>
            <div className="d-flex" style={{ flexDirection: "row", width: "80%" }} >
                <p style={{ fontSize: "1.4vw" }} >
                    Using this application we can extract text from the image like if someone has notes in hard form and want to make some kind of documentation or need this in the soft text format to store on cloud etc., then rather than typing the whole documentation of the same notes, we can use this application to directly convert the content of the image into text. And memory space is also one of the main advantages because the picture occupies large memory then doc or text file so converting the image to text also saves a lot of memory. And also we can change the language of scanned text into another natural language and scanned text can be read by the application. It means we can also learn different languages through this application like we can convert text to any language that cannot read so the user can use the feature in the application that can read for him and if he does not know the meaning so that can be converted into another language.
                </p>
            </div>
        </div>
    );
}

export default AboutUs;