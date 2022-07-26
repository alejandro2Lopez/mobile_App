import React, { useState } from "react";
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonContent,
    IonButton,
    IonTitle,
    IonButtons,
    IonMenuButton,
} from "@ionic/react";
import Renew from "../../components/update/Update";

const Principal: React.FC = () => {

    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        Editar información
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <Renew></Renew>
            </IonContent>

        </IonPage>

    )
};

export default Principal; 