import React, {FunctionComponent} from "react";
import { Button } from "@material-ui/core";

import styles from "./Button.module.css";
type CustomButtonProps = {
  text: string,
  icon?: JSX.Element,
};

const CustomButton: FunctionComponent<CustomButtonProps> = ({ text, icon }) => { 
  return (
    <Button
      className={styles.custom_btn}
      endIcon={
        icon ? <div className={styles.btn_icon_container}> {icon}</div> : null
      }
    >
      <span className={styles.btn_text}>{text}</span>
    </Button>
  );
};
export default CustomButton;
