import Heading from "../Heading";
import Text from "../Text";
import Pill from "../Pill";
import Link from "../Link";

import styles from "./Card.module.css";

interface CardProps {
  blogTopic: string;
  blogTitle: string;
  blogTextSnippet: string;
  linkText: string;
}

const Card = ({
  blogTextSnippet,
  blogTitle,
  blogTopic,
  linkText,
}: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageHeader}></div>
      <div className={styles.blogCardContent}>
        <Pill pillText={blogTopic} />
        <Heading headingText={blogTitle} level={3} />
        <Text text={blogTextSnippet} />
        <Link linkRoute='test/route' ariaLabel={`Read more about ${blogTitle}`} linkText={linkText}/>
      </div>
    </div>
  );
};

export default Card;
