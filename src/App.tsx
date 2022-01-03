import { useEffect, useState } from "react";

import { News } from "./components/organisms";
import { fetchTopStories } from "./api";
import { withHeader } from "./components/molecules";

import "./App.css";

interface IProps {
    limit: number;
}

const App = withHeader(({ limit }: IProps) => {
    const [stories, setStories] = useState<number[]>([]);

    useEffect(() => {
        fetchTopStories().then((data) => {
            setStories(data);
        });
    }, []);

    useEffect(() => {});

    return (
        <div className="App">{<News stories={stories.slice(0, limit)} />}</div>
    );
});

export default App;
