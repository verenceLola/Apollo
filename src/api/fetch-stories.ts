import { axiosInstance } from "./axiosInstance";

export const fetchTopStories = async (): Promise<number[]> =>
    await axiosInstance
        .get("/topstories.json?print=pretty")
        .then(({ data }) => data);
