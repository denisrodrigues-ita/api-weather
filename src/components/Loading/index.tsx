import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.loader}>
        <p>loading</p>
        <div className={styles.words}>
          <span className={styles.word}>Clima</span>
          <span className={styles.word}>Céu azul</span>
          <span className={styles.word}>Ventos</span>
          <span className={styles.word}>Temperaturas</span>
          <span className={styles.word}>Nuvens</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
