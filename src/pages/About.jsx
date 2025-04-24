import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'

import { skills, experience, socialLinks } from '../constants'
import CTA from '../components/CTA'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <section className="max-container">

            <h1 className='head-text'>
                hello, i'm <span className="blue-gradient_text font-semibold drop-shadow">Uttam</span>
            </h1>

            <div className="mt-5 flex- flex-col gap-3 text-slate-500">
                <p>Software Engineer based in India. Software engineering is more than code for me. It's about building experiences that make a difference. Dive into my work and discover how I can contribute to your vision.</p>
            </div>

            <div className="py-10 flex flex-col">

                <h3 className="subhead-text">My Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">

                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20" key={skill.name}>
                            <div className="btn-back rounded-xl" />
                            <div className="btn-front rounded-xl flex justify-center items-center">
                                <img
                                    src={skill.imageUrl}
                                    alt={skill.name}
                                    className="w-1/2 h-1/2 object-contain"
                                />
                            </div>
                        </div>
                    ))}

                </div>

            </div>

            <div className="py-16">

                <h3 className="subhead-text">Work Experience</h3>

                <div className="mt-5 flex- flex-col gap-3 text-slate-500">
                    <p>Though I'm new to the industry, my eagerness to learn has allowed me to adapt and contribute across diverse projects for various companies, leveling up my skills and teaming up with smart people. Here's the rundown:</p>
                </div>

                <div className="mt-12 flex">
                    <VerticalTimeline>
                        {experience.map((experience) => (
                            <VerticalTimelineElement
                                key={experience.date}
                                date={experience.date}
                                icon={
                                    <div className='flex justify-center items-center w-full h-full'>
                                        <img
                                            src={experience.icon}
                                            alt={experience.company_name}
                                            className="w-[90%] h-[90%] object-contain"
                                        />
                                    </div>
                                }
                                iconStyle={{ background: experience.iconBg }}
                                contentStyle={{
                                    borderBottom: '8px',
                                    borderStyle: 'solid',
                                    borderBottomColor: experience.iconBg,
                                    boxShadow: 'none',
                                    borderRadius: "25px"
                                }}
                            >
                                <div>
                                    <h3 className="text-black text-xl font-poppins font-semibold">{experience.title}</h3>

                                    <p className="text-black-500 font-medium font-base" style={{ margin: 0 }}>{experience.company_name}</p>

                                    <p>{experience.description}</p>
                                </div>

                                <ul className="my-5 list-disc ml-5 space-y-2">
                                    {experience.points.map((point, index) => (
                                        <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>

            <hr className='border-slate-200' />

            <div className="flex justify-center items-center gap-20 my-10">
                {socialLinks.map((link) => (
                    <>
                        <Link to={link.link} key={link.name} target={link.target}>
                            <div className="block-container w-20 h-20 ">
                                <div className="btn-back rounded-xl shadow-2xl bg-gradient-to-br from-[#00c6ff]/30 to-[#0072ff]/30" />
                                <div className="btn-front rounded-xl flex justify-center items-center">
                                    <img
                                        src={link.iconUrl}
                                        alt={link.name}
                                        className="w-1/2 h-1/2 object-contain"
                                    />
                                </div>
                            </div>
                        </Link>
                    </>
                ))}
            </div>

            <hr className='border-slate-200' />

            <CTA />

        </section>
    )
}

export default About