import request from "./request"

export function getUserApi() {
    return request({
        url: "/api/user",
        method: "GET",
    })
}

export function getUserByIdApi(id) {
    return request({
        url: `/api/user/${id}`,
        method: "GET",
    })
}