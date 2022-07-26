import React, { useEffect, useState } from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonButton,
    IonInput,
    IonPage,
    IonContent,
    IonCardHeader,
    IonCardTitle,
    IonAlert,
    IonRouterLink
} from "@ionic/react";
import UseApi from "../api/Api";
import { useHistory } from "react-router-dom";



const FirstTime = ({ method }: any) => {

    const history = useHistory();
    const handleLoginButtonPress = () => {
        history.push("/Dishes");
    };

    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(true);
    const { post, validation, data } = UseApi(`${process.env.REACT_APP_API_URL}/api/clients`);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);


    const Redirect1 = () => {

        try {
            post({
                name: name,
                last_name: last_name,
                adress: adress,
                email: email,
                password: password
            });
            setName("");
            setLastName("");
            setAdress("");
            // setEmail("");
            setPassword("");
            sessionStorage.setItem("Email", email)
           
        } catch (error) {
            console.log(error);
        }

        if (validation === 201) {
            alert("B");
        } else {
            setShowAlert(true);
            handleLoginButtonPress();
        }
    }

    return (

        <IonPage>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>
                        Ingrese los siguientes datos:
                    </IonCardTitle>
                </IonCardHeader>
                <br />

                <form onSubmit={() => Redirect1()}>
                    <IonCardSubtitle> Insertar</IonCardSubtitle>
                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={name}
                        placeholder="Nombre (maximo 10 caracteres)*"
                        onIonChange={(e) => setName(e.detail.value!)}

                    />
                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={last_name}
                        placeholder="Apellido (máximo 15 caracteres)*"
                        onIonChange={(e) => setLastName(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={adress}
                        placeholder="Dirección*"
                        onIonChange={(e) => setAdress(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={email}
                        placeholder="Correo Electrónico*"
                        onIonChange={(e) => setEmail(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>

                    <IonInput
                        type="text"
                        required
                        value={password}
                        placeholder="Contraseña*"
                        onIonChange={(e) => setPassword(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>

                    <IonButton type="submit" >Registrarse</IonButton>
                </form>


                <IonContent>

                    <IonAlert
                        isOpen={showAlert}
                        onDidDismiss={() => setShowAlert(false)}
                        header="Listo!"
                        message="Ha ingresado correctamente"
                        buttons={['OK']}
                    />

                </IonContent>
            </IonCard >
        </IonPage>
    );

};



export default FirstTime;