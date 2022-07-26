import React, { useState } from "react";
import { IonPage, IonMenuButton, IonHeader, IonButtons, IonImg, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonButton, IonTitle, IonModal } from '@ionic/react';
import UseApi from "../../components/api/Api";
import './Dish.css'

import { Modal_Dish } from "../../components/Modal_Dish";

const Dish: React.FC = () => {
  const { data, refetch } = UseApi(`${process.env.REACT_APP_API_URL}/api/dishes`);
  const closeModal = () => {
    setOpen(false);
  }
  const openModal = (image = "", name = "", cost = 0, description = "", idDish = 0) => {
    setOpen(true);
    setImage(image);
    setName(name);
    setCost(cost);
    setDescription(description);
    setIdDish(idDish);
  }
  const [description, setDescription] = useState("");
  const [cost, setCost] = useState(0);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [open, setOpen] = useState(false);
  const [idDish, setIdDish] = useState(0);
  if (!data) {
    return <h1>Cargando...</h1>
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Dishes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Dishes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((dish: any) => {

            return (
              <IonCard key={dish.id}>

                <IonCardHeader>
                  <IonCardTitle className="Joke_Category"> Dish: {dish?.name}</IonCardTitle>
                  <IonCardTitle className="Joke_Category"> Cost: {dish?.cost}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>{data?.delivery}</IonCardContent>
                <IonButton onClick={() => openModal(dish?.image_url, dish?.name, dish?.cost, dish?.description, dish?.id)} class="center" >Show</IonButton>

              </IonCard>

            )
          })}
          <IonModal id="example-modal" isOpen={open} onDidDismiss={closeModal}>
            <Modal_Dish dismiss={closeModal} image={image} description={description} cost={cost} name={name} id={idDish}></ Modal_Dish >
          </IonModal>

        </IonContent>

      </IonContent>
    </IonPage>


  )
};

export default Dish;