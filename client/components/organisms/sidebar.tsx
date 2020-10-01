import Link from 'next/link';
import styles from '../../styles/components/organisms/sidebar.module.scss';

export enum Page {
    Home,
    Jobs,
    Profile,
    Applicants,
    Settings
}

const sidebarItems = [
    {
        page: Page.Home,
        text: 'Home',
        img_src: '/home-icon.png',
        link: '/home'
    },
    {
        page: Page.Jobs,
        text: 'Jobs',
        img_src: '/jobs-icon.png',
        link: '/jobs'
    },
    {
        page: Page.Profile,
        text: 'Profile',
        img_src: '/profile-icon.png',
        link: '/profile'
    },
    {
        page: Page.Applicants,
        text: 'Applicants',
        img_src: '/applicants-icon.png',
        link: '/applicants'
    },
    {
        page: Page.Settings,
        text: 'Settings',
        img_src: '/settings-icon.png',
        link: '/settings'
    }
]

interface MyProps {
    activePage: Page;
}

export default function Sidebar(props: MyProps) {
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
