import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-slate-700 text-white py-8 px-8 md:px-16">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-6 sm:space-y-0">
        {/* Logo and Description */}
        <div className="flex items-center space-x-4 pl-5">
          <Image src="/logo.png" alt="University Logo" width={100} height={100} />
          <span className="text-sm sm:text-base text-center sm:text-left">
            Turkmenistanyn Oguz han adyndaky <br className="hidden sm:block" />
            Inzener-tehnologiyalar uniwersiteti
          </span>
        </div>

        {/* Address and Contact Info */}
        <div className="footer-details text-center sm:text-left">
          <h4 className="text-xl font-semibold mb-4">Adreslerimiz:</h4>
          <p><strong>E-pocta:</strong> oguzhan.edu@gmail.com</p>
          <p><strong>Tel:</strong> (+993 12) 39-16-00 39-16-39</p>
          <p><strong>Salgysy:</strong> 100 Kosi koce, Asgabat saher, Turkmenistan</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6">
        <p className="font-sans text-gray-400">© 2024 Hemme zat gowy.</p>
      </div>
    </footer>
  );
};

export default Footer;
