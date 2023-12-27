import '@fontsource/space-mono/400.css'
import '@fontsource/space-mono/700.css'
import '@fontsource/space-mono/400-italic.css'
import '@fontsource/space-mono/700-italic.css'
import PLayer from './Name Pronunciation'
import CV from './assets/01-Iyi-CV.pdf'
import Projects from './Projects'

function App() {
	return (
		<div className='min-h-screen bg-[#1F2623]'>
			<div className='lg:max-w-3xl max-w-xs mx-auto flex flex-col justify-center pt-28'>
				<div className='flex lg:flex-row flex-col gap-4 lg:gap-0 justify-between mb-12'>
					<div className='flex flex-row gap-8 items-center'>
						<h1 className='lg:text-6xl text-4xl font-bold'>
							Iyi-mi-de
						</h1>
						<PLayer />
					</div>

					<a
						href={CV}
						download={"Iyimide's CV"}
					>
						<div className='w-40 rounded-full flex items-center justify-center py-2 mr-5 bg-green-400 mt-3'>
							<div className='flex flex-row gap-3 items-center text-black text-md font-semibold'>
								MY CV
								<CiDownload />
							</div>
						</div>
					</a>
				</div>

				<p>
					This site serves as my work portfolio and online brag doc.{' '}
				</p>

				<p className='my-8'>
					I’m a{' '}
					<span className='italic tracking-wider'>Full-stack</span>{' '}
					developer.
				</p>

				<p>
					When I’m not coding, I play basketball or contemplate time
					travel deeply.
				</p>
				<p className='text-6xl'></p>

				<h2 className='mt-16 mb-4 text-lg uppercase tracking-wider underline-offset-4 underline'>
					Here's some proof I can{' '}
					<span className='italic tracking-tight leading-loose'>
						actually
					</span>{' '}
					code.
				</h2>

				<Projects />

				<h2 className='mt-12 text-lg uppercase tracking-wider underline-offset-4 underline'>
					Programming languages I{' '}
					<span className='italic tracking-tight leading-loose'>
						code in
					</span>{' '}
				</h2>

				<div className='flex flex-row flex-wrap mt-4 gap-4'>
					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>Javascript</p>
					</div>

					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>Typescript</p>
					</div>

					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>Java</p>
					</div>

					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>C#</p>
					</div>
				</div>

				<h2 className='mt-12 text-lg uppercase tracking-wider underline-offset-4 underline'>
					Fullstack Frameworks I{' '}
					<span className='italic tracking-tight leading-loose'>
						Use
					</span>{' '}
				</h2>

				<div className='flex flex-row flex-wrap mt-4 gap-4 mb-24'>
					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>Next.js</p>
					</div>

					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>Fresh (Deno) </p>
					</div>

					<div className='lg:py-3 py-1 px-3 lg:px-4 bg-green-400 w-auto rounded-xl'>
						<p className='text-black'>AdonisJS</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App

export const CiDownload = (props) => (
	<svg
		width='1em'
		height='1em'
		viewBox='0 0 24 24'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<path
			fill='none'
			stroke='#000000'
			strokeLinecap='round'
			strokeLinejoin='round'
			strokeWidth='2'
			d='M6 21h12M12 3v14m0 0l5-5m-5 5l-5-5'
		></path>
	</svg>
)
