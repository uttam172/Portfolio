import { Link } from 'react-router-dom'
import { project } from '../constants'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
    return (
        <section className="max-container">

            <h1 className='head-text'>
                My <span className="blue-gradient_text font-semibold drop-shadow">Projects</span>
            </h1>

            <div className="mt-5 flex- flex-col gap-3 text-slate-500">
                <p>I've embarked on numerous projects throughout the years, but these are the ones i hold closest to my heart. many of them are open-source, so if you came across something that piques your intrest, feel free to explore the codebase and your collaboration is highly valued!</p>
            </div>

            <div className="flex flex-wrap my-20 gap-16">
                {project.map((project) => (
                    <div className='lg:w-[400px] w-full' key={project.name}>
                        <div className="block-container w-12 h-12">
                            <div className={`btn-back rounded-xl ${project.theme}`} />
                            <div className='btn-front rounded-xl flex justify-center items-center'>
                                <img
                                    src={project.iconUrl}
                                    alt="Project Icon"
                                    className='w-2/3 h-2/3 object-contain'
                                />
                            </div>
                        </div>

                        <div className="mt-5 flex flex-col">
                            <h4 className='text-xl font-poppins font-semibold'>
                                {project.name}
                            </h4>
                            <p className='mt-2 text-slate-500'>{project.description}</p>
                            <div className='mt-5 flex items-center gap-2 font-poppins'>
                                <Link
                                    to={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className='font-semibold text-blue-600'
                                >
                                    Live Link
                                </Link>
                                <img
                                    src={arrow}
                                    alt="arrow"
                                    className='w-4 h-4 object-contain'
                                />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />

        </section>
    )
}

export default Projects