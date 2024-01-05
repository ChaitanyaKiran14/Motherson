import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import AddProject from '../AddProject';
import Projects from '../Projects';
import Footer from '../Footer';
import './index.css'

export function LandinngPageOne() {
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
                  Short text with details about you, what you do, or your professional career. 
                  You can add more information on the about page.
                </p>
                <div className="btn-conter">
                  <button to="projects" className="btn border-t-neutral-950 project-btn">Projects</button>
                  <button className="linkdin-btn">Linkedin</button>
                </div>
              </div>
              
            </div>
            <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6 bg-container1">
              <img
                className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
                src="https://www.freepik.com/free-photo/young-woman-holding-bunch-flowers_1211898.htm#query=girl%20with%20flower%20image%20for%20protofile&position=9&from_view=search&track=ais&uuid=a64661a4-4709-48dc-b451-f55c4c6541d7"
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
