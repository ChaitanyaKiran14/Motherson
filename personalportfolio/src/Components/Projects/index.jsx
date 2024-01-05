import React from 'react'

export  default function Projects() {
  return (
    
    <div className="flex max-w-2xl flex-col items-center rounded-md border md:flex-row">
      <div className="h-full w-full md:h-[250px] md:w-[300px]">
        <img
          src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="Laptop"
          className="h-full w-full rounded-md object-cover"
        />
      </div>
      <div>
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold">
            Project Name
          </h1>
          <p className="mt-3 text-sm text-gray-600">
            I created this personal project inorder to show how to create an interfce in Figma using a Portfolio as example
          </p>
          <div className="mt-3 flex items-center space-x-2">
            <button  style={{ border: '1px solid black' }} className='mb-2 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-900 btn bg-gray-100'  >View Project</button>
          </div>
        </div>
      </div>
    </div>
  )
}
