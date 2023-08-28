import PropTypes from 'prop-types'
import { FaPhone } from 'react-icons/fa6'
import { Link, useLocation } from 'react-router-dom';
import { imagesUrl } from '../utils';

const Header = ({content}) => {

  const {pathname} = useLocation();

  const links = [
    {
        label: 'Inicio',
        url: '/'
    },
    {
        label: 'Servicios',
        url: '/servicios'
    },
    {
        label: 'Conócenos',
        url: '/conocenos'
    },
    {
        label: 'Contacto',
        url: '/contacto'
    },
  ];

  return (
    <header className="container px-4">
      <nav className="flex justify-between m:justify-center items-center py-8">
        <Link className="text-gray-600 text-2xl leading-none" to="/">
          {content.logo !== undefined && (
            <img className="h-16 w-full object-cover" src={`${imagesUrl}/${content.logo}`} alt={content.title} width="194" height="44" />
          )}
        </Link>
        <div className="lg:hidden">
          <button
            className="block navbar-burger text-gray-500 hover:text-gray-600 focus:outline-none"
            title="Click para abrir menú"
          >
            <span className="hidden">Abrir menú</span>
            <svg className="h-4 w-4" fill="currentColor " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden lg:flex items-center w-auto space-x-12">
          {links.map(link => (
            <li key={link.label} className='relative group/link'>
                <span style={{ background: content.secondary_color }} className={`w-full h-[2px] absolute -top-1 left-0 ${pathname === link.url ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} rounded-lg transition-all duration-500 group-hover/link:opacity-100  group-hover/link:scale-x-100`}></span>
                <Link style={{ color: pathname === link.url ? content.main_color : 'black' }} className={`text-lg p-1 px-2 inline-block ${pathname === link.url && ''}`} to={link.url}>
                    {link.label}
                </Link>
                <span style={{ background: content.secondary_color }} className={`w-full h-[2px] absolute -bottom-1 left-0 ${pathname === link.url ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'} rounded-lg transition-all duration-500 group-hover/link:opacity-100  group-hover/link:scale-x-100`}></span>
            </li>
          ))}
        </ul>
        <a style={{ background: content.main_color}} className="hidden lg:flex items-center gap-3 px-6 py-2 text-md font-semibold rounded-md text-white" href="#">
          <FaPhone />
          958 90 07 71
        </a>
      </nav>
    </header>
  );
};

Header.propTypes = {
    content: PropTypes.object.isRequired
}

export default Header;
