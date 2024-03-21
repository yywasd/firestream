/** @type {import('./$types').PageLoad} */
import {
    ClipboardListSolid,
    CogOutline,
    FileChartBarSolid,
    GithubSolid,
    LayersSolid,
    LifeSaverSolid,
    LockSolid,
    WandMagicSparklesSolid,
    ChartPieSolid,
    RectangleListSolid,
    TableColumnSolid,
    ArchiveSolid,
    ArrowRightToBracketOutline,
    DollarOutline,
    InboxOutline,
    ProfileCardOutline,
    SalePercentOutline,
    ShoppingBagSolid,
    UsersGroupSolid,
    DiscordSolid,
	DribbbleSolid,
	FacebookSolid,
	TwitterSolid
} from 'flowbite-svelte-icons';


const menu = [
    { name: 'Sales', href: '/sales', icon: ShoppingBagSolid },
    { name: 'Users', href: '/users', icon: UsersGroupSolid },
    { name: 'Inbox', href: '/inbox', icon: InboxOutline },
    { name: 'Profile', href: '/profile', icon: ProfileCardOutline },
    { name: 'Settings', href: '/settings', icon: CogOutline },
    { name: 'Prouducts', href: '/products', icon: ArchiveSolid },
    { name: 'Pricing', href: '/pricing', icon: DollarOutline },
    { name: 'Billing', href: '/billing', icon: SalePercentOutline },
    { name: 'Logout', href: '/logout', icon: ArrowRightToBracketOutline }
];

let posts = [
    { name: 'Dashboard', icon: ChartPieSolid, href: '/dashboard' },
    {
        name: 'Layouts',
        icon: TableColumnSolid,
        children: {
            Stacked: '/layouts/stacked',
            Sidebar: '/layouts/sidebar'
        }
    },
    {
        name: 'CRUD',
        icon: RectangleListSolid,
        children: {
            Products: '/crud/products',
            Users: '/crud/users'
        }
    },
    { name: 'Settings', icon: CogOutline, href: '/settings' },
    {
        name: 'Pages',
        icon: FileChartBarSolid,
        children: {
            Pricing: '/pages/pricing',
            Maintenance: '/errors/400',
            '404 not found': '/errors/404',
            '500 server error': '/errors/500'
        }
    },
    {
        name: 'Authenication',
        icon: LockSolid,
        children: {
            'Sign in': '/authentication/sign-in',
            'Sign up': '/authentication/sign-up',
            'Forgot password': '/authentication/forgot-password',
            'Reset password': '/authentication/reset-password',
            'Profile lock': '/authentication/profile-lock'
        }
    },
    {
        name: 'Playground',
        icon: WandMagicSparklesSolid,
        children: {
            Stacked: '/playground/stacked',
            Sidebar: '/playground/sidebar'
        }
    }
];

let links = [
    {
        label: 'GitHub Repository',
        href: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard',
        icon: GithubSolid
    },
    {
        label: 'Flowbite Svelte',
        href: 'https://flowbite-svelte.com/docs/pages/quickstart',
        icon: ClipboardListSolid
    },
    {
        label: 'Components',
        href: 'https://flowbite-svelte.com/docs/components/accordion',
        icon: LayersSolid
    },
    {
        label: 'Support',
        href: 'https://github.com/themesberg/flowbite-svelte-admin-dashboard/issues',
        icon: LifeSaverSolid
    }
];


