import React from 'react';

import {MediaMatcher, MediaServerRender} from 'react-media-match'

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
        <div>
            <MediaServerRender predicted="desktop" hydrated>
            <MediaMatcher
                mobile={
                <div className="col s12 m8 offset-m2 offset-l3">
                    <div className="card-panel white lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            {props.speaks==='bot' &&
                            <div className="col s2" style={{paddingLeft:0}}>
                                <img src={ require('../images/13.jpeg') } style={{width:90, height:110, borderRadius:'50%'}} />
                            </div>
                            }
                            <div className="col s10" style={{paddingLeft:'10%'}}>
                                <span className="black-text">
                                    {props.text}
                                </span>
                            </div>
                            {props.speaks==='user' &&
                            <div className="col s2">
                                {/*<a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>*/}
                            </div>
                            }
                        </div>
                    </div>
                </div>}

                tablet={
                    <div className="col s12 m8 offset-m2 offset-l3">
                        <div className="card-panel white lighten-5 z-depth-1">
                            <div className="row valign-wrapper">
                                {props.speaks==='bot' &&
                                <div className="col s2" style={{paddingLeft:'2%'}}>
                                    <img src={ require('../images/13.jpeg') } style={{width:105, height:130, borderRadius:'50%'}} />
                                </div>
                                }
                                <div className="col s10">
                                    <span className="black-text">
                                        {props.text}
                                    </span>
                                </div>
                                {props.speaks==='user' &&
                                <div className="col s2">
                                    {/*<a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>*/}
                                </div>
                                }
                            </div>
                        </div>
                    </div>}

                desktop={
                <div className="col s12 m8 offset-m2 offset-l3">
                    <div className="card-panel white lighten-5 z-depth-1">
                        <div className="row valign-wrapper">
                            {props.speaks==='bot' &&
                            <div className="col s2" style={{paddingLeft:'4%'}}>
                                <img src={ require('../images/13.jpeg') } style={{width:105, height:130, borderRadius:'50%'}} />
                            </div>
                            }
                            <div className="col s10">
                                <span className="black-text">
                                    {props.text}
                                </span>
                            </div>
                            {props.speaks==='user' &&
                            <div className="col s2">
                                {/*<a className="btn-floating btn-large waves-effect waves-light red">{props.speaks}</a>*/}
                            </div>
                            }
                        </div>
                    </div>
                </div>}

                />
                </MediaServerRender>
                </div>
);

export default Message;