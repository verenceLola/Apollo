import { NewsCard } from "../../molecules";

import styles from "./index.module.scss";

interface IProps {
    stories: number[];
}

export const News = ({ stories }: IProps) => {
    return (
        <div className={styles.container}>
            {stories.map((story, index) => (
                <NewsCard key={story} storyId={story} index={index + 1} />
            ))}
        </div>
    );
};
