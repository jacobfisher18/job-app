import Link from 'next/link';
import styles from '../styles/components/sidebar.module.scss';
import { Page, sidebarItems } from '../util/pages';

export default function Sidebar(props: propTypes) {
    return (
        <div className={styles.SidebarContainer}>
            <img className={styles.SidebarAppLogo} src="/jaba-logo-white.png" alt="Jaba logo" />
            <div className={styles.SidebarItemsContainer}>
                {
                    sidebarItems.map((item, i) => {
                        return (
                            <div className={styles.SidebarItem} key={i}>
                                <img className={styles.SidebarIcon} src={item.img_src} alt={`${item.text} icon`} />
                                <Link href={item.link}>
                                    <p className={`${styles.SidebarText} ${item.page === props.activePage ? styles.Bolder : ""}`}>
                                        {item.text}
                                    </p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

type propTypes = {
    activePage: Page
}
