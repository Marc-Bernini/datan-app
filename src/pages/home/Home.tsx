import HeaderTitleWithSearch from "@/components/molecules/headerTitleWithSearch/HeaderTitleWithSearch";
import "@/pages/home/Home.scss";
import { IonContent, IonPage } from "@ionic/react";
import React from "react";

const Home: React.FC = () => {
    return (
        <IonPage>
            <HeaderTitleWithSearch
                toolbarTitle="Rechercher"
                toolBarSearchPlaceHolder="Je cherche"
            />

            <IonContent fullscreen>Accueil</IonContent>
        </IonPage>
    );
};

export default Home;
