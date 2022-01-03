import { useEffect, useState } from "react";

import { fetchTopStories } from "./api";
import { withHeader, News, Loader } from "./components";

import "./App.css";

interface IProps {
    limit: number;
}

const App = withHeader(({ limit }: IProps) => {
    const [stories, setStories] = useState<number[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchTopStories()
            .then((data) => {
                setStories(data);
            })
            .then(() => setLoading(false));
    }, []);

    return (
        <div className="App">
            {loading ? <Loader /> : <News stories={stories.slice(0, limit)} />}
        </div>
    );
});

export default App;
