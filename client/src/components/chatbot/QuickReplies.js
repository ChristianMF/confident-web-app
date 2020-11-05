import React, {Component} from 'react';
import QuickReply from "./QuickReply";

import {MediaMatcher, MediaServerRender} from 'react-media-match'

class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this._handleClick = this._handleClick.bind(this);
    }


    _handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this._handleClick} reply={reply} />;
    }

    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                return this.renderQuickReply(reply, i);
            })
        } else {
            return null;
        }
    }

    render() {
        return (
            <div>
            <MediaServerRender predicted="desktop" hydrated>
            <MediaMatcher
            mobile={
            <div className="col s12 m8 offset-m2 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2" style={{paddingLeft:0}}>
                            <img src={ require('../images/13.jpeg') } style={{width:90, height:110, borderRadius:'50%'}} />
                        </div>
                        <div id="quick-replies" className="col s10" style={{paddingLeft:'10%'}}>
                            {this.props.text && <p>
                                {this.props.text.stringValue}
                            </p>    
                            }
                            {this.renderQuickReplies(this.props.payload)}
                        </div>
                    </div>
                </div>
            </div>}

            tablet={
            <div className="col s12 m8 offset-m2 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2" style={{paddingLeft:'2%'}}>
                            <img src={ require('../images/13.jpeg') } style={{width:105, height:130, borderRadius:'50%'}} />
                        </div>
                        <div id="quick-replies" className="col s10">
                            {this.props.text && <p>
                                {this.props.text.stringValue}
                            </p>    
                            }
                            {this.renderQuickReplies(this.props.payload)}
                        </div>
                    </div>
                </div>
            </div>}

            desktop={
            <div className="col s12 m8 offset-m2 offset-l3">
                <div className="card-panel grey lighten-5 z-depth-1">
                    <div className="row valign-wrapper">
                        <div className="col s2" style={{paddingLeft:'4%'}}>
                            <img src={ require('../images/13.jpeg')} style={{width:105, height:130, borderRadius:'50%'}} />
                        </div>
                        <div id="quick-replies" className="col s10">
                            {this.props.text && <p>
                                {this.props.text.stringValue}
                            </p>    
                            }
                            {this.renderQuickReplies(this.props.payload)}
                        </div>
                    </div>
                </div>
            </div>}
            />
            </MediaServerRender>
            </div>
        );
    }
}

export default QuickReplies;