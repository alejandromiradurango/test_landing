import axios from "axios";
import { useEffect, useState } from "react";
import { apiUrl } from "../utils";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardService = ({id, color}) => {

    const cutText = (text) => {
        if (text.length <= 240) {
          return text;
        } else {
          var clippedText = text.slice(0, 240);
          // Buscar el último espacio dentro de los primeros 240 caracteres
          var lastSpace = clippedText.lastIndexOf(" ");
          // Recortar el text hasta el último espacio
          clippedText = clippedText.slice(0, lastSpace);
          return clippedText + " [...]</p>";
        }
      }
    
    const [service, setService] = useState({});

    useEffect(() => {
        axios.get(`${apiUrl}/servicios/${id}`)
            .then(res => setService(cutText(res.data.data.description)));
    }, [id])

    useEffect(() => {
      document.getElementById(id).innerHTML = service ?? '';
    }, [service, id])
    

    return (
        <div className="w-full px-4 text-center rounded-md bg-gray-100 py-8" key={service.id}>
            <h3 className="mb-4 text-xl font-sembold font-heading" style={{ color }}>{service.title}</h3>
            <p className="mb-7 text-sm text-gray-800 leading-loose max-w-sm mx-auto lg:px-12" id={id}></p>
            <Link style= {{ background: color }} to={`/servicios/${service.url_seo}`} className="py-2 px-6 inline-flex items-center text-white font-semibold rounded-md">
                Más info
                <BsArrowRightShort className='text-2xl font-bold'/>
            </Link>
        </div>
    )
}

export default CardService
