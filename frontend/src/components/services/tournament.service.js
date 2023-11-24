import axios from "axios";


export const TournamentService = {  
    async getAll() {
        const res = await axios.get(window.env.URL_TO_BD + "tournaments/");

        return res.data.data
    },
    async getById(id) {
        const res = await axios.get(window.env.URL_TO_BD + `tournaments/${id}`);

        return res.data.data
    },
}