import { ComponentType } from "react";

import styles from "./index.module.scss";

interface IProps {}

export const withHeader =
    <P extends IProps>(
        Component: ComponentType<P>
    ): ComponentType<Omit<P, "">> =>
    (props) =>
        (
            <>
                <div className={styles.container}>
                    <title>Hacker News Project</title>
                    <header>Hacker News Project</header>
                </div>
                <div className={styles.content}>
                    <Component {...(props as any)} />
                </div>
            </>
        );
