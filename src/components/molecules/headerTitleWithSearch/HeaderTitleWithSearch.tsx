import ToolbarSearch from "@/components/atomes/toolbarSearch/ToolbarSearch";
import ToolbarTitle from "@/components/atomes/toolbarTitle/ToolbarTitle";
import { IonHeader } from "@ionic/react";
import React from "react";

interface HeaderTitleWithSearchProps {
    toolbarTitle: string;
    toolBarSearchPlaceHolder: string;
}

const HeaderTitleWithSearch: React.FC<HeaderTitleWithSearchProps> = ({
    toolbarTitle,
    toolBarSearchPlaceHolder,
}) => (
    <IonHeader>
        <ToolbarTitle toolbarTitle={toolbarTitle} />
        <ToolbarSearch toolBarSearchPlaceHolder={toolBarSearchPlaceHolder} />
    </IonHeader>
);

export default HeaderTitleWithSearch;
