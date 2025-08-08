import React from 'react';

function Footer() {
  const year = new Date().getFullYear(); // Get current year dynamically

  return (
    <footer className="text-center py-4 mt-8 text-gray-500">
      <p>Copyright &copy; {year} Your Name</p>
    </footer>
  );
}

export default Footer;