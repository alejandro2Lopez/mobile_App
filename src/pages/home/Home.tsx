import React from "react";
import {
    IonHeader,
    IonToolbar,
    IonCard,
    IonContent,
    IonButton,
    IonTitle,
    IonImg,
    IonCardSubtitle,
    IonCardTitle
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
                    <IonCardTitle class="title">Delivery</IonCardTitle>
                    <br></br>
                    <IonImg src="https://media.informabtl.com/wp-content/uploads/2019/09/61f86bab-bigstock-concept-online-delivery-servic-279977533.jpg"></IonImg>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <IonCardSubtitle color={"dark"}>Escoga la opción que desea:</IonCardSubtitle>
                    <br></br>
                    <IonButton routerLink="SingUp"  class="center" size="large" strong>Ingresar</IonButton>
                    <IonButton routerLink="Login"  class="center" size="large" strong>Registrarse</IonButton>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <IonCardSubtitle color={"dark"}>Integrantes: </IonCardSubtitle>
                    <br></br>
                    <IonCardSubtitle>Allan Naranjo</IonCardSubtitle>
                    <IonCardSubtitle>Alejandro Lopez</IonCardSubtitle>
                    <IonCardSubtitle>Juan Diego Prendas</IonCardSubtitle>
                    <IonCardSubtitle>Issac Brenes</IonCardSubtitle>
                </IonCard>
            </IonContent>
        </>
    );
};

export default Home; 