import React from 'react'
import { RiGithubLine, RiLinkedinBoxLine } from 'react-icons/ri'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import Card from "../uiComponents/Card";
import CardText from "../uiComponents/CardText";
import agusPic from '../../assets/img/TeamPics/Agus.jpeg'
import alberPic from '../../assets/img/TeamPics/Alber.jpeg'
import diegoPic from '../../assets/img/TeamPics/Diego.jpeg'
import facuPic from '../../assets/img/TeamPics/Facu.jpeg'
import francoDPic from '../../assets/img/TeamPics/FrancoD.jpeg'
import francoMPic from '../../assets/img/TeamPics/FrancoM.jpeg'
import mateoPic from '../../assets/img/TeamPics/Mateo.jpeg'
import matiPic from '../../assets/img/TeamPics/Mati.jpeg'
import Button from '../uiComponents/Button';


export default function AboutUsComp () {

    const team = [
        { index: 0, name: 'Agustín', lastname: 'Vázquez', github: 'https://github.com/Agutricolor', linkedin: 'https://www.linkedin.com/in/agustin-v%C3%A1zquez-a939771b0/', photo: agusPic, description: "I'm a Fullstack Web Developer, focused on backend and problem solving." },
        { index: 1, name: 'Alberto', lastname: 'Díaz Lugo', github: 'https://github.com/andresDiazLugo', linkedin: 'https://www.linkedin.com/in/alberto-andres-diaz-lugo-91b0a0239', photo: alberPic, description: "I'm a Fullstack Web Developer, focused on backend and solving problems." },
        { index: 2, name: 'Diego Alonso', lastname: 'Gutierrez', github: 'https://github.com/DiegoAlonsoG', linkedin: 'https://www.linkedin.com/in/diegoalonsogm/', photo: diegoPic, description: "Hi! I'm a Junior developer with background in Supply Chain, Finances and Processes Management. Passionate for knowledge and dynamic processes." },
        { index: 3, name: 'Facundo', lastname: 'Pérez Brizuela', github: 'https://github.com/facuperezbri', linkedin: 'https://www.linkedin.com/in/facuperezbri/', photo: facuPic, description: "Hi! My name is Facu and I'm a Full Stack developer, specialized in Frontend with a background in Business Administration." },
        { index: 4, name: 'Franco', lastname: 'Maciel', github: 'https://github.com/FrM-bot', linkedin: 'https://www.linkedin.com/in/franco-maciel', photo: francoDPic, description: 'Hi, I\'m Franco Damián Maciel and I\'m a full stack web developer.' },
        { index: 5, name: 'Franco', lastname: 'Meinardo', github: 'https://github.com/francomei', linkedin: 'https://www.linkedin.com/in/franco-meinardo/', photo: francoMPic, description: "Hi, I'm Franco. I 'm 19 year old Full stack developer." },
        { index: 6, name: 'Mateo', lastname: 'Capdevila Ontivero', github: 'https://github.com/mateocpd', linkedin: 'https://www.linkedin.com/in/mateocapdevila', photo: mateoPic, description: "Hi, my name is Mateo and I'm a Full Stack developer. Currently studying Systems Engineering." },
        { index: 7, name: 'Matías', lastname: 'Britez', github: 'https://github.com/mattbritez7', linkedin: 'https://www.linkedin.com/in/matias-britezdev/', photo: matiPic, description: 'Hi im matt! 21 years old, frontend enginner web' }

    ]

    return (
        <section className='flex flex-col justify-start items-center mx-auto my-auto p-5'>
            <h1 className='text-5xl mb-8 font-bold'>Meet the team!</h1>
            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-x-24 gap-y-10'>
                {
                    team.map((member, i) => (
                        <li className='flex' key={i}>

                            <Card className="flex flex-col sm:flex-row w-full">

                                <div className="flex flex-col gap-2 justify-start">
                                    <div className='grid w-96 grid-cols-1 md:grid-cols-2 gap-2'>
                                        <CardText>
                                            <div className='flex flex-col'>
                                                <span>
                                                    {member.name}
                                                </span>
                                                <span>
                                                    {member.lastname}
                                                </span>
                                            </div>
                                        </CardText>
                                        <div className='flex w-40 flex-wrap items-center justify-center gap-3 '>
                                            <a href={member.github} target='_blank'><FaGithub size={40} className='hover:scale-110 duration-300' /></a>
                                            <a href={member.linkedin} target='_blank'><FaLinkedinIn size={40} className='hover:scale-110 duration-300' /></a>
                                        </div>
                                    </div>
                                    <p className='w-80'>{member.description}</p>
                                    {
                                        member?.prtfolio && <Button><a href={member?.prtfolio} target="blank" rel="noopener noreferrer">Portfolio</a></Button>
                                    }
                                </div>

                                <img className='w-32 h-32 rounded-full' src={member.photo} alt={member.name} />

                            </Card>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
