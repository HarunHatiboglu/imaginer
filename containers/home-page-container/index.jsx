import { Examples } from "./examples";
import { PrompForm } from "./prompt-form";
import { PromptSuggestions } from "./prompt-suggestions";
import styles from "./styles.module.scss";
const HomePageContainers = () => {
  return (
    <div className={styles.homePageContainer}>
      <h1 className={styles.title}>
        You just imagine,
        <br />
        we handle the rest
      </h1>
      <p className={styles.description}>
        Tell us a prompt and we&apos;ll generate a story for you.
      </p>
      <PrompForm />
      <PromptSuggestions />
      <Examples />
    </div>
  );
};

export { HomePageContainers };
