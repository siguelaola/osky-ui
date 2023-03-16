import React from "react";
import { TextBlockData } from "../interfaces/types";
import { ComponentProps } from "./ScreenComponent";
import styles from "../styles/LabelField.module.css";
import parser from "html-react-parser";


interface StyleProps {
  text: string;
  level?: number;
  alignment: CanvasTextAlign;
}

class TextComponent extends React.Component<ComponentProps> {
  render() {
    const { data } = this.props;

    const config: StyleProps = {
      text: (data as TextBlockData).text,
      level: (data as TextBlockData).level,
      alignment: (data as TextBlockData).alignment ?? "left",
    };

    const Tags =
    config.level !== undefined
        ? `${styles.heading} ${styles['h${config.level}']}`
        : `${styles.label}`

    return (
        
      <div className={`${Tags} ${styles.text}`} style={{ textAlign: config.alignment }}>
        <span>{ parser(config.text) }</span>
      </div>
    );
  }
}

export { TextComponent };
