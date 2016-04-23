import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import {getLocation} from "../utils/Api"

export default class Store extends EventEmitter {
    constructor() {
        super();
        this.location = "";
    }

    getLocation(){
        return this.location;
    }

    setLocation(location){
        this.location = location;
    }



    handleActions(action) {

        switch(action.type) {

            case "GET_LOCATION":
                getLocation();
                this.emit("change");
                break;

            case "SET_LOCATION":
                this.setLocation(action.data);
                this.emit("change");
                break;
        }
    }


}

//const store = new Store;
////dispatcher.register(store.handleActions.bind(store));
//export default store;
