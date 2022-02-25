import {API} from "../../backend"

export const getProducts = () => {
    return fetch(`${API}product`,{method: "GET"})
    .then(response => {
        return response.json(); /* in the response we will receive the json format value. its converted into json format */
    })
    .catch(err => console.log(err))
}