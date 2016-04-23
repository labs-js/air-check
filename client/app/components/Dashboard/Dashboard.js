import React from "react";

import Location from "./Location/Location";
import OficialData from "./OficialData/OficialData";
import CommunityData from "./CommunityData/CommunityData";
import Flights from "./Flights/Flights";
import Symptoms from "./Symptoms/Symptoms";

import Store from "../../stores/Store";
import { getLocation } from "../../actions/Actions";

export default class Dashboard extends React.Component {
    constructor() {
        super();

        this.state = {
            location: ""
        };
    }

    componentDidMount() {
        getLocation();
        Store.on("change", this._onChange.bind(this));
    }

    _onChange() {
        this.setState(Store.getLocation());
    }

    render() {
        return ( < div >
                <Location location={this.state.location}/>
                </div>
        );
    }
}
