import { useState } from "react";
import Avatar from "../Avatar";
import Button from "../Button";
import Description from "../Description";
import styles from "./profileCard.module.css";

export default function ProfileCard() {
  const [followButtonText, setFollowButtonText] = useState("Follow");
  return (
    <>
      <div className={styles.profileCard}>
        <Avatar src="https://unsplash.it/100/100" name="Pedro">
          <button onClick={() => setFollowButtonText("Following")}>
            {followButtonText}
          </button>
        </Avatar>
        <Description description="Desenvolvedor Web" />
        <Description description="+48 999999999" />
        <Description description="[EMAIL_ADDRESS]" />

        <Button text="GitHub" url="https://github.com" />
        <Button text="LinkedIn" url="https://linkedin.com" />
        <Button text="Twitter" url="https://twitter.com" />
      </div>
    </>
  );
}
