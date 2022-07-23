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
    useIonAlert,
} from '@ionic/react';

import './Modal_Dish.css'
import UseApi from './UseApi';

export const Modal_Dish = ({ dismiss, image, name, cost, description, id }) => {
    const [presentAlert] = useIonAlert();
    const { refetch } = UseApi(`${process.env.REACT_APP_API_URL}/api/order_details`);
    const AddTocar = (dish_id = 0) => {
        try {
            refetch({ client_id: 1, dish_id: dish_id });
            presentAlert({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'Se ha agregado de manera exitosa',
                buttons: ['OK'],
              })
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <IonContent>
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
                <form onSubmit={() => AddTocar(id)}>
                <IonButton class="center" type="submit">Add to car</IonButton>
                </form>
            </IonContent>
        </IonContent>
    )
}
