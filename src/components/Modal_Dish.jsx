import React, { useRef } from 'react';
import {
    IonButtons,
    IonButton,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonLabel,
    IonImg,
} from '@ionic/react';

import './Modal_Dish.css'

export const Modal_Dish = ({ dismiss, image, name, cost, description }) => {

    return (<IonContent>

        <IonHeader translucent>

            <IonToolbar>

                <IonTitle>{name}</IonTitle>

                <IonButtons slot="end"> <IonButton onClick={dismiss}>Close</IonButton>

                </IonButtons> </IonToolbar>

        </IonHeader>



        <IonContent>
            <IonImg src={image} />

            <IonItem>
                <IonLabel>
                    <h2>Descripcion:</h2>

                    <p>{description}</p>
                </IonLabel>
            </IonItem>
            <IonItem>

                <IonLabel>
                    <h2>Precio:</h2>
                    <p>{cost}</p>
                </IonLabel>


            </IonItem >


            <IonButton class="center">Add to car</IonButton>


        </IonContent>
    </IonContent>
    )
}
