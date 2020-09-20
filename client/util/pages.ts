export enum Page {
    Home,
    Jobs,
    Profile,
    Applicants,
    Settings
}

interface ISidebarItem {
    page: Page,
    text: string,
    img_src: string,
    link: string,
}

export const sidebarItems: ISidebarItem[] = [
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
