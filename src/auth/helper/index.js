import { API } from "../../backend";
import { cartEmpty } from "../../core/helper/cartHelper";

export const signup = user => {
    return fetch(`${API}user/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err))
}


//we can go with json or formdata way

export const signin = (user) => {
    const formData = new FormData();

    for (const name in user) {
        console.log(user[name]);
        formData.append(name, user[name]);
    }

    // const { email, password } = user;
    // const formData = new FormData();
    // formData.append('email', email)
    // formData.append('password', password)

    // for (var key of formData.keys()) {
    //     console.log("MYKEY: ", key);
    // }

    return fetch(`${API}user/login/`, {
        method: "POST",
        body: formData,
    })
        .then((response) => {
            console.log("SUCCESS", response);
            return response.json();
        })
        .catch(err => console.log(err));
};


//authenticate
export const authenticate = (data, next) => {
    if (typeof window !== undefined) {
        localStorage.setItem("jwt", JSON.stringify(data));
        next();
    }
}

//isAuthenticated
export const isAuthenticated = () => {
    if (typeof window == undefined) {
        return false
    }
    if (localStorage.getItem("jwt")) {
        return JSON.parse(localStorage.getItem("jwt"));
        //compare jwt with database json token
    } else {
        return false
    }
}


//signout
export const signout = (next) => {
    const userId = isAuthenticated() && isAuthenticated().user.id;

    if (typeof window !== undefined) {
        localStorage.removeItem("jwt");
        cartEmpty(() => { });
        //next();

        return fetch(`${API}user/logout/${userId}/`, {
            method: "GET",
        })
            .then(response => {
                console.log("Signout success");
                next();
            })
            .catch((err) => console.log(err));
    }
}