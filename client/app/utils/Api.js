import {receiveLocation} from "../actions/Actions"

export function getLocation() {
    //TODO: ajax
    console.log("api");

    setTimeout(function () {
        receiveLocation({lat: "54", long: "23", city: "Bs As"});
    }, 1000)

}

