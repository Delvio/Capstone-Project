import React from 'react'

// the purpose of this file is to show how to create a component that can be imported into
// a Page file so it can be rendered with some styling from Tailwind CSS

function Test() {
  return (
    <div className="bg-blue-500 text-white p-4 rounded-md">
    <h1 className="text-2xl font-bold">Welcome to MyComponent</h1>
    <p className="mt-2">This component is styled with Tailwind CSS!</p>
    <button className="mt-4 bg-white text-blue-500 px-4 py-2 rounded-md shadow">
      Click Me
    </button>
  </div>
  )
}

export default Test