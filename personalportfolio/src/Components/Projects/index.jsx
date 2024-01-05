// E:\Projects\Motherson\personalportfolio\src\Components\Projects\index.jsx
import React from 'react';

const Projects = ({ projectsData }) => {
  const hasProjects = projectsData && projectsData.length > 0;

  return (
    <div className="flex flex-col items-center justify-center mt-8">
      {hasProjects && (
        <h1 className="text-4xl font-bold font-serif text-black-500 mb-6 border-b-4 border-yellow-500 pb-2">
          Projects
        </h1>
      )}
      
      {hasProjects ? (
        projectsData.map((project) => (
          <div key={project.id} className="flex flex-col items-center rounded-md border max-w-4xl md:flex-row mb-4">
            <div className="w-full">
              <div className="p-4">
                <h1 className="inline-flex items-center text-xl h-12 font-serif font-semibold" style={{ lineHeight: '3rem' }}>
                  {project.projectName}
                </h1>
                <p className="mt-3 text-base text-gray-600">
                  {project.description}
                </p>
                <div className="mt-3 flex items-center space-x-2">
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer" style={{ border: '1px solid black' }} className='mb-2 rounded-full px-4 py-2 text-base font-semibold text-gray-900 btn bg-gray-100' >View Project</a>
                </div>
              </div>
            </div>
            <div className="h-full w-full md:h-[350px] md:w-[400px]">
              <img
                src={project.imageUrl}
                alt={project.projectName}
                className="h-full w-full rounded-md object-cover"
              />
            </div>
          </div>
        ))
      ) : (
        <p className="mt-4 text-gray-600">Your Projects will be displayed here</p>
      )}
    </div>
  );
};

export default Projects;
