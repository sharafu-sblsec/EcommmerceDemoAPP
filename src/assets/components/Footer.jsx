import React from 'react'
import logo from '../imgs/icons/ecom.svg'
import { Facebook, Github, Instagram, MailCheck, Youtube } from 'lucide-react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <footer id="footer" className="bg-slate-900 shadow-md ">
        <div className="container mx-auto px-5 md:px-14 lg:px-14 xl:px-14">
            <div className="min-h-16 ">
                <div className="flex justify-between items-center flex-col md:flex-row py-10">
                   <h2 className="text-3xl font-bold text-white"> Subcribe For Latest Updates</h2>
                   
                   <form className="md:w-1/3 w-full mt-8 md:mt-0 relative">
                    <input type="text" placeholder="Enter your email" className="py-4 px-4 rounded shadow-md w-full"/>
                    <MailCheck
                          size={23}
                          className="bg-red-500 text-white p-1 rounded absolute right-28 top-4"
                        />
                    <button className="bg-gray-200 py-3 px-5 rounded-full absolute right-3 top-1">                      
                        Submit</button>
                   </form>
                </div>

            </div>
        </div>

        <div className="bg-slate-800 py-8 text-white">
            <div className="container mx-auto px-6 md:px-14 lg:px-14 xl:px-14">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                    <div>
                        <img src={logo} className="my-6 gap-4 h-12 w-12"/>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis, earum inventore deleniti reiciendis eaque voluptatem. Laudantium deleniti sed aliquid dolorum modi cumque, excepturi voluptatibus provident enim ipsa ad nisi eius!</p>
                        <div className="flex items-center gap-8 mt-5 cursor-pointer">
                            <Facebook size={30} className="bg-white text-black rounded-md p-2"/>
                            <Instagram size={30} className="bg-white text-black rounded-md p-2 mx-2"/>
                            <Github size={30} className="bg-white text-black rounded-md p-2"/>
                            <Youtube size={30} className="bg-white text-black rounded-md p-2 mx-2"/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-8">
                            Pages
                        </h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">About</Link>
                            </li>
                            <li>
                                <Link to="/">FAQs</Link>
                            </li>
                            <li>
                                <Link to="/">Contacts</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-8">
                            Categories
                        </h2>
                        <ul>
                            <li>
                                <Link to="/">All</Link>
                            </li>
                            <li>
                                <Link to="/">Gadgets</Link>
                            </li>
                            <li>
                                <Link to="/">SmartPhones</Link>
                            </li>
                            <li>
                                <Link to="/">Laptops</Link>
                            </li>
                            <li>
                                <Link to="/">Cameras</Link>
                            </li>
                            <li>
                                <Link to="/">Audio</Link>
                            </li>
                            <li>
                                <Link to="/">Gaming</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-semibold my-8">
                            Contact Us
                        </h2>
                        <p>
                            1234 Street Name, City, State, 12345 ,Kerala, India Left thirinj Right Thirinj karangi karangi just For Fun
                        </p>
                        <p>+91 9876543210</p>
                        <p>+91 1234567890</p>
                    </div>
                </div>
            </div>

        </div>
        <div className="container mx-auto text-center py-4 text-white">
            <p>Copyright &copy; 2025 apt2002 & SonaMariaSimon</p>
        </div>

    </footer>
  )
}

export default Footer
