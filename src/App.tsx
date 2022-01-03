import { useEffect, useState } from "react";

import { News } from "./components/organisms";
import { fetchTopStories } from "./api";
import { IStory } from "./entities";

import "./App.css";

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
