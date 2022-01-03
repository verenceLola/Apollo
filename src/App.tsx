import { useEffect, useState } from "react";

import { News } from "./components/organisms";

import "./App.css";
import { fetchTopStories } from "./api";
import { IStory } from "./entities";

const stories = [
    0, 1, 2, 3, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2,
];

const App = () => {
    const [stories, setStories] = useState<IStory[]>([]);
    useEffect(() => {
        fetchTopStories().then((data) => {
            setStories(data);
        });
    }, []);
    console.log({ stories });
    return <div className="App">{<News stories={stories} />}</div>;
};

export default App;
