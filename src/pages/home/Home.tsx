import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonCard,
    IonContent,
    IonButton,
    IonTitle,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
    const url = `${process.env.REACT_APP_API_URL}/api/clients`

    return (
        <>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        Bienvenido
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonCard>
                    <IonHeader>Escoga la opción que desea:</IonHeader>
                    <IonButton routerLink="SingUp" >Ingresar</IonButton>
                    <IonButton routerLink="Login">Registrar</IonButton>
                </IonCard>
            </IonContent>
        </>
    );
};

export default Home; 