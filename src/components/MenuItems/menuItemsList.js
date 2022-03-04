export const menuItems = [
    {
        title: "Home",
        url: '/'
    },
    {
        title: "About",
        url: '/about'
    },
    {
        title: "Services",
        url: '/services'
    },
    {
        title: "Dropdown",
        submenu: [
            {
                title: "Submenu 1",
            },
            {
                title: "Submenu 2",
            },
            {
                title: "Submenu 3",
            },
            {
                title: "Dropdown 2",
                submenu: [
                    {
                        title: "Submenu 4",
                    },
                    {
                        title: "Submenu 5",
                    },
                    {
                        title: "Submenu 6",
                    },
                ],
            },
        ],
    },
    {
        title: "Contact",
        url: '/contact'
    },
];
