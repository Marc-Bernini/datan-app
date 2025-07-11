import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { heart, homeOutline } from "ionicons/icons";
import { Redirect, Route } from "react-router-dom";

import React from "react";

import "@/theme/global.scss"

import Home from "@/pages/home/Home";
import Support from "@/pages/support/Support";
setupIonicReact();

const App: React.FC = () => (
    <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/support">
                        <Support />
                    </Route>

                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="home" href="/home">
                        <IonIcon aria-hidden="true" icon={homeOutline} />
                        <IonLabel>Accueil</IonLabel>
                    </IonTabButton>

                    <IonTabButton tab="support" href="/support">
                        <IonIcon aria-hidden="true" icon={heart} />
                        <IonLabel>Nous soutenir</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>
);

export default App;
