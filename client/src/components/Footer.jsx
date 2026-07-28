import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-24 xl:px-32 pt-10 pb-5 w-full text-gray-500">

      {/* Top Footer */}
      <div className="flex flex-col md:flex-row justify-between gap-10 pb-8 border-b border-gray-300">


        {/* Logo & Description */}
        <div className="max-w-xs">

          <img 
            src={assets.logo} 
            alt="CarRental Logo"
            className="w-44"
          />

          <p className="mt-5 text-sm leading-5">
            Premium car rental service with a wide selection of
            luxury and everyday vehicles for all your driving needs.
          </p>


          {/* Social Media */}
          <div className="flex items-center gap-5 mt-6">

            <a href="#">
              <img 
                src={assets.facebook_logo} 
                alt="Facebook"
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>

            <a href="#">
              <img 
                src={assets.instagram_logo} 
                alt="Instagram"
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>

            <a href="#">
              <img 
                src={assets.twitter_logo} 
                alt="Twitter"
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>

            <a href="#">
              <img 
                src={assets.gmail_logo} 
                alt="Email"
                className="w-5 h-5 opacity-70 hover:opacity-100"
              />
            </a>

          </div>

        </div>



        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row gap-16 md:gap-24">


          {/* Quick Links */}
          <div>

            <h3 className="text-gray-900 font-semibold mb-5">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#" className="hover:text-blue-600">
                  Home
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  Browse Cars
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  List Your Car
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-blue-600">
                  About Us
                </a>
              </li>

            </ul>

          </div>



          {/* Resources */}
          <div>

            <h3 className="text-gray-900 font-semibold mb-5">
              RESOURCES
            </h3>

            <ul className="space-y-3 text-sm">

              <li>
                <a href="#">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#">
                  Terms of Service
                </a>
              </li>

              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#">
                  Insurance
                </a>
              </li>

            </ul>

          </div>




          {/* Contact */}
          <div>

            <h3 className="text-gray-900 font-semibold mb-5">
              CONTACT
            </h3>


            <ul className="space-y-3 text-sm">

              <li>
                1234 Luxury Drive
              </li>

              <li>
                San Francisco, CA 94107
              </li>

              <li>
                +1 234 567890
              </li>

              <li>
                info@example.com
              </li>

            </ul>

          </div>


        </div>


      </div>




      {/* Bottom Footer */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-sm gap-4">


        <p>
          © 2026 Brand. All rights reserved.
        </p>


        <div className="flex items-center gap-4">

          <a href="#" className="hover:text-blue-600">
            Privacy
          </a>

          <span>|</span>

          <a href="#" className="hover:text-blue-600">
            Terms
          </a>

          <span>|</span>

          <a href="#" className="hover:text-blue-600">
            Cookies
          </a>

        </div>


      </div>


    </footer>
  )
}

export default Footer