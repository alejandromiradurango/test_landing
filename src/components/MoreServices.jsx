import { BsArrowRightShort } from "react-icons/bs"
import { Link } from "react-router-dom"
import {CardService} from "./index"

const MoreServices = ({content}) => {

  const { servicio } = content

  return (
    <section className="py-20">
        <div className="container px-4 mx-auto">
            <div className="relative mb-20 flex justify-between">
                <h1 className="text-center font-semibold text-3xl">Otros servicios que pueden ser de tu interés</h1>
                <Link to="/servicios" style={{ borderColor: content.main_color, color: content.main_color }} className='flex items-center gap-2 px-8 py-2 border-2 rounded-md font-semibold cursor-pointer'>
                    Ver todos los servicios
                    <BsArrowRightShort className='text-2xl font-bold'/>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {servicio?.slice(0, 3).map(service => (
                    <CardService key={service} id={service} color={content.main_color}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MoreServices