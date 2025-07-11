import { IonTitle, IonToolbar } from "@ionic/react";
import React from "react";

interface ToolbarTitleProps {
    toolbarTitle: string;
}

const ToolbarTitle: React.FC<ToolbarTitleProps> = ({ toolbarTitle }) => (
    <IonToolbar>
        <IonTitle>{toolbarTitle}</IonTitle>
    </IonToolbar>
);

export default ToolbarTitle;
