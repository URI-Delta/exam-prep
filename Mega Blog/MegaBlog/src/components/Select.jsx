import React, {useId}from 'react'

function Select({
    options,
    label,
    clasName='',
    ...props
},ref ) {
    const id =useId()
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className={`${clasName}`} ></label>}

        <select {...props} ref={ref} id={id} 
        className={`${clasName} px-3 py-2 rounded-lg bg-white text-black outline-none`}
        >
            {options?.map((option)=>(
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)