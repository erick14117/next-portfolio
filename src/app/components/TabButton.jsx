import React from 'react'

const TabButton = ({active, selectTab, children}) => {
const buttonClasses = active 
? 'text-white border-b border-white :text-[#DDDDDD]'
: 'text-red-500';

  return (
    <button onClick={selectTab}>
        <p className={'mr-3 font-semibold hover:text-white ${buttonClasses}' } >
        {children}
             </p>
       
    </button>
  )
}

export default TabButton