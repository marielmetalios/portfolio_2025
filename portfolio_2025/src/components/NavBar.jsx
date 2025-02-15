// import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';


function NavBar(props) {
  const {links} = props;
    return (
      <nav class="bg-gray-800 fixed top-0 left-0 w-full z-0">
        <ul class ="container mx-auto flex justify-end space-x-6">
          {links.map((link) => (
            <li class="rounded-md bg-gray-900 px-3 py-2 text-sm font-medium text-white" key={link.to}>
              <Link to={link.to}>
                <h2>{link.label}</h2>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default NavBar;