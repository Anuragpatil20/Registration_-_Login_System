import React from 'react'

function Home() {
  return (
    <div>
    
   
<section class="bg-indigo-600 text-white py-20 px-4 h-full mt-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div class="md:w-1/2 mb-10 md:mb-0">
            <h2 class="text-4xl font-bold leading-tight mb-4">Welcome to Our Site</h2>
            <p class="text-xl mb-4">We offer a range of services to help you achieve your goals.</p>
            <button class="bg-white text-indigo-600 font-bold py-3 px-6 rounded hover:bg-indigo-600 hover:text-white">Get Started</button>
        </div>
        <div class="md:w-1/2">
            <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713" alt="Hero Image" class="w-full rounded-xl"/>
        </div>
    </div>
</section>

    </div>
  )
}

export default Home
