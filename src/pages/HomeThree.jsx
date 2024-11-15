import React from 'react';
import Slider from '../components/slider/home-v3';
import dataSlider from '../assets/fake-data/data-slider';
import About from '../features/about/home-v3';
import dataAbout from '../assets/fake-data/data-about';
import RoadMap from '../features/roadmap/home-v3';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Work from '../features/work/home-v3';
import dataWork from '../assets/fake-data/data-work';
import Project from '../features/project/home-v3';
import dataProject from '../assets/fake-data/dataProject';
import Team from '../features/team/home-v3';
import dataTeam from '../assets/fake-data/data-team';
import Partner from '../features/partner';
import dataPartner from '../assets/fake-data/data-partner';
import Blog from '../features/blog/home-v2';
import dataBlog from '../assets/fake-data/data-blog';
import FAQ from '../features/faq/home-v3';
import dataFaq from '../assets/fake-data/data-faq';
import Contact from '../pages/Contact';  // Import Contact component
import { Helmet } from 'react-helmet';
import Process from '../features/process';
import dataProcess from '../assets/fake-data/data-process';

function HomeThree(props) {
    return (
        <div className='home-3'>
            <Helmet>
                <title>Home 03</title>
            </Helmet>
            <Slider data={dataSlider} />

            <section id="about">
                <About data={dataAbout} />
            </section>

            <section id="roadmap">
                <RoadMap data={dataRoadmap} />
            </section>

            <section id="work">
                <Work data={dataWork} />
            </section>

            <section id="nft">
                <Project data={dataProject} />
            </section>

            <section id="process">
                <Process data={dataProcess} />
            </section>

            <section id="team">
                <Team data={dataTeam} />
            </section>

            <section id="blog">
                <Blog data={dataBlog} />
            </section>

            <section id="faq">
                <FAQ data={dataFaq} />
            </section>

            <section id="contact">
                <Contact />
            </section>
        </div>
    );
}

export default HomeThree;
