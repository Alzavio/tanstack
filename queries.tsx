import {useQuery} from "@tanstack/react-query";
import {getBreeds, getFact, getGroups} from "./apis";

export function useBreedIds() {
    return useQuery({
        queryKey: ["id"],
        queryFn: getBreeds
    })
}

export function useFacts() {
    return useQuery({
        queryKey: ["facts"],
        queryFn: getFact,
        refetchOnReconnect: true // give new fact on reconnect :)
    })
}

export function useGroups() {
    return useQuery({
        queryKey: ["groups"],
        queryFn: getGroups
    })
}