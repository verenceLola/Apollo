import moment from "moment";
import { useMemo } from "react";
import { IStory } from "../../../entities";
import { StringFormmater } from "../../../utils";

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
        id,
        title,
        url,
    },
    index,
}: IProps) => {
    const formattedPostedAt = useMemo(
        () => moment(moment.unix(postedAt)).fromNow(),
        [postedAt]
    );

    return (
        <div className={styles.container}>
            <div className={styles.rank}>
                <span>{index}</span>
            </div>
            <div className={styles["details-container"]}>
                <span>{title}</span>
                <div className={styles.details}>
                    <span>{StringFormmater.Pluralize(points, "point")}</span>
                    <span>{`by ${postedBy}`}</span>
                    <span>{formattedPostedAt}</span>
                    <span>
                        {StringFormmater.Pluralize(numberOfComments, "comment")}
                    </span>
                </div>
            </div>
        </div>
    );
};
