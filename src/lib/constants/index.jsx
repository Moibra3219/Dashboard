import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'Pipelines',
		label: 'Pipelines',
		path: '/',
		icon: <HiOutlineAnnotation />
	},
	{
		key: 'Dashboard',
		label: 'Dashboard',
		path: '/dashboard',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	{
		key: 'Contacts',
		label: 'Contacts',
		path: '/Contacts',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'Compaines',
		label: 'Compaines',
		path: '/Compaines',
		icon: <HiOutlineUsers />
	},
	{
		key: 'Activites',
		label: 'Activites',
		path: '/Activites',
		icon: <HiOutlineDocumentText />
	},
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
	{
		key: 'support',
		label: 'Help & Support',
		path: '/support',
		icon: <HiOutlineQuestionMarkCircle />
	}
]
