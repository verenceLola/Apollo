import { IStory } from "../../../entities";
import { NewsCard, withHeader } from "../../molecules";

import styles from "./index.module.scss";

interface IProps {
    stories: IStory[];
}

export const News = withHeader(({ stories }: IProps) => {
    return (
        <div className={styles.container}>
            {stories.map((story, index) => (
                <NewsCard key={index} story={story} index={index + 1} />
            ))}
        </div>
    );
});
