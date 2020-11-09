import React, { Component } from 'react';
import Header from '../Header';
import BI from '../images/6.jpg';
import firebaseSvc from '../dataBaseLogic/FirebaseSvc';



class PrivacyPolicyDesign extends Component {

    onSend1() {
        let user = {
          _id: global.sessionId
        };
        let messages = [
          {
            _id: global.sessionId,
            text: 'Análisis de lenguaje para poder seguir actualizando el chatbot',
            createdAt: new Date(),
            user: user
          }
        ];
        firebaseSvc.send(messages);
        alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!');
      }
  
      onSend2() {
        let user = {
          _id: global.sessionId
        };
        let messages = [
          {
            _id: global.sessionId,
            text: 'Análisis de sentimientos para la realización de estudios e investigaciones científicas',
            createdAt: new Date(),
            user: user
          }
        ];
        firebaseSvc.send(messages);
        alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!')
      }
  
      onSend3() {
        let user = {
          _id: global.sessionId
        };
        let messages = [
          {
            _id: global.sessionId,
            text: 'Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas',
            createdAt: new Date(),
            user: user
          }
        ];
        firebaseSvc.send(messages);
        alert('Se ha enviado tu solicitud. Cualquier duda contactar directamente con: botconfident@gmail.com ¡Gracias!')
      }
  
