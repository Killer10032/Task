import request from "./request"

export function getCarApi() {
    return request({
        url: "/api/car",
        method: "GET",
    })
}

export function getCarByIdApi(id) {
    return request({
        url: `/api/car/${id}`,
        method: "GET",
    })
}

export function getCarByUserIdApi(id) {
    return request({
        url: `/api/car/userId/${id}`,
        method: "GET"
    })
}