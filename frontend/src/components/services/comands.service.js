import axios from "axios";



export const ComandsService = {
    url: `${window.env.URL_TO_BD}/tournaments/:id/comands/`,
    async getAll() {
        const res = await axios.get(this.url);

        return res.data;
    },
    async getById(id) {
        const res = await axios.get(this.url + id);

        return res.data
    },
    async getByName(name) {
        if (name === "") return this.getAll();

        const res = await axios.get(this.url);

        return res.data.find(comands => comands.find(e => e.name.include(name)));
    }
}