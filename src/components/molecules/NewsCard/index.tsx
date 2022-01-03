import styles from "./index.module.scss";

export const NewsCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.rank}>
                <span>1</span>
            </div>
            <div className={styles["details-container"]}>
                <span>Story Title</span>
                <div className={styles.details}>
                    <span>128 Points</span>
                    <span>By verence</span>
                    <span>2 hours ago</span>
                    <span>2 comments</span>
                </div>
            </div>
        </div>
    );
};
