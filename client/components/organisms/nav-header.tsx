import styles from '../../styles/components/organisms/nav-header.module.scss';

interface MyProps {
    title: string;
    activeSection: any;
    setSection: Function;
    navSections: {
        title: string;
        section: any;
    }[];
    children?: React.ReactNode;
}

export default function NavHeader(props: MyProps) {
    return (
        <div className={styles.HeaderContainer}>
            <div className={styles.HeaderContentContainer}>
                <div className={styles.HeaderLeft}>
                    <h1 className={styles.PageTitle}>{props.title}</h1>
                    <div className={styles.NavContainer}>
                        {props.navSections.map(item => {
                            return (
                                <p
                                className={`${styles.NavItem} ${props.activeSection == item.section && styles.ActiveNavItem}`}
                                onClick={() => { props.setSection(item.section) }}>
                                {item.title}</p>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.HeaderRight}>
                    {props.children}
                </div>
            </div>
        </div>
    )
}
