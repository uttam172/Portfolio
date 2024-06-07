import { skills } from '../constants'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const About = () => {
    return (
        <section className="max-container">

            <h className='head-text'>
                hello, i'm <span className="blue-gradient_text font-semibold drop-shadow">Uttam</span>
            </h>

            <div className="mt-5 flex- flex-col gap-3 text-slate-500">
                <p>Software Engineer based in India. Software engineering is more than code for me. It's about building experiences that make a difference. Dive into my work and discover how I can contribute to your vision.</p>
            </div>

            <div className="py-10 flex flex-col">

                <h3 className="subhead-text">My Skills</h3>

                <div className="mt-16 flex flex-wrap gap-12">

                    {skills.map((skill) => (
                        <div className="block-container w-20 h-20">
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
                
                </div>
            </div>
        </section>
    )
}

export default About