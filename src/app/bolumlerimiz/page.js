'use client';
import { useState } from 'react';

const Bolumlerimiz = () => {
  // State to manage the dropdowns, selected section, and selected link
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  // Dummy video data for each link in a section
  const videos = {
    section1: {
      link1: [
        'https://www.youtube.com/embed/1',
        'https://www.youtube.com/embed/2',
        'https://www.youtube.com/embed/3',
      ],
      link2: [
        'https://www.youtube.com/embed/4',
        'https://www.youtube.com/embed/5',
        'https://www.youtube.com/embed/6',
      ],
      link3: [
        'https://www.youtube.com/embed/7',
        'https://www.youtube.com/embed/8',
        'https://www.youtube.com/embed/9',
      ],
      link4: [
        'https://www.youtube.com/embed/10',
        'https://www.youtube.com/embed/11',
        'https://www.youtube.com/embed/12',
      ],
    },
    section2: {
      link1: [
        'https://www.youtube.com/embed/13',
        'https://www.youtube.com/embed/14',
        'https://www.youtube.com/embed/15',
      ],
      link2: [
        'https://www.youtube.com/embed/16',
        'https://www.youtube.com/embed/17',
        'https://www.youtube.com/embed/18',
      ],
      link3: [
        'https://www.youtube.com/embed/19',
        'https://www.youtube.com/embed/20',
        'https://www.youtube.com/embed/21',
      ],
      link4: [
        'https://www.youtube.com/embed/22',
        'https://www.youtube.com/embed/23',
        'https://www.youtube.com/embed/24',
      ],
    },
    section3: {
        link1: [
          'https://www.youtube.com/embed/25',
          'https://www.youtube.com/embed/26',
          'https://www.youtube.com/embed/27',
        ],
        link2: [
          'https://www.youtube.com/embed/28',
          'https://www.youtube.com/embed/29',
          'https://www.youtube.com/embed/30',
        ],
        link3: [
          'https://www.youtube.com/embed/31',
          'https://www.youtube.com/embed/32',
          'https://www.youtube.com/embed/33',
        ],
        link4: [
          'https://www.youtube.com/embed/34',
          'https://www.youtube.com/embed/35',
          'https://www.youtube.com/embed/36',
        ],
      },
      section4: {
        link1: [
          'https://www.youtube.com/embed/37',
          'https://www.youtube.com/embed/38',
          'https://www.youtube.com/embed/39',
        ],
        link2: [
          'https://www.youtube.com/embed/40',
          'https://www.youtube.com/embed/41',
          'https://www.youtube.com/embed/42',
        ],
        link3: [
          'https://www.youtube.com/embed/43',
          'https://www.youtube.com/embed/44',
          'https://www.youtube.com/embed/45',
        ],
        link4: [
          'https://www.youtube.com/embed/46',
          'https://www.youtube.com/embed/47',
          'https://www.youtube.com/embed/48',
        ],
      },
      section5: {
        link1: [
          'https://www.youtube.com/embed/49',
          'https://www.youtube.com/embed/50',
          'https://www.youtube.com/embed/51',
        ],
        link2: [
          'https://www.youtube.com/embed/52',
          'https://www.youtube.com/embed/53',
          'https://www.youtube.com/embed/54',
        ],
        link3: [
          'https://www.youtube.com/embed/55',
          'https://www.youtube.com/embed/56',
          'https://www.youtube.com/embed/57',
        ],
        link4: [
          'https://www.youtube.com/embed/58',
          'https://www.youtube.com/embed/59',
          'https://www.youtube.com/embed/60',
        ],
      },
      section6: {
        link1: [
          'https://www.youtube.com/embed/61',
          'https://www.youtube.com/embed/62',
          'https://www.youtube.com/embed/63',
        ],
        link2: [
          'https://www.youtube.com/embed/64',
          'https://www.youtube.com/embed/65',
          'https://www.youtube.com/embed/66',
        ],
        link3: [
          'https://www.youtube.com/embed/67',
          'https://www.youtube.com/embed/68',
          'https://www.youtube.com/embed/69',
        ],
        link4: [
          'https://www.youtube.com/embed/70',
          'https://www.youtube.com/embed/71',
          'https://www.youtube.com/embed/72',
        ],
      },
      section7: {
        link1: [
          'https://www.youtube.com/embed/73',
          'https://www.youtube.com/embed/74',
          'https://www.youtube.com/embed/75',
        ],
        link2: [
          'https://www.youtube.com/embed/76',
          'https://www.youtube.com/embed/77',
          'https://www.youtube.com/embed/78',
        ],
        link3: [
          'https://www.youtube.com/embed/79',
          'https://www.youtube.com/embed/80',
          'https://www.youtube.com/embed/81',
        ],
        link4: [
          'https://www.youtube.com/embed/82',
          'https://www.youtube.com/embed/83',
          'https://www.youtube.com/embed/84',
        ],
      },
    // Add other sections with their respective links
  };

  // Dropdown content (Section name -> Links)
  const sections = [
    { name: 'Section 1', key: 'section1' },
    { name: 'Section 2', key: 'section2' },
    { name: 'Section 3', key: 'section3' },
    { name: 'Section 4', key: 'section4' },
    { name: 'Section 5', key: 'section5' },
    { name: 'Section 6', key: 'section6' },
    { name: 'Section 7', key: 'section7' },
  ];

  // Function to handle section click and show links
  const handleSectionClick = (sectionKey) => {
    setSelectedSection(sectionKey);
    setSelectedLink(null); // Reset the selected link when a section is clicked
  };

  // Function to handle link click and show corresponding videos
  const handleLinkClick = (sectionKey, linkKey) => {
    setSelectedLink(linkKey);
  };

  return (
    <div className="flex container mx-auto p-6 space-x-6 px-20">
      {/* Left Sidebar - Dropdowns */}
      <div className="w-1/4 p-4 bg-gray-100 rounded-lg shadow-md">
        {sections.map((section) => (
          <div key={section.key} className="mb-6">
            <button
              className="w-full text-left px-4 py-2 text-gray-800 font-semibold bg-indigo-200 hover:bg-indigo-300 rounded-md"
              onClick={() => handleSectionClick(section.key)}
            >
              {section.name}
            </button>
            {selectedSection === section.key && (
              <div className="mt-4 space-y-2">
                {Object.keys(videos[section.key]).map((linkKey) => (
                  <button
                    key={linkKey}
                    className="block w-full text-left text-gray-700 hover:text-blue-600"
                    onClick={() => handleLinkClick(section.key, linkKey)}
                  >
                    Link {linkKey.slice(-1)} {/* Display Link 1, Link 2, etc. */}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right Side - Videos */}
      <div className="w-3/4 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Videos</h1>
        {selectedLink ? (
          <div className="grid grid-cols-2 gap-4">
            {videos[selectedSection][selectedLink].map((video, index) => (
              <div key={index} className="relative w-full h-60">
                <iframe
                  width="100%"
                  height="100%"
                  src={video}
                  title={`Video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p className="text-center mt-2 text-gray-800 font-semibold">
                  Video {index + 1} {/* You can replace this with a custom title */}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600">Select a link to view videos.</p>
        )}
      </div>
    </div>
  );
};

export default Bolumlerimiz;
