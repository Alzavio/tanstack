import axios from "axios";
import {Breed} from "./interfaces/breed";
import {Fact} from "./interfaces/fact";
import {Group} from "./interfaces/group";

const BASE_URL = "https://dogapi.dog/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getBreeds = async () => {
    return (await axiosInstance.get<Breed[]>('api/v2/breeds')).data.data;
}

export const getFact = async () => {
    return (await axiosInstance.get<Fact[]>('api/v2/facts')).data.data[0];
}

export const getGroups = async () => {
    return (await axiosInstance.get<Group[]>('api/v2/groups')).data.data;
}