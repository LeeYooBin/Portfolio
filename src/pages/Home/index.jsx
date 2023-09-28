import React from "react";
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
          src="https://i.pinimg.com/736x/4c/01/6e/4c016e70bed7cebff99f1bec3b1f1c16.jpg"
          alt="Provisory"
        />
        <div>
          <Heading>Hi, I'm Rob</Heading>
          <Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi animi incidunt facilis dolores 
            tempora earum sed, beatae labore sequi voluptates, neque sunt laboriosam voluptatum? Suscipit 
            fugiat enim aspernatur provident dolores?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi animi incidunt facilis dolores 
            tempora earum sed, beatae labore sequi voluptates, neque sunt laboriosam voluptatum? Suscipit 
            fugiat enim aspernatur provident dolores?
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
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
          <ProjectCard
            src="https://t.ctcdn.com.br/JlHwiRHyv0mTD7GfRkIlgO6eQX8=/640x360/smart/i257652.jpeg"
            title="Project 1"
            description="This is sample project description random things are here in description 
            This is sample project lorem ipsum generator for dummy content"
            stacks="HTML, CSS, JS"
          />
        </S.ProjectsWrapper>
      </Section>
    </main>
    <Footer>
      <S.Link href="#" target="_blank"><AiFillGithub /></S.Link>
      <S.Link href="#" target="_blank"><FaLinkedin /></S.Link>
    </Footer>
  </S.Content>
);

export default Home;