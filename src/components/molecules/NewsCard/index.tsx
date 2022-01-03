import { useEffect, useMemo, useState } from "react";
import moment from "moment";

import { fetchStory } from "../../../api";
import { IStory } from "../../../entities";
import { StringFormmater } from "../../../utils";

import styles from "./index.module.scss";

interface IProps {
    storyId: number;
    index: number;
}

export const NewsCard = ({ storyId, index }: IProps) => {
    const [story, setStory] = useState<IStory>();

    useEffect(() => {
        fetchStory(storyId).then((data) => setStory(data));
    }, [storyId]);

    const formattedPostedAt = useMemo(
        () => story?.time && moment(moment.unix(story?.time)).fromNow(),
        [story?.time]
    );

    const onClick = () => {
        story?.url && window.open(story.url, "_blank");
    };

    return story ? (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.rank}>
                <span>{index}</span>
            </div>
            <div className={styles["details-container"]}>
                <span>{story.title}</span>
                <div className={styles.details}>
                    <span>
                        {StringFormmater.Pluralize(story.score, "point")}
                    </span>
                    <span>{`by ${story.by}`}</span>
                    <span>{formattedPostedAt}</span>
                    <span>
                        {StringFormmater.Pluralize(
                            story.descendants,
                            "comment"
                        )}
                    </span>
                </div>
            </div>
        </div>
    ) : (
        <></>
    );
};
