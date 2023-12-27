import React from 'react';
import Link from 'next/link'

const Nav: React.FC = () => {
  return (
    <nav className="flex flex-col gap-3">
      <Link href="/projects" className="bg-red-500 bg-opacity-75 text-white py-2 text-center px-4 rounded">
        Projects
      </Link>
      <Link href="/about-me" className="bg-red-500 bg-opacity-75 text-white text-center py-2 px-4 rounded mt-3">
        About Me
      </Link>

      <Link href="/" className="bg-red-500 bg-opacity-75 text-white text-center py-2 px-4 rounded mt-3">
        Certifications
      </Link>
    </nav>
  );
};

export default Nav;


// import React from 'react';

// const Nav: React.FC = () => {
//   return (
//     <nav className="flex flex-col g-3 space-x-4">
//       <button className="bg-red-500 bg-opacity-75 text-white py-2 px-4 rounded">
//         Projects
//       </button>
//       <button className="bg-red-500 bg-opacity-75 text-white py-2 px-4 rounded">
//         About Me
//       </button>
//     </nav>
//   );
// };

// export default Nav;