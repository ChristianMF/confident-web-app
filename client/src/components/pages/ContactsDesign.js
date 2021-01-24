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
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 30 30 99 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SAL.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 57 67 73</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/JJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 18 22 00 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IJZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 15 25 45 99</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IMAJ.jpg') }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Desarrollo Integral de la Familia (DIF)</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Sistema DIF Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/difjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3030 38 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DJ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 36 34 44</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 48 50 23</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DG.png') }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Salud y Hospitales</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Salud Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludJalisco">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 14 22 78 05</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SSJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HC.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 36 33 09 29</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 36 18 93 62</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 36 58 32 17</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Instituciones para la Igualdad de Género</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Secretaría de Igualdad Sustantiva entre Mujeres y Hombres</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/IgualdadJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 36 58 31 70</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SI.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 18 22 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/MZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/ME.jpg') }/>
                    </div>
                    </div>

                    <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.3em royalblue'}}>Gobierno</h4>

                    <div style={{display: 'flex', justifyContent: 'left', overflowX: 'scroll'}}>
                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GobiernoJalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 36 68 18 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 18 22 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 38 37 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GG.png') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SAL.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3857 6773</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/JJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38182200 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IJZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 1525-4599</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IMAJ.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DJ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38363444</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3848-5023</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DG.png') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SSJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HC.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36330929</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36189362</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3658 3217</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SI.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/MZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/ME.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38374400</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GG.png') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SAL.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Juventudes Jalisco</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudesjalisco/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3857 6773</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/JJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto de la Juventud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/juventudzapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38182200 ext. 3819</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IJZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Instituto Municipal de Atención a la Juventud de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.imajguadalajara.gob.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 1525-4599</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/IMAJ.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DJ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.zapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38363444</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>DIF Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/dif.guadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 3848-5023</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/DG.png') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SSJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital Civil de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="http://www.hcg.udg.mx/">Página Web</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: (33) 38 83 44 00</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HC.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Salud Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/SaludZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36330929</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SZ.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Hospital civil "Dr Juan I Menchaca"</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/NHCGJIM/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 36189362</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Antiguo Hospital Civil de Guadalajara "Fray Antonio Alcalde"</p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/AntiguoHospitalCivildeGuadalajara/">Página de Facebook</a></p>
                        <p style={{padding: 2, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3658 3217</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/HCG.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/SI.jpg') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>InMujeres Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/InMujeresZapopan/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/MZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Mujeres Empoderadas A.C.</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/mujeresempoderadasac/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}></p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/ME.jpg') }/>
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
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GJ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Zapopan</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/ZapopanGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 33 3818 2200</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GZ.png') }/>
                    </div>

                    <div style={{display:'inline-block', width: 200, height: 250, position: 'relative', flexDirection: 'row', margin: 4,}}>
                    <div style={{flex: 1, width: 200, height: 100, bottom:0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.45)', alignSelf: 'flex-end', borderBottomLeftRadius:30, borderBottomRightRadius:30}}>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}>Gobierno de Guadalajara</p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 12}}><a target='_blank' href="https://www.facebook.com/GuadalajaraGob/">Página de Facebook</a></p>
                        <p style={{padding: 6, flexShrink: 1, marginBottom: 'auto', marginTop: 'auto', color: 'white', fontWeight: 'bold', textShadow: '0 0 0.2em black', textAlign: 'center', fontSize: 10}}>Tel: 38374400</p>
                    </div>
                    <img style={{width: 200, height: 250, borderRadius:30, borderColor: 'black', borderWidth: 4}} src={ require('../images/contactsImages/GG.png') }/>
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