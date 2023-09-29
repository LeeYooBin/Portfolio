import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Navbar from "../../components/navbar";
import NavLink from "../../components/navlink";
import ProfileImage from "../../components/profileImage";
import Section from "../../components/section";
import Heading from "../../components/heading";
import Text from "../../components/text";
import Title from "../../components/title";
import ExperienceCard from "../../components/experienceCard";
import ProjectCard from "../../components/projectCard";
import Footer from "../../components/Footer";
import * as S from './style';
import profile from "../../assets/profile.png";
import projects from "../../data/projects";
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedin } from 'react-icons/fa';

const Home = () => (
  <S.Content>
    <header>
      <Navbar>
        <NavLink href="#about">About</NavLink>
        <NavLink href="#experience">Experience</NavLink>
        <NavLink href="#projects">Projects</NavLink>
      </Navbar>
    </header>
    <main>
      <S.AboutSection id="about">
        <ProfileImage 
          src={profile}
          alt="Profile Image"
        />
        <div>
          <Heading>Hi, I'm Rob</Heading>
          <Text>
            My name is Roberdan and I am a 22 year old software developer with a passion for computing. 
            I am currently studying a bachelor's degree in computer science at the Federal University of Sergipe.
            Additionally, I have about a year of experience as a web/mobile developer using technologies such as React, 
            Typescript and Node.
            In my free time, I enjoy playing Games, workout and working on projects related to graphs and algorithms. 
            I am excited to share my skills and experience in the fields below.
          </Text>
        </div>
      </S.AboutSection>
      <Section id="experience">
        <Title>Work Experience</Title>
        <S.ExperiencesWrapper>
          <ExperienceCard
            title="Web/Mobile Development"
            company="1sti"
            local="Rio de Janeiro"
            date="Jul/22 - Jun/23"
          />
        </S.ExperiencesWrapper>
        <Title>Education</Title>
        <S.ExperiencesWrapper>
          <ExperienceCard
            title="Bachelor's Degree in Computer Science"
            company="UFS"
            local="Sergipe"
            date="Oct/20 - currently"
          />
        </S.ExperiencesWrapper>
      </Section>
      <Section id="projects">
        <Title>My Projects</Title>
        <S.ProjectsWrapper>
          {projects.map(project => (
            <ProjectCard
              key={uuidv4()}
              title={project.title}
              src={project.src}
              alt={project.alt}
              description={project.description}
              stacks={project.stacks}
              codeLink={project.code}
              previewLink={project.preview}
            />
          ))}
        </S.ProjectsWrapper>
      </Section>
    </main>
    <Footer>
      <S.Link href="https://github.com/LeeYooBin" target="_blank"><AiFillGithub /></S.Link>
      <S.Link href="https://www.linkedin.com/in/roberdan-santos/" target="_blank"><FaLinkedin /></S.Link>
    </Footer>
  </S.Content>
);

export default Home;