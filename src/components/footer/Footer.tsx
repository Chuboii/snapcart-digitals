import { FC } from 'react'
import Link from 'next/link'
import './Footer.scss'

const linkStyle = {
    color: "#eee",
    margin: '.3rem 0'
}

const Footer: FC = () => {

    return (
        <>
            <footer>
                <header>
                    <h1>SNAPCART</h1>

                    <section>
                        <p>NEW TO SNAPCART?</p>
                        <p>Subscribe to our newsletter to get updates on our latest offers!</p>
                        <form>
                            <input placeholder="Enter Email Address" />
                            <button>Subscribe</button>
                    </form>
                    </section>
                </header>

                
      <nav>

      <section>
        <p>NEED HELP?</p>
        <Link style={linkStyle} href={"/chat"}>Chat with us</Link>
        <Link style={linkStyle} href={"/help-center"}>Help Center</Link>
        <Link style={linkStyle} href={"/contact-us"}>Contact Us</Link>
      </section>
      <section>
        <p>USEFUl LINKS</p>
        <Link style={linkStyle} href={"/service-center"}>Service Center</Link>
        <Link style={linkStyle} href={"/how-to-shop"}>How to shop on SNAPCART?</Link>
        <Link style={linkStyle} href={"/delivery-options"}>Delivery options and timelines</Link>
      </section>
      <section>
        <p>ABOUT SNAPCART</p>
        <Link style={linkStyle} href={"/about-us"}>About us</Link>
        <Link style={linkStyle} href={"/snapcart-careers"}>Snapcart careers</Link>
        <Link style={linkStyle} href={"/snapcart-express"}>Snapcart Express</Link>
      </section>
      <section>
        <p>MAKE MONEY WITH SNAPCART</p>
        <Link style={linkStyle} href={"/sell-on-snapcart"}>Sell on SNAPCART</Link>
        <Link style={linkStyle} href={"/vendor-hub"}>Vendor hub</Link>
        <Link style={linkStyle} href={"/sales-consUltant"}>Become a Sales Consultant</Link>
  
      </section>
    </nav>
        </footer>
        </>
    )
}

export default Footer