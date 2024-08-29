import styles from "./ButtonContainer.module.css";

const ButtonContainer = ({ buttonClicked }) => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((item, index) => (
        <button key={index} className={styles.button} onClick={buttonClicked}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