    render() {
        return (
            <div>
            <div>
            <Header/>
            </div>
            <div style={{float: 'center',  padding: 65, backgroundImage:`url(${BI})`, backgroundRepeat: 'no-repet', backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundSize: '100%'}}>
                <h1 style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.1em yellow'}}>Aviso de Privacidad</h1>
                
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Chatbot CONFIDENT, mejor conocido como CONFIDENT, con domicilio en calle Periférico Norte N° 799., colonia Núcleo Universitario Los Belenes, ciudad Zapopan, municipio o delegación Zapopan, c.p. 45100, en la entidad de Jalisco, país México, es el responsable del uso y protección de sus datos personales, y al respecto le informamos lo siguiente:</p>
                
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>¿Para qué fines utilizaremos sus datos personales?</h4>

                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias que no son necesarias para el servicio solicitado, pero que nos permiten y facilitan brindarle una mejor atención:</p>
                
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Análisis de lenguaje para poder seguir actualizando el chatbot</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Análisis de sentimientos para la realización de estudios e investigaciones científicas</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</p>

                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>En caso de que no desee que sus datos personales se utilicen para estos fines secundarios, indíquelo a continuación (presiona sobre la opción):</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>No consiento que mis datos personales se utilicen para los siguientes fines:</p>
                
                <div style={{textAlign: 'center'}}>
                <button type="button" onClick={this.onSend1} style={{position: 'relative', width: '80%', padding: 2, borderWidth: 3, borderColor:'gold', backgroundColor:'transparent', borderRadius:15, marginTop: 5}}><p style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.1em white', fontSize: 12}}>Análisis de lenguaje para poder seguir actualizando el chatbot</p></button>
                <button type="button" onClick={this.onSend2} style={{position: 'relative', width: '80%', padding: 2, borderWidth: 3, borderColor:'gold', backgroundColor:'transparent', borderRadius:15, marginTop: 15}}><p style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.1em white', fontSize: 12}}>Análisis de sentimientos para la realización de estudios e investigaciones científicas</p></button>
                <button type="button" onClick={this.onSend3} style={{position: 'relative', width: '80%', padding: 2, borderWidth: 3, borderColor:'gold', backgroundColor:'transparent', borderRadius:15, marginTop: 15}}><p style={{color: 'white', textAlign: 'center', textShadow: '0 0 0.1em white', fontSize: 12}}>Recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</p></button>
                </div>

                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>La negativa para el uso de sus datos personales para estas finalidades no podrá ser un motivo para que le neguemos los servicios y productos que solicita o contrata con nosotros.</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>¿Qué datos personales utilizaremos para estos fines?</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Edad</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Género</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Ubicación</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Además de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de privacidad utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial protección:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Ubicación</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>¿Cómo puede acceder, rectificar o cancelar sus datos personales, u oponerse a su uso?</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición). Estos derechos se conocen como derechos ARCO.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Para el ejercicio de cualquiera de los derechos ARCO, usted deberá presentar la solicitud respectiva a través del siguiente medio:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Por medio del correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Con relación al procedimiento y requisitos para el ejercicio de sus derechos ARCO, le informamos lo siguiente:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?{"\n"}Contacto por correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>b) ¿Qué información y/o documentación deberá contener la solicitud?{"\n"}Nombre, edad, género, úbicación, fecha(s) de utilización del servicio y correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>c) ¿En cuántos días le daremos respuesta a su solicitud?{"\n"}En un máximo de 7 días hábiles</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?{"\n"}Correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>e) ¿En qué medios se pueden reproducir los datos personales que, en su caso, solicite?{"\n"}Correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Los datos de contacto de la persona o departamento de datos personales, que está a cargo de dar trámite a las solicitudes de derechos ARCO, son los siguientes:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>a) Nombre de la persona o departamento de datos personales: CONFIDENT</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>b) Domicilio: calle Periférico Norte N° 799, colonia Núcleo Universitario Los Belenes, ciudad ZAPOPAN, municipio o delegación ZAPOPAN, c.p. 45100, en la entidad de JALISCO, país MÉXICO</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>c) Correo electrónico: botconfident@gmail.com</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>Usted puede revocar su consentimiento para el uso de sus datos personales</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Usted puede revocar el consentimiento que, en su caso, nos haya otorgado para el tratamiento de sus datos personales. Sin embargo, es importante que tenga en cuenta que no en todos los casos podremos atender su solicitud o concluir el uso de forma inmediata, ya que es posible que por alguna obligación legal requiramos seguir tratando sus datos personales. Asimismo, usted deberá considerar que para ciertos fines, la revocación de su consentimiento implicará que no le podamos seguir prestando el servicio que nos solicitó, o la conclusión de su relación con nosotros.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Para revocar su consentimiento deberá presentar su solicitud a través del siguiente medio:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Contacto en correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Con relación al procedimiento y requisitos para la revocación de su consentimiento, le informamos lo siguiente:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>a) ¿A través de qué medios pueden acreditar su identidad el titular y, en su caso, su representante, así como la personalidad este último?{"\n"}Correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>b) ¿Qué información y/o documentación deberá contener la solicitud?{"\n"}Nombre, edad, género, úbicación, fecha(s) de utilización del servicio y correo electrónico</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>c) ¿En cuántos días le daremos respuesta a su solicitud?{"\n"}Un máximo de 7 dias hábiles</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>d) ¿Por qué medio le comunicaremos la respuesta a su solicitud?{"\n"}Correo electrónico</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>¿Cómo puede limitar el uso o divulgación de su información personal?</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Con objeto de que usted pueda limitar el uso y divulgación de su información personal, le ofrecemos los siguientes medios:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Por medio del correo electrónico</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>El uso de tecnologías de rastreo en nuestro portal de internet</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Le informamos que en nuestra página de internet utilizamos cookies, web beacons u otras tecnologías, a través de las cuales es posible monitorear su comportamiento como usuario de internet, así como brindarle un mejor servicio y experiencia al navegar en nuestra página. Los datos personales que recabamos a través de estas tecnologías, los utilizaremos para los siguientes fines:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Análisis de lenguaje para poder seguir actualizando el chatbot</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Análisis de sentimientos para la realización de estudios e investigaciones científicas</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Para recopilación de respuestas, opciones elegidas y palabras vertidas al chat para generar reportes estadísticos y propuestas a políticas públicas</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Los datos personales que obtenemos de estas tecnologías de rastreo son los siguientes:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Asignación de un id a cada usuario</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Búsquedas realizadas por un usuario</p>
                <h4 style={{color: 'white', textAlign: 'center', paddingTop: 20, textShadow: '0 0 0.2em white'}}>¿Cómo puede conocer los cambios en este aviso de privacidad?</h4>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales; de nuestras propias necesidades por los productos o servicios que ofrecemos; de nuestras prácticas de privacidad; de cambios en nuestro modelo de negocio, o por otras causas.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir el presente aviso de privacidad, a través de: La misma plataforma.</p>
                <p style={{color: 'white', textAlign: 'justify', paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>El procedimiento a través del cual se llevarán a cabo las notificaciones sobre cambios o actualizaciones al presente aviso de privacidad es el siguiente:</p>
                <p style={{color: 'white', textAlign: 'justify', paddingLeft:50, paddingTop: 10, fontSize:18, textShadow: '0 0 0.1em white'}}>{'\u2B50'} Se publicarán las modificaciones en el apartado de aviso de privacidad de la plataforma</p>
                <p style={{color: 'white', textAlign: 'right', paddingTop: 20, fontSize:14, textShadow: '0 0 0.1em white'}}>Última actualización: 12/10/2020</p>

            </div>
            </div>
        )
    }
}

export default PrivacyPolicyDesign;