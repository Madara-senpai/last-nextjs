'use client';
import { FaCog, FaLaptop, FaRegHandPointer, FaShieldAlt, FaUsers, FaPhoneAlt, FaRegHandshake } from 'react-icons/fa';
import Image from 'next/image';

const services = [
  {
    title: 'Web Development',
    description: 'Build and develop dynamic websites tailored to your needs.',
    icon: <FaLaptop size={50} />,
  },
  {
    title: 'Cybersecurity',
    description: 'Protect your digital assets with our comprehensive security solutions.',
    icon: <FaShieldAlt size={50} />,
  },
  {
    title: 'Consultation',
    description: 'Expert advice and consultation services for your business growth.',
    icon: <FaRegHandshake size={50} />,
  },
  {
    title: 'Customer Support',
    description: '24/7 customer support to help you with any issues you may encounter.',
    icon: <FaPhoneAlt size={50} />,
  },
  {
    title: 'IT Solutions',
    description: 'Innovative IT solutions to solve your company\'s technical challenges.',
    icon: <FaCog size={50} />,
  },
  {
    title: 'UX/UI Design',
    description: 'Creating user-friendly and visually appealing designs for your projects.',
    icon: <FaRegHandPointer size={50} />,
  },
  {
    title: 'Cloud Services',
    description: 'Utilize the power of the cloud to scale your business efficiently.',
    icon: <FaUsers size={50} />,
  },
];

const Hyzmatlar = () => {
  return (
    <div className="p-6 container mx-auto px-20">
      <h1 className="text-3xl font-semibold text-center mb-10">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="border p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
            <div className="flex justify-center mb-4">
              {/* If you want to use images instead of icons, you can replace the icon with an Image component */}
              <div className="text-blue-500">{service.icon}</div>
            </div>
            <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
            <p className="text-gray-600 text-center mb-4">{service.description}</p>
            <button className="w-full text-white bg-blue-500 hover:bg-blue-600 py-2 rounded-md text-center">
              Learn More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hyzmatlar;
