// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/logo.svg',
		alt: 'Quality Inn Logo',
		text: 'Quality Inn'
	},
	navItems: [
		{ name: 'Home', link: '/' },
		{ name: 'Our Hotel', link: '/features' },
		{ name: 'Blog', link: '/blog' },
		// { name: 'Terms', link: '/terms' },
		// {
		// 	name: 'Resources',
		// 	link: '#',
		// 	submenu: [
		// 		{ name: 'Blog', link: '/blog' },
		// 		{ name: 'Changelog', link: '/changelog' },
		// 		{ name: 'FAQ', link: '/faq' },
		// 		{ name: 'Terms', link: '/terms' }
		// 	]
		// },
		{ name: 'Contact', link: '/contact' }
	],
	navActions: [{ name: 'Book Now', link: 'https://www.choicehotels.com/en-uk/pennsylvania/philadelphia/quality-inn-hotels/pa271?hotel=pa271&mc=frmlxxpx', style: 'primary', size: 'lg' }]
}
