import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRedditAlien } from "react-icons/fa";

export default function FooterCom() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
        <div className="w-full max-w-7xl mx-auto ">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
            
            <div className="mt-5"> <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' >
            <span className='px-2 py-1 bg-gradient-to-r from-red-500 via-yellow-400 to-black-200 rounded-lg text-white'> A Little bit of </span>
            everything
        </Link></div>

        <div className="grid grid-cols-2 gap-8 sm:mt-10 sm:grid-cols-3 sm:gap-6">
                    <div>
                    <Footer.Title title='About'	/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://gokulgopanportfolio.com' target = '_blank' rel='noopen noreferrer'>
                        creator Portfolio
                        </Footer.Link>

                        <Footer.Link href='/about' target = '_blank' rel='noopen noreferrer'>
                        creator About
                        </Footer.Link>


                        <Footer.Link href='/home' target = '_blank' rel='noopen noreferrer'>
                        HOME
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>          
                    
                    <Footer.Title title='Follow us on other platforms'	/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='https://www.github.com/' target = '_blank' rel='noopen noreferrer'>
                        The Great Github 
                        </Footer.Link>

                        <Footer.Link href='https://www.facebook.com/' target = '_blank' rel='noopen noreferrer'>
                        FACEBOOK
                        </Footer.Link>
                        <Footer.Link href='https://www.reddit.com/' target = '_blank' rel='noopen noreferrer'>
                        Reddit
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                    

                    
                    <Footer.Title title='LEGAL'	/>
                    <Footer.LinkGroup col>
                        <Footer.Link href='#' target = '_blank' rel='noopen noreferrer'>
                            LEGAL
                        </Footer.Link>
                        <Footer.Link href='#' target = '_blank' rel='noopen noreferrer'>
                            Terms and conditions
                        </Footer.Link>
                        <Footer.Link href='#' target = '_blank' rel='noopen noreferrer'>
                            Privacy and saftey
                        </Footer.Link>
                    </Footer.LinkGroup>
                </div>
            </div>         
            </div> 
            <Footer.Divider/> 
            <div className="w-full sm:flex sm:items-center sm:justify-between">
                <Footer.Copyright href="#" 
                by="Little Bit of Everything" 
                year={new Date().getFullYear()} 
                />

                <div className="flex gap-6 sm:mt-4 sm:justify-center">
                    <Footer.Icon href="#" icon={FaFacebook} />
                    <Footer.Icon href="#" icon={FaInstagram} />
                    <Footer.Icon href="#" icon={FaRedditAlien} />
                </div>
            
            </div>
        </div>
    </Footer>
  );
}
