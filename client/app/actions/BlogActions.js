import dispatcher from "../dispatcher";
import baseURL from "../config";
import axios from "axios";

export function createBlog(data) {

    axios.post(`${baseURL}/api/create`, {data}).then( (data) => {
        dispatcher.dispatch({
            type: "CREATE_BLOG",
            data
        });
    });
}
