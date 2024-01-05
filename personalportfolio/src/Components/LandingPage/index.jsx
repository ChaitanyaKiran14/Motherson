import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import AddProject from '../AddProject';
import Projects from '../Projects';
import Footer from '../Footer';
import './index.css'

export function LandingPage() {
  return (
    <div className="w-full">
      <section id="home">
        <div className="relative w-full bg-white">
          <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
              
              <div className="about-container">
                <h1 className="about-heading">UI/UX DESIGNER</h1>
                <p className="about-paragraph">Hello, my name is Madelyn Torff</p>
                <p className="length-paragraph mb-8">
                I'm a UX/UI designer who strives to create frictionless user experiences that elevate brands
                <br/>
                <br/>

                With a work history  rooted in brand marketing, I'm passionate about pushing products to the next level through a design process that included data-backed user research and visually stunning user-focussed UI.
                </p>
                <div className="btn-conter">
                  <button to="projects" className="btn border-t-neutral-950 project-btn w-40 font-semibold">Projects</button>
                  <button className="linkdin-btn w-40 font-semibold">Linkedin</button>
                </div>
              </div>
              
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 bg-container1">
              <img
                className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[600px] xl:aspect-[16/9]"
                src="https://th.bing.com/th/id/OIG.NaMd568P5eqKSV2uNHj9?w=1024&h=1024&rs=1&pid=ImgDetMain"
                alt="flower"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="addProject">
        <AddProject />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="footer">
        <Footer />
      </section>
    </div>
  );
}
