import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.spinnerContainer}>
      <div className={styles.spinner}></div>
      <div className={styles.loader}>
        <p>loading</p>
        <div className={styles.words}>
          <span className={styles.word}>Procurando por informações meteorológicas</span>
          <span className={styles.word}>Obtendo dados meteorológicos</span>
          <span className={styles.word}>Coletando dados precisos sobre o clima</span>
          <span className={styles.word}>Montando o prognóstico do tempo</span>
          <span className={styles.word}>Fazendo mágica meteorológica</span>
        </div>
      </div>
    </div>
  );
};

export default Loading;
