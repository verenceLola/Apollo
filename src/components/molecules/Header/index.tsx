import React, { ComponentType, useState } from "react";

import styles from "./index.module.scss";

interface IProps {}

const COUNT_OPTIONS = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

export const withHeader =
    <P extends IProps>(
        Component: ComponentType<P>
    ): ComponentType<Omit<P, "limit">> =>
    (props) => {
        const [limit, setLimit] = useState(50);

        const onUpdateLimit = ({
            target: { value },
        }: React.ChangeEvent<HTMLSelectElement>) => {
            setLimit(parseInt(value));
        };
        return (
            <>
                <div className={styles.container}>
                    <header>Hacker News Project</header>
                    <NumberOfStories
                        onUpdateLimit={onUpdateLimit}
                        limit={limit}
                    />
                </div>
                <div className={styles.content}>
                    <Component {...(props as any)} limit={limit} />
                </div>
            </>
        );
    };

interface INumberOfStoriesProps {
    limit: number;
    onUpdateLimit: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const NumberOfStories = ({ limit, onUpdateLimit }: INumberOfStoriesProps) => {
    return (
        <div className={styles["number-of-stories-container"]}>
            <label htmlFor="count">Count:</label>
            <select name="count" defaultValue={limit} onChange={onUpdateLimit}>
                {COUNT_OPTIONS.map((value, index) => (
                    <option key={index} value={value}>
                        {value}
                    </option>
                ))}
            </select>
        </div>
    );
};
