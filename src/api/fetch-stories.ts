import axios from "axios";

import { IStory } from "../entities";
import { axiosInstance } from "./axiosInstance";

export const fetchTopStories = async (limit = 20) => {
    const topStories: number[] = await axiosInstance
        .get("/topstories.json?print=pretty")
        .then(({ data }) => data);

    console.log({ topStories });

    const storyRequests = topStories
        .slice(0, limit)
        .map((id) =>
            axiosInstance
                .get(`item/${id}.json?print=pretty`)
                .then(({ data }) => data)
        );

    return await axios
        .all<IStory>(storyRequests)
        .then(axios.spread((...responses) => responses));
};
