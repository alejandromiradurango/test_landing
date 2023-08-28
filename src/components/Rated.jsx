const Rated = ({content}) => {

  const rating = [
    {
        label: 'Atención',
        value: 100
    },
    {
        label: 'Eficación en servicio',
        value: 100
    },
    {
        label: 'Grantía',
        value: 100
    },
    {
        label: 'Calidad',
        value: 100
    },
  ];

  return (
    <section className='bg-gray-700 p-20'>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rating.map((rate, index) => (
                <div key={index} className="bg-white px-4 py-6 flex flex-col justify-between items-center gap-6 rounded-lg">
                    <div style={{ background: content.main_color  }} className="p-1 rounded-full w-[90px] h-[90px]">
                        <div className="flex justify-center items-center bg-white p-2 rounded-full w-[82px] h-[82px] text-2xl">
                            {rate.value}%
                        </div>
                    </div>
                    <span className="font-semibold text-xl">{rate.label}</span>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Rated