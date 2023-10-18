import axios from "axios";

const URL = "http://localhost:8080/books/";

export const getAll = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (e) {
        console.log(e)
    }
}

export const save = async (value) => {
    try {
        const result = await axios.post(URL,value)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const update = async (id, value) => {
    try {
        const result = await axios.put(URL + id, value)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const del = async (id) => {
    try {
        const result = await axios.delete(URL + id)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const detail = async (id) => {
    try {
        const result = await axios.get(URL + id)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const findById = async (id) => {
    try {
        const result = await axios.get(URL + id)
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

