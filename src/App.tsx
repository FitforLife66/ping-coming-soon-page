import Illustration from "./images/illustration-dashboard.png"
import X from "./components/X"
import Instagram from "./components/Instagram"
import Facebook from "./components/Facebook"
import { useState } from "react"
import SocialLink from "./components/SocialLink"

//  Helper Function - email checker
function emailValidation(email: string): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/  
  return emailPattern.test(email.trim())
}

//  Main Function
//  =============
export default function App() {
  
  const [formValue, setFormValue] = useState('')
  const [isValid, setIsValid] = useState(true)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const valid = emailValidation(formValue)
    setIsValid(valid)

    if(!valid) return
    console.log(formValue.trim())   // Do something
    setFormValue('')        
  }

  //  Component Return
  //  ================
  return (
     
    <div className="font-franklin max-w-178 flex flex-col items-center justify-center mx-auto mt-21.25 mb-5 px-7">

      <header className="flex flex-col items-center justify-center mb-10">
        <img className="w-13.25 mb-10 md:w-21.25 md:mb-12" src="./logo.svg" alt="Logo" />
        <h1 className="text-neutral-gray-400 text-xl/[125%] mb-2 md:text-5xl/[125%] md:mb-4">We are launching <span className="font-bold text-black">soon!</span></h1>
        <p className="text-neutral-blue-950 text-[0.8125rem]/[125%] md:text-xl">Subscribe and get notified</p>
      </header>

      <main className="mb-30 md:px-9 md:mb-18">

        {/* Form */}
        <form 
          className="w-full flex flex-col mb-18 px-4.5 md:px-0 md:mb-24 md:flex-row md:gap-4 " 
          noValidate
          onSubmit={handleSubmit}>

          {/* Input email  */}
          <div className="flex flex-col justify-center items-stretch md:grow relative">
            <input 
              className={`
                h-10 text-xs text-neutral-blue-950
                border rounded-full ${isValid ? "border-secondary-blue-200" :"border-secondary-red-400"} 
                ${isValid ? "focus-visible:outline-secondary-blue-200" : "focus-visible:outline-secondary-red-400"}
                px-6 mb-2 
                placeholder:text-secondary-blue-200
                md:text-base md:h-14 md:px-8`}
              onChange={e => setFormValue(e.target.value)} 
              type="email"
              name="email"
              value={formValue} 
              placeholder="Your email address..." />
            <p className={`             
              text-secondary-red-400 text-[0.625rem]/[125%] italic mx-auto
              ${isValid ? "max-h-0 opacity-0 overflow-hidden" : "mb-6 md:mb-0"}
              transition-all duration-200 ease-in-out
              md:px-8 md:text-xs/[125%] md:mx-0 md:absolute md:top-16`}>
              Please provide a valid email address
            </p>
          </div>

          {/* Submit Button  */}
          <button 
            className="
              w-full h-10 bg-primary-blue-500 rounded-full text-white text-xs font-semibold cursor-pointer
              transition-all duration-200
              hover:opacity-75
              md:w-50 md:h-14 md:text-base"
            type="submit">
            Notify Me
          </button>
        </form>

        <img className="w-full" src={Illustration} alt="Illustration" />
      </main>

      {/* Footer */}
      <footer className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-4 mb-6">
          <SocialLink ><Facebook className="h-5 w-5" /></SocialLink>
          <SocialLink ><X className="h-5 w-5" /></SocialLink>
          <SocialLink ><Instagram className="h-6 w-6" /></SocialLink>            
          </div>
        <p className="text-neutral-gray-400 text-xs/[125%] mb-2">&copy; Copyright Ping. All rights reserved.</p>
        <p className="text-neutral-gray-400 text-[0.8125rem]/[125%]">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. Coded by <a href="#">FitforLife66</a>.</p>
      </footer>

    </div>
  )
}


