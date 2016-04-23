import React from "react";
import BlogStore from "../../stores/BlogStore";


export default class Body extends React.Component {
    constructor() {
        super();
        this.state = {
            data: ['dsadsa','dsada']
        };
    }

    render() {

        return (
            <div className="body">
                <div className="items-container">
                    Body content
                </div>
            </div>
        );
    }
}
