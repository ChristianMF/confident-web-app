import React, { Component } from 'react';
import axios from 'axios/index';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';

import Message from './Message';
import Card from './Card';
import CardOption from './CardOption';
import QuickReplies from './QuickReplies';

import {MediaMatcher, MediaServerRender} from 'react-media-match'

const cookies = new Cookies();
global.sessionId = ""

class Chatbot extends Component {
    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);

        this._handleInputKeyPress = this._handleInputKeyPress.bind(this);
        this._handleQuickReplyPayload = this._handleQuickReplyPayload.bind(this);
        this.state = {
            messages: []
        };
        
        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), {path: "/"});
        } 
        console.log(cookies.get('userID'));
        global.sessionId=cookies.get('userID')
    }

    async df_text_query(text) {
        let says = {
            speaks: 'user',
            msg: {
                text: {
                    text: text
                }
            }
        };

        this.setState({messages: [...this.state.messages, says]});
        try{
            const res = await axios.post('/api/df_text_query', {text, userID: cookies.get('userID')});

            for (let msg of res.data.fulfillmentMessages) {
                
                if (text==='¿Realmente quieres trabajar ahí? Sí' || text==='¿Qué preferirías? Trabajar' || text==='¿Realmente quieres trabajar ahí? No' || text==='¿Planeas estudiar la universidad? No' || text==='¿Ya sabes lo que quieres estudiar? No' || text==='¿Qué estudiarás? Ciencias sociales o Humanidades/Artes' || text==='¿Qué estudiarás? Ciencias exactas o Ingeniería' || text==='¿Qué estudiarás? Ciencias Económico Administrativas' || text==='¿Qué estudiarás? Ciencias de la salud' || text==='¿Qué estudiarás? No sé' || text==='¿Qué preferirías? Estudiar' || text==='¿Qué te gustaría saber sobre sexo? Faje' || text==='¿De qué te gustaría hablar en temas de sexo? Métodos anticonceptivos' || text==='¿De qué te gustaría hablar en temas de sexo? Enfermedades de transmisión sexual' || text==='¿Qué te gustaría saber sobre sexo? Indecision' || text==='¿Qué te gustaría saber sobre sexo? Sexo no consentido' || text==='¿Cuál es tu duda sobre el embarazo? ¿Cómo se puede quedar embarazada?' || text==='¿Cuál es tu duda sobre el embarazo? Síntomas' || text==='¿Cuál es tu duda sobre el embarazo? ¿Qué hacer si sospecho que lo estoy?' || text==='¿Cuál es tu duda sobre el embarazo? ¿A quién puedo acudir?' || text==='¿Cuál es tu duda sobre el embarazo? Opciones si estoy embarazada' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Qué es?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? ¿Cuantos y cuáles tipos hay?' || text==='¿Qué te gustaría conocer sobre este tema de orientación? He sufrido discriminación' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué son y cuáles son?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? ¿Qué hacer si tengo alguno?' || text==='¿Qué te gustaría saber sobre conflictos con la ley? Información de donde acudir') {
                await this.resolveAfterXSeconds(1);

                let says = {
                    speaks: 'bot',
                    msg: msg
                }
                
                this.setState({messages: [...this.state.messages, says]});}
                else{
                    let says = {
                        speaks: 'bot',
                        msg: msg
                    }
                    
                    this.setState({messages: [...this.state.messages, says]});
                }

            }
        } catch (e) {
            says = {
                speaks: 'bot',
                msg: {
                    text: {
                        text: "Estoy teniendo problemas. Espera unos instantes, enseguida vuelvo :)"
                    }
                }
            }
            this.setState({messages: [...this.state.messages, says]});
        }
    };

    async df_event_query(event) {
        try {
            const res = await axios.post('/api/df_event_query', {event, userID: cookies.get('userID')});
            
            for (let msg of res.data.fulfillmentMessages) {
                
                        let says = {
                            speaks: 'bot',
                            msg: msg
                        }
                        
                        this.setState({messages: [...this.state.messages, says]});

            }
        } catch (e) {
            let says = {
                speaks: 'bot',
                msg: {
                    text: {
                        text: "Estoy teniendo problemas. Espera unos instantes, enseguida vuelvo :)"
                    }
                }
            }
            this.setState({messages: [...this.state.messages, says]});
        }
    };

    resolveAfterXSeconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, x * 1000);
        });
    }

    componentDidMount() {
        this.df_event_query('First');

        //Use it when want to clean up the cookies while refreshing the page.
        /*window.addEventListener(
            "beforeunload",
            cookies.remove('userID'),
            cookies.set('userID', uuid(), {path: "/"}),
            global.sessionId=cookies.get('userID')
        );*/
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({behaviour: "smooth"});
        if ( this.talkInput ) {
            this.talkInput.focus();
        }
    }

    _handleQuickReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        //When a quick reply is selected, it could start an event. Events are set here.
        switch(payload) {
            case 'Aceptar_terminos_si':                
                this.df_text_query(text);
                break;
            case 'Aceptar_terminos_no':
                this.df_text_query(text);
                break;
            case 'Hablar_si':
                this.df_text_query(text);
                break;
            case 'Event123':
                this.df_text_query(text);
                break;
            case 'Futuro':
                this.df_text_query(text);
                break;
            case 'Sexualidad':
                this.df_text_query(text);
                break;
            case 'Conflicto_ley':
                this.df_text_query(text);
                break;
            case 'Fallback_si':
                this.df_text_query(text);
                break;
            case 'Proporcionar_datos_no':
                this.df_text_query(text);
                break;
            case 'Trabajando':
                this.df_text_query(text);
                break;
            case 'Estudiando':
                this.df_text_query(text);
                break;
            case 'Otro_futuro':
                this.df_text_query(text);
                break;
            case 'No_se_futuro':
                this.df_text_query(text);
                break;
            case 'Event345':
                this.df_text_query(text);
                break;
            case 'Trabajando_1':
                this.df_text_query(text);
                break;
            case 'Trabajando_2':
                this.df_text_query(text);
                break;
            case 'Event326':
                this.df_text_query(text);
                break;
            case 'Realmente_no':
                this.df_text_query(text);
                break;
            case 'Sirvio_si':
                this.df_text_query(text);
                break;
            case 'Sirvio_no':
                this.df_text_query(text);
                break;
            case 'Estudiando_secundaria':
                this.df_text_query(text);
                break;
            case 'Estudiando_preparatoria':
                this.df_text_query(text);
                break;
            case 'Event336':
                this.df_text_query(text);
                break;
            case 'Universidad_si':
                this.df_text_query(text);
                break;
            case 'Event339':
                this.df_text_query(text);
                break;
            case 'Estudiar_si':
                this.df_text_query(text);
                break;
            case 'Otro_futuro05':
                this.df_text_query(text);
                break;
            case 'Otro_futuro1':
                this.df_text_query(text);
                break;
            case 'No_se_futuro1':
                this.df_text_query(text);
                break;
            case 'Sexo':
                this.df_text_query(text);
                break;
            case 'Embarazo':
                this.df_text_query(text);
                break;
            case 'Orientacion_sexual':
                this.df_text_query(text);
                break;
            case 'Sexo1':
                this.df_text_query(text);
                break;
            case 'Sexo2':
                this.df_text_query(text);
                break;
            case 'Sexo3':
                this.df_text_query(text);
                break;
            case 'Sexo4':
                this.df_text_query(text);
                break;
            case 'Coito1':
                this.df_text_query(text);
                break;
            case 'Coito2':
                this.df_text_query(text);
                break;
            case 'Embarazo1':
                this.df_text_query(text);
                break;
            case 'Embarazo2':
                this.df_text_query(text);
                break;
            case 'Embarazo3':
                this.df_text_query(text);
                break;
            case 'Embarazo4':
                this.df_text_query(text);
                break;
            case 'Embarazo5':
                this.df_text_query(text);
                break;
            case 'Orientacion1':
                this.df_text_query(text);
                break;
            case 'Orientacion2':
                this.df_text_query(text);
                break;
            case 'Orientacion3':
                this.df_text_query(text);
                break;
            case 'Definicion':
                this.df_text_query(text);
                break;
            case 'Que_hacer':
                this.df_text_query(text);
                break;
            case 'Informacion':
                this.df_text_query(text);
                break;
            default:
                this.df_text_query(text);
        }
    }

    renderCards(cards) {
        return cards.map((card, i) => <Card key={i} payload={card.structValue}/>);
    }

    renderCardsOption(cards) {
        return cards.map((card, i) => <CardOption key={i} payload={card.structValue}/>);
    }

    renderOneMessage(message, i) {
        if (message.msg && message.msg.text && message.msg.text.text){
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text} />;
        } else if (message.msg && message.msg.payload.fields.texts) {
            return <Message key={i} speaks={message.speaks} text={message.msg.payload.fields.texts.stringValue} />;
        } else if (message.msg && message.msg.payload.fields.cards){ //message.msg.payload && message.msg.payload.fields
            return <div key={i}>
                <div className="card-panel white lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        {/*<div className="col s2">
                            <a className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>
                        </div>*/}
                        <div style={{overflow: 'auto', overflowY: 'scroll'}}>
                            <div style={{height: 400, width: message.msg.payload.fields.cards.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.cards.listValue.values)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (message.msg && message.msg.payload.fields.cards_option){ //message.msg.payload && message.msg.payload.fields
            return <div key={i}>
                <div className="card-panel white lighten-5 z-depth-1">
                    <div style={{overflow: 'hidden'}}>
                        {/*<div className="col s2">
                            <a className="btn-floating btn-large waves-effect waves-light red">{message.speaks}</a>
                        </div>*/}
                        <div style={{overflow: 'auto', overflowY: 'scroll'}}>
                            <div style={{height: 400, width: message.msg.payload.fields.cards_option.listValue.values.length * 270}}>
                                {this.renderCardsOption(message.msg.payload.fields.cards_option.listValue.values)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        } else if (message.msg &&
            message.msg.payload &&
            message.msg.payload.fields &&
            message.msg.payload.fields.quick_replies
        ) {
            return <QuickReplies
                text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
                key={i}
                replyClick={this._handleQuickReplyPayload}
                speaks={message.speaks}
                payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
        }
    }
 
    renderMessages(stateMessages) {
        if (stateMessages) {
            return stateMessages.map((message, i) => {
                return this.renderOneMessage(message, i);
            });
        } else {
            return null;
        }
    }

    _handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }  

    render() {
        return (

            <div>
            <MediaServerRender predicted="desktop" hydrated>
            <MediaMatcher
                mobile=
                {<div style={{float: 'center'}}>
                <div id="chatbot" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '10%', height:600, width: '100%', overflow: 'auto'}}>
                    {this.renderMessages(this.state.messages)}
                    <div  ref={(el) => {this.messagesEnd = el;}}

                        style={{float: 'left', clear: "both"}}>
                    </div>
                </div>
                <div className="col s12" style={{margin: 0, paddingLeft: '5%', paddingRight: '5%', backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                    <input style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%', color:'white'}} placeholder="Escribe..." type="text" ref={(input) => {this.talkInput = input; }} onKeyPress={this._handleInputKeyPress} autoFocus />
                </div>
                </div>} 

                desktop=
                {<div style={{float: 'center'}}>
                <div id="chatbot" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '10%', height:'100%', width: '100%', overflow: 'auto'}}>
                    {this.renderMessages(this.state.messages)}
                    <div  ref={(el) => {this.messagesEnd = el;}}

                        style={{float: 'left', clear: "both"}}>
                    </div>
                </div>
                <div className="col s12" style={{margin: 0, paddingLeft: '5%', paddingRight: '5%', backgroundColor:'rgba(0, 0, 0, 0.3)'}}>
                    <input style={{margin: 0, paddingLeft: '1%', paddingRight: '1%', width: '98%', color:'white'}} placeholder="Escribe..." type="text" ref={(input) => {this.talkInput = input; }} onKeyPress={this._handleInputKeyPress} autoFocus />
                </div>
                </div>}

                />
                </MediaServerRender>
                 </div>


            
        )
    }
}

export default Chatbot;