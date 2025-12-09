import dynamic from "next/dynamic"

const AutoPlaySlider = dynamic(() => import('./slider/AutoPlaySlider'))
const AutoScrollSlider = dynamic(() => import('./slider/AutoScrollSlider'))
const Header = dynamic(() => import('./header/Header'))
const Footer = dynamic(() => import('./footer/Footer'))
const Nav = dynamic(() => import('./nav/Nav'))
const Socials = dynamic(() => import('./socials/Socials'))
const Hero = dynamic(() => import('./hero/Hero'))
const ProjectsBtn = dynamic(() => import('./projectsbtn/ProjectsBtn'))
const ParticlesContainer = dynamic(() => import('./particlescontainer/ParticlesContainer'))
const About = dynamic(() => import('./about/About'))
const Contact = dynamic(() => import('./contact/Contact'))
const Work = dynamic(() => import('./work/Work'))
const FolioCards = dynamic(() => import('./foliocards/FolioCards'))
const SkillCards = dynamic(() => import('./skillcards/SkillCards'))
const ExpericenceCards = dynamic(() => import('./expericencecards/ExpericenceCards'))
const EducationCards = dynamic(() => import('./educationcards/EducationCards'))
const CertificationCards = dynamic(() => import('./certificationcards/CertificationCards'))
const Form = dynamic(() => import('./form/Form'))
const Thankyou = dynamic(() => import('./thankyou/ThankYou'))

export {
    AutoPlaySlider,
    AutoScrollSlider,
    Header,
    Footer,
    Nav,
    Socials,
    Hero,
    ProjectsBtn,
    ParticlesContainer,
    About,
    Contact,
    Work,
    FolioCards,
    SkillCards,
    ExpericenceCards,
    EducationCards,
    CertificationCards,
    Form,
    Thankyou,
}