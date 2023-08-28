import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { landing_id } from "../utils"
import { useState } from "react"
import axios from 'axios'

const schema = yup
    .object({
        name: yup
            .string()
            .required("El nombre es requerido"),
        email: yup
            .string()
            .email("El correo electrónico no es valido")
            .required("El correo electrónico es requerido"),
        phone: yup
            .string()
            .required("El teléfono es requerido")
            .min(9, "Ingresa un número de teléfono valido")
            .max(15, "Ingresa un número de teléfono valido"),
        message: yup
            .string()
            .required("El mensaje es requerido")
    })

const Form = ({content, small = false}) => {

  const {register, handleSubmit, formState: {errors}} = useForm({resolver: yupResolver(schema)})

  const [acceptConditions, setAcceptConditions] = useState(false);

  const sendForm = fields => {
    fields.landing_id = landing_id;
    fields.url_landing = window.location.href;
    
    
    axios.post(`https://eofzgye3m1wd80j.m.pipedream.net/`, fields)
        .then(res => console.log(res))
  }

  return (
    <div className={`bg-gray-100 ${small ? 'lg:w-2/3' : 'lg:w-2/6'} lg:max-w-md py-10 px-6 rounded-lg shadow-xl z-20`} style={{ background: content.secondary_color}}>
        <p className="text-4xl max-w-xs m-auto text-center mb-4">{content.form_title}</p>
        <form className="flex flex-col gap-4 items-start" onSubmit={handleSubmit(sendForm)}>
            <div className="w-full">
                <input 
                    type="text" 
                    className={`border p-3 rounded-md w-full ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Nombre" 
                    {...register("name")}
                />
                {errors.name && <small className="text-red-500">* {errors.name.message}</small>}
            </div>
            <div className="w-full">
                <input 
                    type="email" 
                    className={`border p-3 rounded-md w-full ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="Email" 
                    {...register("email")}
                />
                {errors.email && <small className="text-red-500">* {errors.email.message}</small>}
            </div>
            <div className="w-full">
                <input 
                    type="text" 
                    className={`border p-3 rounded-md w-full ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="Teléfono" 
                    {...register("phone")}
                    maxLength={16}
                    minLength={8}
                />
                {errors.phone && <small className="text-red-500">* {errors.phone.message}</small>}
            </div>
            <div className="w-full">
                <textarea 
                    cols="10" 
                    rows="5" 
                    className={`border p-3 rounded-md w-full ${errors.message ? 'border-red-500' : ''}`}
                    placeholder="Mensaje"
                    {...register("message")}
                />
                {errors.message && <small className="text-red-500">* {errors.message.message}</small>}
            </div>

            <div>
                <input type="checkbox" name="accept" id="accept" className="mr-2" defaultChecked={acceptConditions} onChange={() => setAcceptConditions(prev => !prev)}/>
                <label htmlFor='accept'>He leído y acepto la <a href="/politica-de-privacidad" target="_blank" style={{ color: content.main_color}} className=" font-semibold">Política de privacidad</a></label>
            </div>
            <input style={{ background: content.main_color }} type="submit" className="mt-6 inline-block py-2 px-8 text-white font-semibold rounded-md cursor-pointer disabled:brightness-90 disabled:cursor-not-allowed transition-all" value="Enviar" disabled={!acceptConditions} />
        </form>
    </div>
  )
}

export default Form