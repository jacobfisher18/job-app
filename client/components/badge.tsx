import styles from '../styles/components/badge.module.scss';
import { BadgeColor } from '../util/enums';

interface MyProps {
    text: string;
    img_src: string;
    color: BadgeColor;
}

export default function Badge(props: MyProps) {
    let colorClass = "";
    
    switch(props.color) {
        case BadgeColor.Blue:
            colorClass = styles.Blue;
          break;
        case BadgeColor.Yellow:
            colorClass = styles.Yellow;
          break;
        case BadgeColor.Grey:
            colorClass = styles.Grey;
          break;
      }

    return (
        <div className={`${styles.Container} ${colorClass}`}>
            <p>{props.text}</p>
            <img src={props.img_src} />
        </div>
    )
}
