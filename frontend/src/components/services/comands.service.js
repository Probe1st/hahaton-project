import axios from "axios";


export const ComandsService = {
    async getAll() {
        const res = await axios.get(window.env.URL_TO_BD + "/comands");

        return res.data
    },
    async getById(id) {
        const res = await axios.get(window.env.URL_TO_BD + `/comands/${id}`);

        return res.data
    },
    async getByName(name) {
        const res = await axios.get(window.env.URL_TO_BD + `/comands`);

        return res.data.find(comands => comands.)
    }
}