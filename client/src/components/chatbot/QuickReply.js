import React from 'react';

const QuickReply = (props) => {
    if (props.reply.structValue.fields.payload) {
        return (
            <button style={{margin: 5, padding: 10, fontSize: 25, fontWeight: '200', borderWidth:0 ,backgroundColor:'OrangeRed', borderRadius:12, color:'white', boxShadow: '1px 1px 5px black'}} href="/"
            onClick={(event) =>
                props.click(
                    event,
                    props.reply.structValue.fields.payload.stringValue,
                    props.reply.structValue.fields.text.stringValue
                )
            }>
                {props.reply.structValue.fields.option.stringValue}
            </button>
        );
    } else {
        return (
            <a style={{margin: 3}} target="_blank" href={props.reply.structValue.fields.link.stringValue}
                className="waves-effect waves-light btn">
                {props.reply.structValue.fields.text.stringValue}
            </a>
        );
    }
};

export default QuickReply;