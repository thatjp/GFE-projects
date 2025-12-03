import styles from "./Text.module.css";

interface TextProps {
  text: string;
}

const Text = ({ text }: TextProps) => {
  return (
    <>
      <p className={styles.text}>{text}</p>
    </>
  );
};

export default Text;
