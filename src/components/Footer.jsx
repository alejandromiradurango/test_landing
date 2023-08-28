import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BiSolidTimeFive } from 'react-icons/bi';
import { HiMail } from 'react-icons/hi';
import { FaPhone } from 'react-icons/fa6';

const Footer = ({content}) => {

  useEffect(() => {
    const horario = document.getElementById('horario');
    const direccion = document.getElementById('direccion');

    horario.innerHTML = content.horario
    direccion.innerHTML = content.direccion
  }, [content])

  const footerLinks = [
    {
      label: 'Aviso Legal',
      url: '/aviso-legal'
    },
    {
        label: 'Política de privacidad',
        url: '/politica-de-privacidad'
    },
    {
        label: 'Política de cookies',
        url: '/politica-de-cookies'
    },
  ]

  

  return (
    <footer className="py-10 bg-white relative">
      <div className="container px-10 mx-auto relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div>
            <span className='font-semibold text-2xl block mb-4'>Dónde estamos</span>
            <iframe
              title='Ubicación de la empresa'
              src={content.mapa}
              className="md:h-80 w-full"
            ></iframe>
          </div>
          <div className='h-full'>
            <span className='font-semibold text-2xl block mb-4'>Información</span>
            <div className='flex flex-col justify-between'>
              <div className='mb-10'>
                <div className='mb-3 flex items-center'>
                  <div style={{ background: content.main_color }} className='p-3 rounded-full mr-4'>
                    <BiSolidTimeFive size={26} color='white'/>
                  </div>
                  <span className='text-2xl'>Horario</span>
                </div>
                <div id="horario" className='text-lg'></div>
              </div>
              <div>
                <div className='mb-3 flex items-center'>
                  <div style={{ background: content.main_color }} className='p-3 rounded-full mr-4'>
                    <HiMail size={26} color='white'/>
                  </div>
                  <span className='text-2xl'>Dirección</span>
                </div>
                <div id="direccion" className='text-lg'></div>
              </div>
            </div>
          </div>
          <div className='h-full'>
            <span className='font-semibold text-2xl block mb-4'>Contacto</span>
            <div className='flex flex-col justify-between'>
              <div className='mb-10'>
                <div className='mb-3 flex items-center'>
                  <div style={{ background: content.main_color }} className='p-3 rounded-full mr-4'>
                    <FaPhone size={26} color='white'/>
                  </div>
                  <span className='text-2xl'>Teléfono</span>
                </div>
                <div className='text-lg'>{content.phone}</div>
              </div>
              <div>
                <div className='mb-3 flex items-center'>
                  <div style={{ background: content.main_color }} className='p-3 rounded-full mr-4'>
                    <HiMail size={26} color='white'/>
                  </div>
                  <span className='text-2xl'>Email</span>
                </div>
                <div className='text-lg'>correo@correo.com</div>
              </div>
            </div>
          </div>
          {/* <iframe
            title='Ubicación de la empresa'
            src={content.mapa}
            className="md:w-3/6 md:h-96"
          ></iframe>
          <div className="flex flex-col md:flex-row justify-between gap-10 md:w-1/3">
            <ul className="flex flex-col gap-5 text-center md:text-left">
              {links.map(link => (
                <li style={{ color: pathname === link.url ? content.main_color : 'black' }} key={link.label} className={pathname === link.url ? 'font-bold' : ''}>
                  <Link to={link.url}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <ul className="mb-10 text-center md:text-left">
                <li style={{ color: content.main_color }} className="font-bold mb-5">
                  Horario:
                </li>
                <li id='horario'></li>
              </ul>
              <ul className='text-center md:text-left'>
                <li style={{ color: content.main_color }} className="font-bold mb-5">
                  Dirección:
                </li>
                <li id='direccion'></li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20">
          <p>&copy; 2023 | {content.title}</p>
          <ul className="flex flex-col md:flex-row mt-10 md:mt-0 gap-10 items-center">
            {footerLinks.map(link => (
              <li key={link.label}>
                <Link to={link.url}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  content: PropTypes.object.isRequired
}

export default Footer;
