import React from 'react';

/*
setAvatar(props) {
    let window.topicText = ""
 if (props.payload.fields.image.stringValue === ...) {
    window.topicText = "A"
 }
} 

{props.speaks==='bot' && window.topicText ==== "A"
    <div className="col s2">
        <a img="...">{props.speaks}</a>
    </div>
} 


*/

const Message = (props) => (
    <div className="col s12 m8 offset-m2 offset-l3">
        <div className="card-panel grey lighten-5 z-depth-1">
            <div className="row valign-wrapper">
                {props.speaks==='bot' &&
                <div className="col s2">
                    <img src={ 'https://upload-icon.s3.us-east-2.amazonaws.com/uploads/icons/png/14445772001547544865-512.png' } style={{width:50, height:50}} />
                </div>
                }
                <div className="col s10">
                    <span className="black-text">
                        {props.text}
                    </span>
                </div>
                {props.speaks==='user' &&
                <div className="col s2">
                    <a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>
                </div>
                }
            </div>
        </div>
    </div>
);

export default Message;