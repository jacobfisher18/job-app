import { Component } from 'react';
import styles from '../styles/components/dropdown.module.scss';
import onClickOutside from "react-onclickoutside";

interface DropdownOption {
    title: string;
    onClick: Function;
}

interface MyProps {
    title: string;
    options: DropdownOption[];
    expanded: boolean;
    flipExpanded: Function;
    setExpandedFalse: Function;
    handleClickOutside: Function;
}

 class Dropdown extends Component<MyProps, {}> {

    handleClickOutside = () => {
        this.props.setExpandedFalse();
    };

    render() {
        return (
            <div className={styles.Container}>
                <div
                    className={styles.DropdownBox}
                    onClick={() => { this.props.flipExpanded(); }}
                >
                    <p>{this.props.title.toUpperCase()}</p>
                    <img src="/down-icon.png" />
                </div>
                {this.props.expanded &&
                    <div className={styles.DropdownContent}>
                        {this.props.options.map((item, i) => {
                            return (
                                <p
                                    key={i}
                                    onClick={() => { item.onClick(); this.props.flipExpanded(); }}>
                                        {item.title.toUpperCase()}
                                </p>
                            )
                        })}
                    </div>}
            </div>
        );
    }

    
}

export default onClickOutside(Dropdown);
