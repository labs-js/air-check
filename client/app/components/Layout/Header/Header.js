import React from "react";

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Air Check"
        };
    }

    render() {
        return (
            <div class="header">
                <div><a href="/"><h1>{ this.state.title }</h1></a></div>
            </div>
        );
    }
}
