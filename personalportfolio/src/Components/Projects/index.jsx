import React from 'react';

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold font-serif text-black-500 mb-6 border-b-4 border-yellow-500 pb-2">
        Projects
      </h1>
      <div className="flex max-w-4xl flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[350px] md:w-[400px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div className="w-full">
        <div className="p-4">
          <h1 className="inline-flex items-center text-xl h-12 font-serif font-semibold" style={{ lineHeight: '3rem' }}>
            Project Name
          </h1>
          <p className="mt-3 text-base text-gray-600">
            I created this personal project to show how to create an interface in Figma using a Portfolio as an example.
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <button style={{ border: '1px solid black' }} className='mb-2 rounded-full px-4 py-2 text-base font-semibold text-gray-900 btn bg-gray-100' >View Project</button>
          </div>
        </div>
      </div>

      </div>
    </div>
  );
}
