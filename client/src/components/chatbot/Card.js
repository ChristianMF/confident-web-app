import React from 'react';

const Card = (props) => {
    return (
        <div style={{ height:270, float: 'left', paddingRight: 30, width: 270}}>
            <div className="card">
                <div className="card-image" style={{width: 240}}>
                    <img alt={props.payload.fields.header.stringValue} src={props.payload.fields.image.stringValue} />
                    <span className="card-title"></span>
                </div>
                <div className="card-content">
                    {props.payload.fields.description.stringValue}
                    {/*<p><a href="/">Teléfono: {props.payload.fields.telephone.stringValue}</a></p>*/}
                </div>
                <div className="card-action">
                <a target="_blank" rel="noopener noreferrer" href={props.payload.fields.link.stringValue}>Link de Página</a>
                </div>
            </div>
        </div>
    );
};

export default Card;