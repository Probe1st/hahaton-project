import axios from "axios";
import { parse } from 'qs';


export const TournamentService = {  
    async getAll() {
        const res = await axios.get(window.env.URL_TO_BD + "tournaments?populate=*");

        return res.data.data
    },
    async getById(id) {
        const res = await axios.get(window.env.URL_TO_BD + `tournaments?populate=*/${id}`);

        return res.data.data
    },
}