import React, { useState } from 'react';
import Projects from '../Projects';
import { v4 as uuid } from 'uuid';


const initialProjectsData = [
  {
    id: uuid(),
    projectName: 'Project Name',
    projectLink: 'https://example.com/project1',
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
    description: 'I created this personal project to show how to create an interface in Figma using a Portfolio as an example.',
  },
  
];

const AddProject = () => {
  const [formData, setFormData] = useState({
    projectName: '',
    projectLink: '',
    imageUrl: '',
    description: '',
  });

  const [projectsData, setProjectsData] = useState(initialProjectsData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: uuid(),
      ...formData,
    };
    setProjectsData((prevProjects) => [...prevProjects, newProject]);
    
    setFormData({
      projectName: '',
      projectLink: '',
      imageUrl: '',
      description: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold font-serif text-black-500 mb-6 border-b-4 border-yellow-500 pb-2">
        Add Project
      </h1>

      <form
        className="w-full max-w-md p-4 md:p-8 rounded-md relative"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Project Name</label>
          <input
            className="w-full h-12 md:h-14 border-2 rounded-md p-2 mt-2"
            type="text"
            placeholder="Enter project name"
            name="projectName"
            value={formData.projectName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Project Link</label>
          <input
            className="w-full h-12 md:h-14 border-2 rounded-md p-2 mt-2"
            type="text"
            placeholder="Enter project link"
            name="projectLink"
            value={formData.projectLink}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Image Url</label>
          <input
            className="w-full h-12 md:h-14 border-2 rounded-md p-2 mt-2"
            type="text"
            placeholder="Enter image url"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-600">Description</label>
          <textarea 
            className="w-full mb-5 h-32 md:h-40 border-2 rounded-md p-2 mt-2 overflow-auto"
            placeholder="Enter project description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md absolute bottom-4 right-4"
          type="submit"
        >
          Add
        </button>
      </form>
      
      <Projects projectsData={projectsData} />
    </div>
  );
};

export default AddProject;
