

const Footer = () => {

     const logo = "/logo-text.png"
  return (
    <footer className="border-t border-gray-100 bg-white">

     
      <div className="mx-auto grid max-w-[1180px] gap-8 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">

       
        <div>
          <img src={logo} alt="Dev Stack" className="h-7 w-auto"
          />

          <p className="mt-4 max-w-[320px] text-xs leading-5 text-gray-500">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          
          <div className="mt-5 flex gap-5 text-xs text-gray-700">
            <a href="#">GitHub</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>

       
        <div>
          <h3 className="text-xs font-semibold text-gray-900">
            Product
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
            <a href="#">Home</a>
            <a href="#">Technologies</a>
            <a href="#">Projects</a>
          </div>
        </div>

      
        <div>
          <h3 className="text-xs font-semibold text-gray-900">
            Company
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Careers</a>
          </div>
        </div>

       
        <div>
          <h3 className="text-xs font-semibold text-gray-900">
            Legal
          </h3>

          <div className="mt-4 flex flex-col gap-2 text-xs text-gray-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>

      </div>

      
      <div className="mx-auto flex max-w-[1180px] flex-col gap-3 border-t border-gray-100 px-6 py-6 text-xs text-gray-400 sm:flex-row sm:items-center sm:justify-between">

        <p>
          © 2026 Dev Stack. All rights reserved.
        </p>

        <div className="flex gap-5">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>

      </div>

    </footer>
  );
};

export default Footer;