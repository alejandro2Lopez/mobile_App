import { useEffect, useState } from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonButton,
    IonInput,
    IonPage,
    IonContent,
    IonAlert
} from "@ionic/react";
import UseApi from "../api/Api";

const Renew = ({ method }: any) => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [last_name, setLastName] = useState("");
    const [adress, setAdress] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { put, data } = UseApi(`${process.env.REACT_APP_API_URL}/api/clients`);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);

    const Validate = () => {
        console.log(data);

        data?.map((client: any) => {
            if (client.email === sessionStorage.getItem("Email")) {
                sessionStorage.setItem("Id", client.id)
            }
        })

        try {
            put({ name: name, last_name: last_name, adress: adress, email: email, password: password }, sessionStorage.getItem("Id"));
            setName("");
            setLastName("");
            setAdress("");
            setEmail("");
            setPassword("");
        } catch (error) {
            console.log(error)
        }


    }

    return (

        <IonCard>
            <br />
            <form onSubmit={() => Validate()}>
                <IonCardSubtitle> Actualizar datos</IonCardSubtitle>
                <p>-------------------------------------------------------------------------</p>
                <IonInput
                    type="text"
                    required
                    value={name}
                    placeholder="Nombre"
                    onIonChange={(e) => setName(e.detail.value!)}
                />
                <p>-------------------------------------------------------------------------</p>
                <IonInput
                    type="text"
                    required
                    value={last_name}
                    placeholder="Apellido"
                    onIonChange={(e) => setLastName(e.detail.value!)}
                />
                <p>-------------------------------------------------------------------------</p>
                <IonInput
                    type="text"
                    required
                    value={adress}
                    placeholder="Dirección"
                    onIonChange={(e) => setAdress(e.detail.value!)}
                />
                <p>-------------------------------------------------------------------------</p>

                <IonInput
                    type="text"
                    required
                    value={email}
                    placeholder="Correo Electrónico"
                    onIonChange={(e) => setEmail(e.detail.value!)}
                />
                <p>-------------------------------------------------------------------------</p>

                <IonInput
                    type="text"
                    required
                    value={password}
                    placeholder="Contraseña"
                    onIonChange={(e) => setPassword(e.detail.value!)}
                />
                <p>-------------------------------------------------------------------------</p>

                <IonButton type="submit" >Editar</IonButton>

            </form>

            <IonContent>

                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header="Listo!"
                    message="Ha ingresado correctamente"
                    buttons={['OK']}
                />

                <IonAlert
                    isOpen={showAlert1}
                    onDidDismiss={() => setShowAlert1(false)}
                    header="Error!"
                    message="Su usuario y contraseña no es correcto"
                    buttons={['OK']}
                />

            </IonContent>
        </IonCard>
    );
}

export default Renew;