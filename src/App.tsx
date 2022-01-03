import { News } from "./components/organisms";

import "./App.css";

const stories = [
    0, 1, 2, 3, 4, 4, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
    2,
];

const App = () => (
    <div className="App">
        <News stories={stories} />
    </div>
);

export default App;
