import { axiosInstance } from "./axiosInstance";
import { IStory } from "../entities";

export const fetchStory = async (storyId: number): Promise<IStory> =>
    await axiosInstance
        .get(`item/${storyId}.json?print=pretty`)
        .then(({ data }) => data);
