import { IonSearchbar, IonToolbar } from "@ionic/react";
import React from "react";

interface ToolbarSearchProps {
    toolBarSearchPlaceHolder: string;
}

const ToolbarSearch: React.FC<ToolbarSearchProps> = ({
    toolBarSearchPlaceHolder,
}) => (
    <IonToolbar>
        <IonSearchbar placeholder={toolBarSearchPlaceHolder}></IonSearchbar>
    </IonToolbar>
);

export default ToolbarSearch;
