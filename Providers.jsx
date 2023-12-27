import { Client, Provider, cacheExchange, fetchExchange } from 'urql'

const client = new Client({
	url: 'https://graphql.datocms.com/',
	exchanges: [cacheExchange, fetchExchange],
	fetchOptions: () => {
		const token = import.meta.env.VITE_DATOCMS_TOKEN
		return {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Bearer ${token}`,
			},
		}
	},
})
const Providers = ({ children }) => {
	return <Provider value={client}>{children}</Provider>
}

export default Providers
