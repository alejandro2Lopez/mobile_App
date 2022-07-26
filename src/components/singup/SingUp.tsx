import { useState } from "react";
import {
    IonCard,
    IonCardSubtitle,
    IonButton,
    IonInput,
    IonPage,
    IonAlert,
    IonContent
} from "@ionic/react";
import UseApi from "../api/Api";
import { useHistory } from "react-router-dom";

const Again = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data } = UseApi(`${process.env.REACT_APP_API_URL}/api/clients`);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert1, setShowAlert1] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);

    const history = useHistory();
    const handleLoginButtonPress = () => {
        history.push("/Dishes");
    };

    const Validate = () => {
        console.log(data);
        if (!data) {
            alert("No hay usuarios registrados")
        } else {
            data?.map((client: any) => {
                console.log(data);

                if (client.email === email && client.password === password) {
                    if (client.block === "enable") {
                        setShowAlert1(false);
                        setShowAlert2(false);
                        setShowAlert(true);
                        sessionStorage.setItem("Id", client.id)
                        handleLoginButtonPress();
                    } else {
                        setShowAlert2(true);
                        setShowAlert1(false);
                        setShowAlert(false);
                    }
                } else {

                    setShowAlert1(true);
                    setShowAlert(false);
                    setShowAlert2(false);
                }
            })
        }
    }

    return (
        <IonPage>
            <IonCard>
                <br />
                <form>
                    <IonCardSubtitle> Insertar</IonCardSubtitle>
                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={email}
                        placeholder="Email"
                        onIonChange={(e) => setEmail(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>

                    <p>-------------------------------------------------------------------------</p>
                    <IonInput
                        type="text"
                        required
                        value={password}
                        placeholder="Contraseña"
                        onIonChange={(e) => setPassword(e.detail.value!)}
                    />
                    <p>-------------------------------------------------------------------------</p>

                    <IonButton onClick={() => Validate()} >Ingresar</IonButton>
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
                        message="Verifique los datos ingresados"
                        buttons={['OK']}
                    />

                    <IonAlert
                        isOpen={showAlert2}
                        onDidDismiss={() => setShowAlert2(false)}
                        header="Error!"
                        message="El usuario se encuentra bloqueado"
                        buttons={['OK']}
                    />

                </IonContent>

            </IonCard>
        </IonPage>
    );
};

export default Again;