let users = [
	{
		"id": 1,
		"name": "Neil Sims",
		"avatar": "neil-sims.png",
		"email": "neil.sims@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Front-end developer",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 2,
		"name": "Roberta Casas",
		"avatar": "roberta-casas.png",
		"email": "roberta.casas@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Designer",
		"country": "Spain",
		"status": "Active"
	},
	{
		"id": 3,
		"name": "Michael Gough",
		"avatar": "michael-gough.png",
		"email": "michael.gough@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "React developer",
		"country": "United Kingdom",
		"status": "Active"
	},
	{
		"id": 4,
		"name": "Jese Leos",
		"avatar": "jese-leos.png",
		"email": "jese.leos@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Marketing",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 5,
		"name": "Bonnie Green",
		"avatar": "bonnie-green.png",
		"email": "bonnie.green@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "UI/UX Engineer",
		"country": "Australia",
		"status": "Offline"
	},
	{
		"id": 6,
		"name": "Thomas Lean",
		"avatar": "thomas-lean.png",
		"email": "thomas.lean@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Vue developer",
		"country": "Germany",
		"status": "Active"
	},
	{
		"id": 7,
		"name": "Helene Engels",
		"avatar": "helene-engels.png",
		"email": "helene.engels@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Product owner",
		"country": "Canada",
		"status": "Active"
	},
	{
		"id": 8,
		"name": "Lana Byrd",
		"avatar": "lana-byrd.png",
		"email": "lana.byrd@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Designer",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 9,
		"name": "Leslie Livingston",
		"avatar": "leslie-livingston.png",
		"email": "leslie.livingston@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Web developer",
		"country": "France",
		"status": "Offline"
	},
	{
		"id": 10,
		"name": "Robert Brown",
		"avatar": "robert-brown.png",
		"email": "robert.brown@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Laravel developer",
		"country": "Russia",
		"status": "Active"
	},
	{
		"id": 11,
		"name": "Neil Sims",
		"avatar": "neil-sims.png",
		"email": "neil.sims@flowbite.com",
		"position": "Front-end developer",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 12,
		"name": "Roberta Casas",
		"avatar": "roberta-casas.png",
		"email": "roberta.casas@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Designer",
		"country": "Spain",
		"status": "Active"
	},
	{
		"id": 13,
		"name": "Michael Gough",
		"avatar": "michael-gough.png",
		"email": "michael.gough@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "React developer",
		"country": "United Kingdom",
		"status": "Active"
	},
	{
		"id": 14,
		"name": "Jese Leos",
		"avatar": "jese-leos.png",
		"email": "jese.leos@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Marketing",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 15,
		"name": "Bonnie Green",
		"avatar": "bonnie-green.png",
		"email": "bonnie.green@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "UI/UX Engineer",
		"country": "Australia",
		"status": "Offline"
	},
	{
		"id": 16,
		"name": "Thomas Lean",
		"avatar": "thomas-lean.png",
		"email": "thomas.lean@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Vue developer",
		"country": "Germany",
		"status": "Active"
	},
	{
		"id": 17,
		"name": "Helene Engels",
		"avatar": "helene-engels.png",
		"email": "helene.engels@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Product owner",
		"country": "Canada",
		"status": "Active"
	},
	{
		"id": 18,
		"name": "Lana Byrd",
		"avatar": "lana-byrd.png",
		"email": "lana.byrd@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Designer",
		"country": "United States",
		"status": "Active"
	},
	{
		"id": 19,
		"name": "Leslie Livingston",
		"avatar": "leslie-livingston.png",
		"email": "leslie.livingston@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Web developer",
		"country": "France",
		"status": "Offline"
	},
	{
		"id": 20,
		"name": "Robert Brown",
		"avatar": "robert-brown.png",
		"email": "robert.brown@flowbite.com",
		"biography": "I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.",
		"position": "Laravel developer",
		"country": "Russia",
		"status": "Active"
	}
]

const footerlinks = [
    { name: 'Terms and conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Licensing', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Contact', href: '#' }
];

const brands = [
    [FacebookSolid, ''],
    [DiscordSolid, ''],
    [TwitterSolid, ''],
    [GithubSolid, ''],
    [DribbbleSolid, '']
];

const imgDir = 'https://flowbite-admin-dashboard.vercel.app/images';
const avatarPath = (src) => imgDir + '/users/' + src;
const imagesPath = (src, ...subdirs) => [imgDir, ...subdirs, src].filter(Boolean).join('/');

export async function load() {
    return {
        posts: posts,
        links: links,
        menu: menu,
        avatarPath: avatarPath,
        imagesPath: imagesPath,
        users: users,
        footerlinks: footerlinks,
        brands: brands
    };
};