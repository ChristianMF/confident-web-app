import React, { Component } from 'react';
import Header from '../Header';
import BI from '../images/12.png';

import {MediaMatcher, MediaServerRender} from 'react-media-match'

class ContactsDesign extends Component {


    render() {
        return (

            <div>
            <MediaServerRender predicted="desktop" hydrated>
            <MediaMatcher
                mobile=
                {
                <div>
                <div>
                <Header/>
                </div>
                <div style={{float: 'center',  padding: 65, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%'}}>
                    <h1 style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white'}}>Contactos de Ayuda</h1>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instuto Jalisciense de Salud Mental SALME</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://salme.jalisco.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3030-9900</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/53806371_1356743611169292_1909481046064234496_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=sZD8T_A6hggAX_nCXi1&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=dcc7ecbaf39a16e6dab0d97f35fbb95e&oe=5F8CE152" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3857 6773</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/67328366_399746980900033_3439503741571563520_n.png?_nc_cat=107&_nc_sid=85a577&_nc_ohc=R9GUDkdrYGsAX-yru0b&_nc_ht=scontent-qro1-1.xx&oh=76ac494a0b73bcc8449e1d96a886a27f&oe=5F8D50BF" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38182200 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/32072728_10156045343686638_3641895760338878464_o.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=tOlXAbtlrM0AX9aKE3Q&_nc_ht=scontent.fgdl5-2.fna&oh=73f5432e7a5494c52a717626566c9011&oe=5FB39101" }/>,
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 1525-4599</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/17362705_786559851498019_7296100881173248244_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=s20zN6Nil0kAX8u9N5u&_nc_ht=scontent.fgdl5-2.fna&oh=a2f074a34a7f4446e36e78b7d20acfb8&oe=5F8ECB9A" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Desarrollo Integral de la Familia (DIF)</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Sistema DIF Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/difjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3030 3800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/119828919_4366636236740897_5061399266798662408_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=KHJD29FWTFwAX__IEZe&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=5f054bfdf27c180b2b2b6ad776fed7ef&oe=5F8F1BF9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38363444</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/12122799_1656736464572916_833066231219164458_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=_Xoty63PzskAX-mc4nd&_nc_oc=AQkgh49Itq2FMABzA_08KCC6DxiPuXP9I9kfFeRUAVqTqewj3bgVYbZxapmViM9H148&_nc_ht=scontent.fgdl5-2.fna&oh=459f7641d25f10ad189db31d93c331c9&oe=5F8F7D8A" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3848-5023</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/61757025_2038859932889343_7481538970401112064_o.png?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=DrKNLhM32d0AX_JBcDt&_nc_oc=AQkjhN-giIZ5B5oWvYRv1spMZHfsT3QYv3ZODrcddg40_osx-wimOLmgjFZhqAcnJdU&_nc_ht=scontent.fgdl5-2.fna&oh=f578ec6b53051e4a3ee1893db32127ae&oe=5FB0C402" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Salud y Hospitales</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Salud Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludJalisco">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 1422 7805</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/57221401_1358548110953812_12030010122567680_o.png?_nc_cat=108&_nc_sid=85a577&_nc_ohc=v-g8K-rio2gAX98lT4i&_nc_ht=scontent-qro1-1.xx&oh=a7d5446829db8ceb921f55989a05163b&oe=5F8FF4BD" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/67663222_2937888872951201_4230852857428967424_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=5wDOkngOHKoAX-bEcF6&_nc_ht=scontent.fgdl5-2.fna&oh=5fd3c83be404db8a8a82ac455a858b7e&oe=5F8E02B3" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36330929</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t31.0-8/p960x960/26233627_1651034198295530_8322475303711148899_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=-vMtyJjkrgMAX82ba6R&_nc_ht=scontent-qro1-1.xx&tp=6&oh=56f0eadc412d0691bb390779ccfc9d93&oe=5F8E37D6" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36189362</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/51079036_2494417030580687_52834316853444608_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=sd0kdBR6lDoAX8Zl_Mm&_nc_ht=scontent-qro1-1.xx&tp=6&oh=0e6a7d555906b3230536fb5f41f83d0a&oe=5F8E3F06" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3658 3217</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t31.0-8/p960x960/10636898_384011121763352_8756521571506171604_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=BfyOyZXr5pkAX9oRGpS&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=4f1607b9936f7994c401d8411f519df3&oe=5F8DD272" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para la Igualdad de Género</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/IgualdadJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36583170</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/104118451_608750849746066_7678262980631228455_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=BxX3bBx9-PQAX_yeked&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=689acfdbe47e7b9bddb5e2501257d32a&oe=5F8DE7FC" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/72232454_1640290982769179_1121151309395787776_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=OlCQW53ot94AX8N4ksA&_nc_ht=scontent-qro1-1.xx&tp=6&oh=743a2a5ce4bdf16633b327fea0bff65d&oe=5F8F73E9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/62258363_2129120060547707_2824157961687924736_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=AZlAcxz04V4AX9siULL&_nc_ht=scontent-qro1-1.xx&oh=ff86fc47df9fe3bad46800156463f7f5&oe=5F8EE321" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Gobierno</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GobiernoJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3668 1800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/47363150_10156176407872568_8777376237631832064_n.png?_nc_cat=1&_nc_sid=7aed08&_nc_ohc=r1f3Ugpi34UAX9mZjw_&_nc_ht=scontent.fgdl5-2.fna&oh=fcc142185ef6b969371c3dfba14173a4&oe=5F905E30" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/36889546_10156199998925090_6410579305956376576_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=9gdLIetgqb0AX_LMxTa&_nc_oc=AQkdael3q_Sg9SYXkH6K9zbyWp8Qjwjj4ag6-qNVvda6OQOA3_cDjd_njBL33nrK63U&_nc_ht=scontent.fgdl5-2.fna&oh=c653a109e0db90a9f9c1d3610e9795ea&oe=5F8FDA64" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38374400</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/42950874_2198457663532018_5746905454546518016_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=XKlHNd5Fk5cAX8S8w9u&_nc_ht=scontent.fgdl5-2.fna&oh=b26efd71e9938dc89ddf93f0cabcb166&oe=5F8D8532" }/>
                    </div>
                    </div>
                    
                    

                </div>
                </div>}
                
                tablet=
                {
                <div>
                <div>
                <Header/>
                </div>
                <div style={{float: 'center',  padding: 65, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%'}}>
                    <h1 style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white'}}>Contactos de Ayuda</h1>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instuto Jalisciense de Salud Mental SALME</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://salme.jalisco.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3030-9900</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/53806371_1356743611169292_1909481046064234496_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=sZD8T_A6hggAX_nCXi1&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=dcc7ecbaf39a16e6dab0d97f35fbb95e&oe=5F8CE152" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3857 6773</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/67328366_399746980900033_3439503741571563520_n.png?_nc_cat=107&_nc_sid=85a577&_nc_ohc=R9GUDkdrYGsAX-yru0b&_nc_ht=scontent-qro1-1.xx&oh=76ac494a0b73bcc8449e1d96a886a27f&oe=5F8D50BF" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38182200 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/32072728_10156045343686638_3641895760338878464_o.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=tOlXAbtlrM0AX9aKE3Q&_nc_ht=scontent.fgdl5-2.fna&oh=73f5432e7a5494c52a717626566c9011&oe=5FB39101" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 1525-4599</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/17362705_786559851498019_7296100881173248244_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=s20zN6Nil0kAX8u9N5u&_nc_ht=scontent.fgdl5-2.fna&oh=a2f074a34a7f4446e36e78b7d20acfb8&oe=5F8ECB9A" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Desarrollo Integral de la Familia (DIF)</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Sistema DIF Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/difjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3030 3800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/119828919_4366636236740897_5061399266798662408_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=KHJD29FWTFwAX__IEZe&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=5f054bfdf27c180b2b2b6ad776fed7ef&oe=5F8F1BF9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38363444</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/12122799_1656736464572916_833066231219164458_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=_Xoty63PzskAX-mc4nd&_nc_oc=AQkgh49Itq2FMABzA_08KCC6DxiPuXP9I9kfFeRUAVqTqewj3bgVYbZxapmViM9H148&_nc_ht=scontent.fgdl5-2.fna&oh=459f7641d25f10ad189db31d93c331c9&oe=5F8F7D8A" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3848-5023</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/61757025_2038859932889343_7481538970401112064_o.png?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=DrKNLhM32d0AX_JBcDt&_nc_oc=AQkjhN-giIZ5B5oWvYRv1spMZHfsT3QYv3ZODrcddg40_osx-wimOLmgjFZhqAcnJdU&_nc_ht=scontent.fgdl5-2.fna&oh=f578ec6b53051e4a3ee1893db32127ae&oe=5FB0C402" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Salud y Hospitales</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Salud Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludJalisco">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 1422 7805</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/57221401_1358548110953812_12030010122567680_o.png?_nc_cat=108&_nc_sid=85a577&_nc_ohc=v-g8K-rio2gAX98lT4i&_nc_ht=scontent-qro1-1.xx&oh=a7d5446829db8ceb921f55989a05163b&oe=5F8FF4BD" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/67663222_2937888872951201_4230852857428967424_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=5wDOkngOHKoAX-bEcF6&_nc_ht=scontent.fgdl5-2.fna&oh=5fd3c83be404db8a8a82ac455a858b7e&oe=5F8E02B3" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36330929</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t31.0-8/p960x960/26233627_1651034198295530_8322475303711148899_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=-vMtyJjkrgMAX82ba6R&_nc_ht=scontent-qro1-1.xx&tp=6&oh=56f0eadc412d0691bb390779ccfc9d93&oe=5F8E37D6" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36189362</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/51079036_2494417030580687_52834316853444608_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=sd0kdBR6lDoAX8Zl_Mm&_nc_ht=scontent-qro1-1.xx&tp=6&oh=0e6a7d555906b3230536fb5f41f83d0a&oe=5F8E3F06" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3658 3217</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t31.0-8/p960x960/10636898_384011121763352_8756521571506171604_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=BfyOyZXr5pkAX9oRGpS&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=4f1607b9936f7994c401d8411f519df3&oe=5F8DD272" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para la Igualdad de Género</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/IgualdadJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36583170</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/104118451_608750849746066_7678262980631228455_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=BxX3bBx9-PQAX_yeked&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=689acfdbe47e7b9bddb5e2501257d32a&oe=5F8DE7FC" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/72232454_1640290982769179_1121151309395787776_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=OlCQW53ot94AX8N4ksA&_nc_ht=scontent-qro1-1.xx&tp=6&oh=743a2a5ce4bdf16633b327fea0bff65d&oe=5F8F73E9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/62258363_2129120060547707_2824157961687924736_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=AZlAcxz04V4AX9siULL&_nc_ht=scontent-qro1-1.xx&oh=ff86fc47df9fe3bad46800156463f7f5&oe=5F8EE321" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Gobierno</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GobiernoJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3668 1800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/47363150_10156176407872568_8777376237631832064_n.png?_nc_cat=1&_nc_sid=7aed08&_nc_ohc=r1f3Ugpi34UAX9mZjw_&_nc_ht=scontent.fgdl5-2.fna&oh=fcc142185ef6b969371c3dfba14173a4&oe=5F905E30" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/36889546_10156199998925090_6410579305956376576_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=9gdLIetgqb0AX_LMxTa&_nc_oc=AQkdael3q_Sg9SYXkH6K9zbyWp8Qjwjj4ag6-qNVvda6OQOA3_cDjd_njBL33nrK63U&_nc_ht=scontent.fgdl5-2.fna&oh=c653a109e0db90a9f9c1d3610e9795ea&oe=5F8FDA64" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38374400</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/42950874_2198457663532018_5746905454546518016_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=XKlHNd5Fk5cAX8S8w9u&_nc_ht=scontent.fgdl5-2.fna&oh=b26efd71e9938dc89ddf93f0cabcb166&oe=5F8D8532" }/>
                    </div>
                    </div>
                    
                    

                </div>
                </div>}

                desktop=
                {
                <div>
                <div>
                <Header/>
                </div>
                <div style={{float: 'center',  padding: 65, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%'}}>
                    <h1 style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.05em white'}}>Contactos de Ayuda</h1>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para tratar problemas para la juventud y la salud mental</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instuto Jalisciense de Salud Mental SALME</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://salme.jalisco.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3030-9900</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/53806371_1356743611169292_1909481046064234496_o.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=sZD8T_A6hggAX_nCXi1&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=dcc7ecbaf39a16e6dab0d97f35fbb95e&oe=5F8CE152" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3857 6773</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/67328366_399746980900033_3439503741571563520_n.png?_nc_cat=107&_nc_sid=85a577&_nc_ohc=R9GUDkdrYGsAX-yru0b&_nc_ht=scontent-qro1-1.xx&oh=76ac494a0b73bcc8449e1d96a886a27f&oe=5F8D50BF" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38182200 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/32072728_10156045343686638_3641895760338878464_o.png?_nc_cat=103&_nc_sid=09cbfe&_nc_ohc=tOlXAbtlrM0AX9aKE3Q&_nc_ht=scontent.fgdl5-2.fna&oh=73f5432e7a5494c52a717626566c9011&oe=5FB39101" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 1525-4599</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/17362705_786559851498019_7296100881173248244_n.jpg?_nc_cat=106&_nc_sid=85a577&_nc_ohc=s20zN6Nil0kAX8u9N5u&_nc_ht=scontent.fgdl5-2.fna&oh=a2f074a34a7f4446e36e78b7d20acfb8&oe=5F8ECB9A" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Desarrollo Integral de la Familia (DIF)</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Sistema DIF Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/difjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3030 3800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/119828919_4366636236740897_5061399266798662408_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=KHJD29FWTFwAX__IEZe&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=5f054bfdf27c180b2b2b6ad776fed7ef&oe=5F8F1BF9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38363444</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/12122799_1656736464572916_833066231219164458_n.jpg?_nc_cat=101&_nc_sid=7aed08&_nc_ohc=_Xoty63PzskAX-mc4nd&_nc_oc=AQkgh49Itq2FMABzA_08KCC6DxiPuXP9I9kfFeRUAVqTqewj3bgVYbZxapmViM9H148&_nc_ht=scontent.fgdl5-2.fna&oh=459f7641d25f10ad189db31d93c331c9&oe=5F8F7D8A" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3848-5023</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/61757025_2038859932889343_7481538970401112064_o.png?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=DrKNLhM32d0AX_JBcDt&_nc_oc=AQkjhN-giIZ5B5oWvYRv1spMZHfsT3QYv3ZODrcddg40_osx-wimOLmgjFZhqAcnJdU&_nc_ht=scontent.fgdl5-2.fna&oh=f578ec6b53051e4a3ee1893db32127ae&oe=5FB0C402" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Salud y Hospitales</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Salud Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludJalisco">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 1422 7805</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/57221401_1358548110953812_12030010122567680_o.png?_nc_cat=108&_nc_sid=85a577&_nc_ohc=v-g8K-rio2gAX98lT4i&_nc_ht=scontent-qro1-1.xx&oh=a7d5446829db8ceb921f55989a05163b&oe=5F8FF4BD" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/67663222_2937888872951201_4230852857428967424_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=5wDOkngOHKoAX-bEcF6&_nc_ht=scontent.fgdl5-2.fna&oh=5fd3c83be404db8a8a82ac455a858b7e&oe=5F8E02B3" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36330929</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t31.0-8/p960x960/26233627_1651034198295530_8322475303711148899_o.jpg?_nc_cat=109&_nc_sid=7aed08&_nc_ohc=-vMtyJjkrgMAX82ba6R&_nc_ht=scontent-qro1-1.xx&tp=6&oh=56f0eadc412d0691bb390779ccfc9d93&oe=5F8E37D6" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36189362</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/51079036_2494417030580687_52834316853444608_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_ohc=sd0kdBR6lDoAX8Zl_Mm&_nc_ht=scontent-qro1-1.xx&tp=6&oh=0e6a7d555906b3230536fb5f41f83d0a&oe=5F8E3F06" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3658 3217</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t31.0-8/p960x960/10636898_384011121763352_8756521571506171604_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_ohc=BfyOyZXr5pkAX9oRGpS&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=4f1607b9936f7994c401d8411f519df3&oe=5F8DD272" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para la Igualdad de Género</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/IgualdadJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36583170</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/104118451_608750849746066_7678262980631228455_o.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=BxX3bBx9-PQAX_yeked&_nc_ht=scontent.fgdl5-2.fna&tp=6&oh=689acfdbe47e7b9bddb5e2501257d32a&oe=5F8DE7FC" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/p960x960/72232454_1640290982769179_1121151309395787776_o.jpg?_nc_cat=104&_nc_sid=7aed08&_nc_ohc=OlCQW53ot94AX8N4ksA&_nc_ht=scontent-qro1-1.xx&tp=6&oh=743a2a5ce4bdf16633b327fea0bff65d&oe=5F8F73E9" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent-qro1-1.xx.fbcdn.net/v/t1.0-9/62258363_2129120060547707_2824157961687924736_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=AZlAcxz04V4AX9siULL&_nc_ht=scontent-qro1-1.xx&oh=ff86fc47df9fe3bad46800156463f7f5&oe=5F8EE321" }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Gobierno</h4>

                    <div style={{display: 'flex', justifyContent: 'center', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GobiernoJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3668 1800</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/47363150_10156176407872568_8777376237631832064_n.png?_nc_cat=1&_nc_sid=7aed08&_nc_ohc=r1f3Ugpi34UAX9mZjw_&_nc_ht=scontent.fgdl5-2.fna&oh=fcc142185ef6b969371c3dfba14173a4&oe=5F905E30" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/36889546_10156199998925090_6410579305956376576_n.png?_nc_cat=103&_nc_sid=85a577&_nc_ohc=9gdLIetgqb0AX_LMxTa&_nc_oc=AQkdael3q_Sg9SYXkH6K9zbyWp8Qjwjj4ag6-qNVvda6OQOA3_cDjd_njBL33nrK63U&_nc_ht=scontent.fgdl5-2.fna&oh=c653a109e0db90a9f9c1d3610e9795ea&oe=5F8FDA64" }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38374400</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={"https://scontent.fgdl5-2.fna.fbcdn.net/v/t1.0-9/p960x960/42950874_2198457663532018_5746905454546518016_o.png?_nc_cat=102&_nc_sid=85a577&_nc_ohc=XKlHNd5Fk5cAX8S8w9u&_nc_ht=scontent.fgdl5-2.fna&oh=b26efd71e9938dc89ddf93f0cabcb166&oe=5F8D8532" }/>
                    </div>
                    </div>
                    
                    

                </div>
                </div>}
            />
            </MediaServerRender>
            </div>

        )
    }
}

export default ContactsDesign;