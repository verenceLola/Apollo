import { NewsCard, withHeader } from "../../molecules";

import styles from "./index.module.scss";

interface IProps {
    stories: number[];
}

export const News = withHeader(({ stories }: IProps) => {
    return (
        <div className={styles.container}>
            {stories.map((value, index) => (
                <NewsCard key={index} />
            ))}
        </div>
    );
});
