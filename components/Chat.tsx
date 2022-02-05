import styles from "../styles/Chat.module.scss";

const Chat = () => {
  return (
    <div className={styles.infoSection}>
      <div className={styles.container}>
        <div className={styles.infoRow}>
          <div className={styles.infoCol}>
            <div className={styles.textWrapper}>
              <div className={styles.topLine}>Line 1</div>
              <div className={styles.heading}>Line 2</div>
              <div className={styles.subtitle}>Line 3</div>
            </div>
          </div>
          <div className={styles.infoCol}>
            <div className={styles.imgWrapper}>
              <img
                className={styles.graphics}
                src="https://i.pinimg.com/originals/2b/07/98/2b07985d0825d237b00df6e94b356662.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
