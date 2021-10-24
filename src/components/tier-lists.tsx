import React from "react";
import tierListFireEmblem from 'assets/tier-list-fire-emblem.png';

class TierLists extends React.Component {
    render() {
        return <>
            <h2>
                Tier lists
            </h2>
            <img src={tierListFireEmblem} alt="fire-emblem" />
        </>;
    }
}

export default TierLists;