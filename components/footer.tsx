/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/iOXWSH08DWS
 */
// import { Input } from "@/components/ui/input"
// import { Button } from "@/components/ui/button"
import Link from "next/link";

export function Footer() {
  const services = [
    {
      title: "Website Design & Management",
    },
    {
      title: "Social Media Management",
    },
    {
      title: "Content Marketing",
    },
    {
      title: "Email Marketing",
    },
    {
      title: "Google Ads",
    },
  ];
  return (
    <footer className="bg-[#5840B9] text-white py-10 mt-4">
      <div className="max-w-6xl lg:max-w-full mx-auto px-6 lg:px-8 flex flex-wrap justify-between">
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          <h2 className="text-xl font-semibold mb-4">SIGN UP FOR 10% OFF</h2>
          <p className="text-sm mb-4">
            Subscribe to get special offers & once-in-a-lifetime deals.
          </p>
          <div className="flex items-center max-w-md pr-2">
            <input
              className="text-gray-900 h-12"
              placeholder="Enter your email address here"
              type="email"
            />
            <button className="max-w-sm bg-black text-gray-100 px-1 h-12 rounded-md">Subscribe</button>
          </div>
          <div className="flex items-center space-x-4 mt-6">
            <InstagramIcon className="text-white" />
            <InstagramIcon className="text-white" />
            <PinIcon className="text-white" />
            <TwitterIcon className="text-white" />
          </div>
          <p className="text-xs mt-6">© 2023 Aura. All rights reserved.</p>
        </div>
        <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-3">ADDRESS</h3>
          <ul className="space-y-2">
            <li>01, Ilofa rd,GRA, Ilorin, Kwara State, Nigeria</li>
            <li>Email: uumar7000@gmail.com</li>
            <li>Pho</li>
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/4 mb-6 lg:mb-0">
          <h3 className="text-lg font-semibold mb-3">ASSISTANCE</h3>
          <ul className="space-y-2">
            <li>
              <Link className="text-sm" href="#">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                About us
              </Link>
            </li>
            <li>
              <Link className="text-sm" href="#">
                Accessibility
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-1/2 lg:w-1/4">
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
          <ul className="space-y-2 flex flex-col">
            {services.map(({ title }) => (
              <li>
                <Link className="text-sm" href="#">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-wrap justify-between items-center">
          <p className="text-sm">For Business & Inquiries:</p>
          <div className="flex items-center space-x-4">
            <Link className="flex items-center space-x-1" href="#">
              <GitHubIcon className="text-white" />
              <span className="text-sm">Github</span>
            </Link>
            <Link className="flex items-center space-x-1" href="#">
              <LinkedinIcon className="text-white" />
              <span className="text-sm pt-1">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function InstagramIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function PinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="17" y2="22" />
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z" />
    </svg>
  );
}

function TwitterIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function GitHubIcon(props: any) {
  return (
    <svg
    {...props}
      width="20"
      height="20"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function LinkedinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
