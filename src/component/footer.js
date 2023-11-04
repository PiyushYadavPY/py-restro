import React from 'react'

function Footer() {
  return (
    <div >


<footer class="relative bg-black pt-8 pb-6">
  <div class="container mx-auto px-4 ">
    <div class="flex flex-wrap  lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl font-semibold text-white">Let's keep in touch!</h4>
        <div class="mt-6 lg:mb-0 mb-6 text-white ">
          Contact: 9757453678 , 9892489423 <br/>
          Email : pyrestro@gmail.com,
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300"/>
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span><a href="https://www.creative-tim.com/product/notus-js" class="text-blueGray-500 hover:text-gray-800" target="_blank"/> PY Restro <br/>
          <a href="" class="text-blueGray-500 hover:text-white">Designed by Piyush Yadav</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  )
}

export default Footer