import dispatcher from "../dispatcher";
import baseURL from "../config";
import axios from "axios";


export function getLocation(){
    console.log("PASA POR ACTION");
    dispatcher.dispatch({
        type: "GET_LOCATION"
    });
}

export function receiveLocation(data){
    dispatcher.dispatch({
        type:"SET_LOCATION",
        data: data
    });
}
