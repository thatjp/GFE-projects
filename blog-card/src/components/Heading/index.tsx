import styles from "./Heading.module.css";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingTag = `h${HeadingLevel}`;

type HeadingProps<T extends HeadingTag = "h1"> =
  React.ComponentPropsWithoutRef<T> & {
    level?: HeadingLevel;
    headingText: string;
  };

const Heading = ({ headingText, level }: HeadingProps) => {
  const Tag = `h${level}` as HeadingTag

  return (
    <>
      <Tag className={styles.heading}>{headingText}</Tag>
    </>
  );
};

export default Heading;
