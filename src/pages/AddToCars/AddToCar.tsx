import React, { useEffect, useState } from "react";
import { IonPage, IonMenuButton, IonHeader, IonItem, IonButtons, IonImg, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonContent, IonButton, IonTitle, IonModal, IonCol } from '@ionic/react';
import UseApi from "../../components/api/Api";
import './AddToCar.css'
const AddToCar: React.FC = () => {
  const { data, delet, refetch } = UseApi(`${process.env.REACT_APP_API_URL}/api/order_details`);
  const [costt, setCost] = useState(0);

  useEffect(() => {
    var a = 0;
    data?.map((order_detail: any) => {
      a = (a + parseInt(order_detail?.cost));
      setCost(a)
    })

  })
  const destroy = (id = 0) => {

    try {
      delet(id)
    } catch (err) {
      console.log(err)
    }
  }
  const confirmar = () => {
    try {
      refetch({ client_id: sessionStorage.getItem("Id"), isConfirm: 1, cost: costt });

    } catch (err) {
      console.log(err)
    }
  }

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
          <IonTitle>Car</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Car</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {data?.map((order_detail: any) => {
            return (
              <IonCard key={order_detail.id}>
                <IonCardHeader>
                  <IonCardTitle> Dish: {order_detail?.name}</IonCardTitle>
                  <IonCardTitle> Cost: {order_detail?.cost}</IonCardTitle>

                </IonCardHeader>
                <IonCardContent>{data?.delivery}</IonCardContent>

                <form onSubmit={() => destroy(order_detail?.id)}>
                  <IonButton type="submit" class="center" >destroy</IonButton>
                </form>
              </IonCard>
            )
          })}
          <IonItem>

            <h2>Precio: {costt}</h2>
            <form onSubmit={() => confirmar()}>
              <IonButton type="submit" class="buttonBuy" >Confimar</IonButton>
            </form>
          </IonItem>
        </IonContent>

      </IonContent>


    </IonPage>


  )
};

export default AddToCar;