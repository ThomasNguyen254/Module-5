import axios from "axios";

export const findAll = async () => {
    try {
        const result = await axios.get('http://localhost:8080/books');
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export const save = async (book) => {
    try {
        const result = await axios.post('http://localhost:8080/books', book)
        return result.data;
    } catch (e) {
        console.log(e)
    }
}
export const update = async (id, book) => {
    try {
        const result = await axios.put('http://localhost:8080/books', id, book);
        return result.data;

    } catch (e) {
        console.log(e)
    }
}

export const del = async (id) => {
    try {
        const result = await axios.delete('http://localhost:8080/books', id);
        return result.data;
    } catch (e) {
        console.log()
    }
}

