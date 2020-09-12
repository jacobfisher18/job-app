import styles from '../styles/sidebar.module.scss';

const sidebarItems = [
    {
        text: 'Home',
        img_src: '/home-icon.png'
    },
    {
        text: 'Jobs',
        img_src: '/jobs-icon.png'
    },
    {
        text: 'Profile',
        img_src: '/profile-icon.png'
    },
    {
        text: 'Applicants',
        img_src: '/applicants-icon.png'
    },
    {
        text: 'Settings',
        img_src: '/settings-icon.png'
    }
]

export default function Sidebar() {
  return (
    <div className={styles.SidebarContainer}>
        <img className={styles.SidebarAppLogo} src="/jaba-logo-white.png" alt="Jaba logo"/>
        <div className={styles.SidebarItemsContainer}>
            {
                sidebarItems.map((item, i) => {
                    return (
                        <div className={styles.SidebarItem} key={i}>
                            <img className={styles.SidebarIcon} src={item.img_src} alt={`${item.text} icon`}/>
                            <p className={styles.SidebarText}>{item.text}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}
