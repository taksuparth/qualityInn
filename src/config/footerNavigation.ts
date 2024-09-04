// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface DevelopedBy {
	title: string
	website: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
	developedBy: DevelopedBy
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'Quality Inn Center City',
		aboutText:
			'Quality Inn Center City is a 3-star hotel located in the heart of the city. We offer a range of services including free Wi-Fi, a 24-hour front desk, and a fitness center. Our hotel is perfect for business travelers and tourists alike.',
		logo: {
			src: '/logo.svg',
			alt: 'Qualitu Inn Center City Logo',
			text: 'Quality Inn Center City'
		}
	},
	footerColumns: [
		{
			category: 'Social Media',
			subCategories: [
				{
					subCategory: 'Facebook',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Instagram',
					subCategoryLink: '/'
				},
				{
					subCategory: 'Twitter',
					subCategoryLink: '/'
				},
				{
					subCategory: 'LinkedIn',
					subCategoryLink: '/'
				}
			]
		},
		{
			category: 'About us',
			subCategories: [
				{
					subCategory: 'Our Hotel',
					subCategoryLink: '/features'
				},
				{
					subCategory: 'Places to visit',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Contact',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Support',
					subCategoryLink: '/contact'
				},
				{
					subCategory: 'Join us',
					subCategoryLink: '/contact'
				}
			]
		}
	],
	subFooter: {
		copywriteText: '© Quality Inn 2024.',
	},
	developedBy: {
		title: 'Sole Point Tech Solution',
		website: 'https://solepoint.in'
	}
}
