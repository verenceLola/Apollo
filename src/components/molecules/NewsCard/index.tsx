import { IStory } from "../../../entities";

import styles from "./index.module.scss";

interface IProps {
    story: IStory;
    index: number;
}

export const NewsCard = ({
    story: {
        descendants: numberOfComments,
        score: points,
        time: postedAt,
        by: postedBy,
        title,
        url,
    },
    index,
}: IProps) => {
    return (
        <div className={styles.container}>
            <div className={styles.rank}>
                <span>{index}</span>
            </div>
            <div className={styles["details-container"]}>
                <span>{title}</span>
                <div className={styles.details}>
                    <span>{`${points} points`}</span>
                    <span>{`by ${postedBy}`}</span>
                    <span>{postedAt}</span>
                    <span>{`${numberOfComments} comments`}</span>
                </div>
            </div>
        </div>
    );
};
