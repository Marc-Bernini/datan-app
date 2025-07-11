import HeaderTitleWithSearch from "@/components/molecules/headerTitleWithSearch/HeaderTitleWithSearch";
import "@/pages/support/Support.scss";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import React from "react";

const Support: React.FC = () => {
    return (
        <IonPage>
            <HeaderTitleWithSearch
                toolbarTitle="Nous soutenir"
                toolBarSearchPlaceHolder="Je cherche"
            />

            <IonContent fullscreen>
                <IonButton>NOUS SOUTENIR</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Support;
