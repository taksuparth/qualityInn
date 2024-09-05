// Config
// ------------
// Description: The configuration file for the website.

export interface Logo {
	src: string
	alt: string
}

export type Mode = 'auto' | 'light' | 'dark'

export interface Config {
	siteTitle: string
	siteDescription: string
	ogImage: string
	logo: Logo
	canonical: boolean
	noindex: boolean
	mode: Mode
	scrollAnimations: boolean
}

export const configData: Config = {
	siteTitle: 'Quality Inn Center City',
	siteDescription:
		'Quality Inn Center City is a 3-star hotel located in the heart of the city. We offer a range of services including free Wi-Fi, a 24-hour front desk, and a lot more. Our hotel is perfect for business travelers and tourists alike.',
	ogImage: '/logo.png',
	logo: {
		src: '/logo.png',
		alt: 'Quality Inn Center City Logo'
	},
	canonical: true,
	noindex: false,
	mode: 'auto',
	scrollAnimations: true
}
