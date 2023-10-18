import axios from "axios";
const URL = "http://localhost:8080/books/";

export const findAll = async () => {
    try {
        const result = await axios.get(URL);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const save = async (book) => {
    try {
        const result = await axios.post(URL, book)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const update = async (id, book) => {
    try {
        const result = await axios.put(URL+ id, book);
        return result.data;

    } catch (e) {
        console.log(e)
    }
}

export const del = async (id) => {
    try {
        const result = await axios.delete(URL+ id);
        return result.data;
    } catch (e) {
        console.log()
    }
}

