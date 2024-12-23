const menus = [
    {
        id: 1,
        name: 'Home',
        links: '/#',  // Keeping Home link as placeholder
        namesub: [
            {
                id: 1,
                sub: 'Home 01',
                links: '/'
            },
            {
                id: 2,
                sub: 'Home 02',
                links: '/home-v2'
            },
            {
                id: 3,
                sub: 'Home 03',
                links: '/home-v3'
            },
        ]
    },
    {
        id: 2,
        name: 'About',
        links: '/#about',  // Changed to scroll to 'about' section
        namesub: [
            {
                id: 1,
                sub: 'About 01',
                links: '/about-v1'
            },
            {
                id: 2,
                sub: 'About 02',
                links: '/about-v2'
            },
            {
                id: 3,
                sub: 'Coming Soon',
                links: '/coming-soon'
            },
            {
                id: 4,
                sub: 'Community',
                links: '/community'
            },
            {
                id: 5,
                sub: 'Team Details',
                links: '/team-details'
            },
            {
                id: 6,
                sub: 'FAQ',
                links: '/faq'
            },
            {
                id: 7,
                sub: '404',
                links: '/404'
            },
        ]
    },
    {
        id: 3,
        name: 'Workflow',
        links: '/#process',  // Changed to scroll to 'roadmap' section
        namesub: [
            {
                id: 1,
                sub: 'Road Map 01',
                links: '/road-map-v1'
            },
            {
                id: 2,
                sub: 'Road Map 02',
                links: '/road-map-v2'
            },
        ]
    },
    {
        id: 4,
        name: 'Nft',
        links: '/#nft',  // Changed to scroll to 'nft' section
        namesub: [
            {
                id: 1,
                sub: 'Nft Item',
                links: '/nft-item'
            },
            {
                id: 2,
                sub: 'Nft Item Details',
                links: '/nft-item-details'
            },
        ],
    },
    {
        id: 5,
        name: 'Blog',
        links: '/#blog',  // Changed to scroll to 'blog' section
        namesub: [
            {
                id: 1,
                sub: 'Our Blog',
                links: '/blog'
            },
            {
                id: 2,
                sub: 'Blog Details',
                links: '/blog-details'
            },
        ],
    },
    {
        id: 6,
        name: 'Contact',
        links: '/#contact',  // Changed to scroll to 'contact' section
    },
];

export default menus;
