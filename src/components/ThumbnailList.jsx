import React from 'react'

function ThumbnailList() {
  return (
    <div className='flex'>
    <div className='w-full md:w-1/2 grid grid-cols-1 md:grid-cols-3 bg-yellow-100 rounded shadow px-3 md:px-5 py-3 md:py-5 m-5'>
    <img className='w-full md:w-auto h-auto md:h-20 md:rounded-l' src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.hindustantimes.com%2Findia-news%2Fworlds-second-largest-hindu-temple-outside-india-to-be-inaugurated-in-us-on-october-8-all-you-need-to-know-101695615793945.html&psig=AOvVaw1L7Uga9zs9g1CtoNDiKYAO&ust=1710140382027000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMCvmcWP6YQDFQAAAAAdAAAAABAJ'/>
    <span className='md:col-span-2 m-1'>
      Name of the Heritage
    </span>
  </div>
  </div>
  )
}

export default ThumbnailList