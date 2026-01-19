import React from 'react'

function Button({
    children,
    type ='button',
    bgColor = 'bg-blue-300',
    textColor = "text-white",
    className='',
    ...props
}) {
  return (
    <button
    className={`px-4 py-3 ${className} ${bgColor} ${textColor} `} {...props}
    >
        {children}
    </button>
)
}

export default Button