import { Alert } from 'react-native';
import Alert from 'react-bootstrap/Alert';

//ALERTS PARA APP MOVIL
//LOS PARAMETROS QUE RECIBEN SON:
//title:    TEXTO QUE SALDRA EN EL TITULO DEL ALERT
//message:  MENSAJE QUE SE VA A MOSTRAR EN EL ALERT
export const alertMovil = (title, message) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "Entendido",
                style: "cancel"
            }
        ]
    );
}

//ALERT CON ACCIONES
//LOS PARAMETROS QUE RECIBEN SON:
//title:    TEXTO QUE SALDRA EN EL TITULO DEL ALERT
//message:  MENSAJE QUE SE VA A MOSTRAR EN EL ALERT
//action:   FUNCION QUE SE REALIZARA SI EL USUARIO CONFIRMA
//setAlert: CAMBIA EL ESTADO DEL ALERT PARA OCULTARLO
export const alertMovilAction = (title, message, action, setAlert) => {
    Alert.alert(
        title,
        message,
        [
            {
                text: "No",
                onPress: () => setAlert(false),
                style: "cancel"
            },
            { text: "Si", onPress: () => action() }
        ]
    );
}

//ALERT WEB CON ACCIONES
//LOS PARAMETROS QUE RECIBEN SON:
//title:    TEXTO QUE SALDRA EN EL TITULO DEL ALERT
//message:  MENSAJE QUE SE VA A MOSTRAR EN EL ALERT
//action:   FUNCION QUE SE REALIZARA SI EL USUARIO CONFIRMA
//setAlert: CAMBIA EL ESTADO DEL ALERT PARA OCULTARLO
export const alertWebAction=(title, message, action, setAlert)=>{
    <Alert variant="success">
        <Alert.Heading>{title}</Alert.Heading>
        <p>
          {message}
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(setAlert)} variant="outline-success">
            Cancelar
          </Button>
          <Button onClick={() => action()} variant="outline-danger">
            Eliminar
          </Button>
        </div>
      </Alert>
}