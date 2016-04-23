import React from "react";

export default class Location extends React.Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className="Location">
                <div className="label">
                    test: {this.props.location.lat}
                </div>
            </div>

        )
            ;
    }
}
