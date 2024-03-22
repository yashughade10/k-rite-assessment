const Product = [
    {
        id: 1,
        brand: "Wfx",
        description: "Innovative cloud-based fashion technology suite.",
        logo: "/images/wfx.jpg",
        memberImages: [
            '/images/members/1.avif',
            '/images/members/2.avif',
            '/images/members/3.avif',
            '/images/members/4.avif',
            '/images/members/5.avif',
            '/images/members/6.avif'
        ],
        categories: [
            {
                name: 'Automation',
                color: '#8662d4',
                border: '#ede4fe',
                background: '#faf7ff'
            }
        ],
        tags: [
            '#DigitalTransformation',
            '#Wfx',
        ],
        meeting: {
            time: "in 30 minutes",
            text: '#58967a',
            border: '#58967a',
            background: '#daf5e2'
        }
    },
    {
        id: 2,
        brand: "Shopify",
        description: "Leading e-commerce platform enabling businesses to create and manage online stores with ease.",
        logo: "/images/shopify.webp",
        memberImages: [
            '/images/members/3.avif',
            '/images/members/2.avif',
            '/images/members/8.avif',
            '/images/members/10.avif',
        ],
        categories: [
            {
                name: 'E-commerce',
                color: '#af835e',
                border: '#fee6d3',
                background: '#fffcf3'
            },
            {
                name: 'B2B',
                color: '#a99352',
                border: '#f6efc9',
                background: '#fffad4'
            }
        ],
        tags: [
            '#OnlineShopping',
            '#DigitalMarketing',
        ],
        meeting: {
            time: "Tomorrow",
            text: '#70a6b6',
            border: '#7ec6dc',
            background: 'white'
        }
    },
    {
        id: 3,
        brand: "MailChimp",
        description: "Versatile email marketing platform offering tools for creating, managing, and analyzing email campaigns.",
        logo: "/images/mailchimp.svg",
        memberImages: [
            '/images/members/9.avif',
            '/images/members/8.avif',
            '/images/members/6.avif',
            '/images/members/7.avif',
        ],
        categories: [
            {
                name: 'SAAS',
                color: '#58967a',
                border: '#58967a',
                background: '#daf5e2'
            },
            {
                name: 'Mobile',
                color: '#a59c5d',
                border: '#bfb5bc',
                background: '#fffad4'
            }
        ],
        tags: [
            '#Technnovation',
            '#CloudComputing',
        ],
        meeting: {
            time: "Tomorrow",
            text: '#70a6b6',
            border: '#7ec6dc',
            background: 'white'
        }
    },
    {
        id: 4,
        brand: "PayPal",
        description: "Online payment platform that facilitates secure transactions between buyers and sellers.",
        logo: "/images/paypal.png",
        memberImages: [
            '/images/members/5.avif',
            '/images/members/6.avif',
            '/images/members/7.avif',
            '/images/members/8.avif',
            '/images/members/9.avif',
            '/images/members/10.avif'
        ],
        categories: [
            {
                name: 'Marketplace',
                color: '#58967a',
                border: '#58967a',
                background: '#daf5e2'
            }
        ],
        tags: [
            '#BuySellOnline',
            '#OnlineTrade',
        ],
        meeting: {
            time: "in 6 hours",
            text: '#58967a',
            border: '#58967a',
            background: '#daf5e2'
        }
    },
    {
        id: 5,
        brand: "Disney",
        description: "Movies, owns theme parks, and has lots of TV channels.",
        logo: "/images/disney.jpg",
        memberImages: [
            '/images/members/4.avif',
            '/images/members/5.avif',
        ],
        categories: [
            {
                name: 'B2B',
                color: '#a99352',
                border: '#f6efc9',
                background: '#fffad4'
            },
            {
                name: 'B2C',
                color: '#a59c5d',
                border: '#bfb5bc',
                background: '#fffad4'
            }
        ],
        tags: [
            'BusinessPartnership',
        ],
        meeting: {
            time: "No contact",
            text: '#af835e',
            border: '#fee6d3',
            background: '#fffcf3'
        }
    },
    {
        id: 6,
        brand: "Intercom",
        description: "Customer messaging platform used by businesses to communicate with customers through various channels like chat, email, and more.",
        logo: "/images/intercom.png",
        memberImages: [
            '/images/members/5.avif',
            '/images/members/4.avif',
            '/images/members/3.avif',
            '/images/members/2.avif',
            '/images/members/1.avif',
        ],
        categories: [
            {
                name: 'Technology',
                color: '#6881b2',
                border: '#6881b2',
                background: '#e4ebff'
            },
            {
                name: 'SAAS',
                color: '#58967a',
                border: '#58967a',
                background: '#daf5e2'
            }
        ],
        tags: [
            '#SmartFinance',
            '#SAAS',
            '#SCSS'
        ],
        meeting: {
            time: "in 1 hours",
            text: '#58967a',
            border: '#58967a',
            background: '#daf5e2'
        }
    },
    {
        id: 7,
        brand: "Google",
        description: "Search engine, offering a wide range of services including email, cloud storage, and productivity tools.",
        logo: "/images/google.jpg",
        memberImages: [
            '/images/members/1.avif',
            '/images/members/2.avif',
            '/images/members/3.avif',
            '/images/members/4.avif',
            '/images/members/5.avif',
            '/images/members/6.avif',
            '/images/members/7.avif',
            '/images/members/8.avif',
        ],
        categories: [
            {
                name: 'Finance',
                color: '#a99352',
                border: '#f6efc9',
                background: '#fffad4'
            },
            {
                name: 'Automation',
                color: '#8662d4',
                border: '#ede4fe',
                background: '#faf7ff'
            }
        ],
        tags: [
            '#SmartFinance',
            '#Wordkflow',
        ],
        meeting: {
            time: "in 30 minutes",
            text: '#58967a',
            border: '#58967a',
            background: '#daf5e2'
        }
    },
    {
        id: 8,
        brand: "Evernote",
        description: "Note-taking app that helps you organize your thoughts, tasks, and ideas across various devices.",
        logo: "/images/evernote.png",
        memberImages: [
            '/images/members/4.avif',
            '/images/members/5.avif',
            '/images/members/6.avif'
        ],
        categories: [
            {
                name: 'Transportation',
                color: '#a59c5d',
                border: '#bfb5bc',
                background: '#fffad4'
            }
        ],
        tags: [
            '#LogisticsTech',
            '#UI',
        ],
        meeting: {
            time: "Next month",
            text: 'gray',
            background: 'white',
            border: 'gray'
        }
    },
    {
        id: 9,
        brand: "Microsoft",
        description: "Develops software, hardware, and cloud services, including the Windows operating system",
        logo: "/images/microsoft.png",
        memberImages: [
            '/images/members/8.avif',
            '/images/members/2.avif',
            '/images/members/9.avif',
            '/images/members/1.avif',
            '/images/members/5.avif',
        ],
        categories: [
            {
                name: 'Publishing',
                color: '#a55c94',
                border: '#fce8ee',
                background: 'white'
            },
            {
                name: 'B2C',
                color: '#a59c5d',
                border: '#bfb5bc',
                background: '#fffad4'
            }
        ],
        tags: [
            '#B2BMarketing',
            '#RentalTrade',
        ],
        meeting: {
            time: "No contact",
            text: '#af835e',
            border: '#fee6d3',
            background: '#fffcf3'
        }
    },
    {
        id: 10,
        brand: "Invision",
        description: "Digital product design platform that enables teams to create and collaborate on prototypes, design systems, and workflows for web and mobile applications.",
        logo: "/images/invision.svg",
        memberImages: [
            '/images/members/5.avif',
            '/images/members/10.avif',
        ],
        categories: [
            {
                name: 'Web Services',
                color: '#70a6b6',
                border: '#7ec6dc',
                background: 'white'
            }
        ],
        tags: [
            '#APIIntegration',
        ],
        meeting: {
            time: "Next month",
            text: 'gray',
            background: 'white',
            border: 'gray'
        }
    }
];

export default Product;
