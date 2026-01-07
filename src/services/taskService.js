import api from "../api/axios";

export const createTask = (data) =>{
    return api.post("/tasks",data)
}

export const getTask = (data) =>{
    return api.get("/tasks")
};