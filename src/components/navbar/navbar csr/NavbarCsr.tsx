'use client'

import { useEffect, useState } from "react"
import Navbar from "../navbar ssr/NavbarSsr"

const NavbarCsr = () => {
    const [isScreenScrolled, setIsScreenScrolled] = useState(false)

    useEffect(() => {
    
        const isScreenScrolled = () => {
            const screenHeight = window.scrollY

            if (screenHeight > 250) {
                setIsScreenScrolled(true)
            }
            else {
                setIsScreenScrolled(false)
            }

        }
        window.addEventListener("scroll", isScreenScrolled)


        return () => {
            window.removeEventListener("scroll", isScreenScrolled)
        }
    }, [isScreenScrolled])


  return (
      <>
          <Navbar screenScrolled={isScreenScrolled} />
      </>
  )
}

export default NavbarCsr