import { gql, useQuery } from 'urql'

const query = gql`
	query {
		allProjects {
			id
			name
			description
			screenshots {
				url
			}
			liveSiteLink
			githubLink
			_status
			_firstPublishedAt
		}
	}
`

const Projects = () => {
	const [result] = useQuery({ query })
	const { data, fetching, error } = result

	if (fetching)
		return (
			<>
				<p className='my-5'>Fetching data on my greatness....</p>
			</>
		)

	if (error) {
		return <p>Uh, oh. Check your internet connection and try again</p>
	}

	if (data) {
		console.log(data)
		return (
			<>
				<p className='text-base'>A couple of things i built</p>

				{data.allProjects.map((item) => (
					<Project
						name={item.name}
						description={item.description}
						githubLink={item.githubLink}
						liveSiteLink={item.liveSiteLink}
					/>
				))}
			</>
		)
	}
}

export default Projects

const Project = ({ name, githubLink, liveSiteLink, description }) => {
	return (
		<div className='flex flex-col gap-4 my-8'>
			<p className='text-xl font-bold'> {name} *</p>
			<p>{description}</p>

			<div className='flex flex-row gap-4'>
				<a
					href={liveSiteLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					Live site
				</a>{' '}
				|
				<a
					href={githubLink}
					target='_blank'
					rel='noopener noreferrer'
				>
					Github Link
				</a>
			</div>
		</div>
	)
}
