'use client'
import Button from "@/components/Button";
import Header from "@/components/Header";
import { useFetch } from "@/hooks/useRequest";
import Image from "next/image";
import { RepositoryProperty } from "@/components/Slides/Carrousel/CarrouselSwiper";
import MediumCardContainer from "@/components/Cards/Medium Cards/MediumCardContainer";
import M2 from '@/Images/m2.png'
import Cama from '@/Images/cama.png'
import Banheira from '@/Images/banheira.png'
import LogoMCMV from '@/Images/logo-mcmv-2023.png'
import Garagem from '@/images/garagem.png'
import Piscina from '@/images/piscina.png'
import Area_Gourmet from '@/images/churrasqueira.png'
import Casa from '@/images/casa.png'
import { Filter } from "@/components/Filter";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

export default function Empreendimentos() {


  const handleFilterProperty = (data: any) => {

    if (data['value'] != null) {
      const between = data['value'].split(',')
      data['min_value'] = between[0]
      data['max_value'] = between[1]
      data['value'] = null
    }
    
    setParam({
      ...data
    })
  }

  const handleRadioChange = (value: string) => {

    if (selectedOption === value) {
      setSelectedOption(null);
    } else {
      setSelectedOption(value);
    }
  };

  const [param, setParam] = useState<object>({})
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const { register, handleSubmit } = useForm({
    defaultValues: {
      type_property: [],
      value: null,
      min_value: '',
      max_value: ''
    }
  })
  const data = useFetch<RepositoryProperty[]>('http://localhost:3001/api/v1/property/', param)

  useEffect(() => {
    
  },[param])

  return (
    <>
      <Header />
      <section id="filtro" className="w-full h-[75px] bg-gradient-to-b from-[#0000003a] bg-[#04403A]">

      </section>
      <section className="flex justify-center">
        <div className="flex flex-col items-center mt-7">
          <h1 className="text-[#085942] font-bold text-sm">MAIS FILTROS</h1>
          <form onSubmit={handleSubmit(handleFilterProperty)} className="space-y-6 flex flex-col items-center mt-2">
            <Filter.Root>
              <Filter.Container title="Faixa de Preço">
                <div className="flex items-center space-x-[3px] mt-1">
                  <input checked={selectedOption === '6'} onInput={() => handleRadioChange('6')} className="w-14 h-5 bg-transparent border-2 rounded outline-none border-gray-500 text-[10px] pl-[2px] text-white" type="text" placeholder="R$ Min" {...register("min_value")} />
                  <span className="bg-gray-500 w-[7px] h-[1px] rounded-full"></span>
                  <input checked={selectedOption === '7'} onInput={() => handleRadioChange('7')} className="w-14 h-5 bg-transparent border-2 rounded outline-none border-gray-500 text-[10px] pl-[2px] text-white" type="text" placeholder="R$ Max" {...register("max_value")} />
                </div>
                <ul className="text-[10px] text-white space-y-[6px] my-2">
                  <li className="flex space-x-1">
                    <input type="radio" checked={selectedOption === '1'} onClick={() => handleRadioChange('1')}  value="100000,200000" {...register("value")} />
                    <p>R$ 100 mil a R$ 200 mil</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="radio" checked={selectedOption === '2'} onClick={() => handleRadioChange('2')}  value="200000,300000" {...register("value")} />
                    <p>R$ 200 mil a R$ 300 mil</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="radio" checked={selectedOption === '3'} onClick={() => handleRadioChange('3')} value="300000,400000" {...register("value")} />
                    <p>R$ 300 mil a R$ 400 mil</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="radio" checked={selectedOption === '4'} onClick={() => handleRadioChange('4')} value="400000,600000" {...register("value")} />
                    <p>R$ 400 mil a R$ 600 mil</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="radio" checked={selectedOption === '5'} onClick={() => handleRadioChange('5')} value="600000" {...register("min_value")} />
                    <p>Mais de R$ 600 mil</p>
                  </li>
                </ul>
              </Filter.Container>
            </Filter.Root>

            <Filter.Root>
              <Filter.Container title="Tipo de Imóvel">
                <ul className="text-[10px] text-white space-y-[6px] my-2">
                  <li className="flex space-x-1">
                    <input type="checkbox" value="casa" {...register("type_property")} />
                    <p>Casa</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" value="apartamento" {...register("type_property")} />
                    <p>Apartamento</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" value="terreno" {...register("type_property")} />
                    <p>Terreno</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" value="condominium" {...register("type_property")} />
                    <p>Condominium</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" value="rural" {...register("type_property")} />
                    <p>Área Rural</p>
                  </li>
                  <li className="flex space-x-1">
                    <input type="checkbox" value="comercial" {...register("type_property")} />
                    <p>Comercial</p>
                  </li>
                </ul>
              </Filter.Container>
            </Filter.Root>

            <Filter.Root>
              <Filter.Container title="Área Min. em M²">
                <input type="number" placeholder="00000 M²" className="w-20 h-5 bg-transparent border-2 border-gray-500 rounded text-[10px] pl-[2px] outline-none text-white"></input>
              </Filter.Container>
            </Filter.Root>

            <Button type="submit" text="APLICAR" className="w-[125px] h-7" />
          </form>
        </div>
        <div className="grid grid-cols-2 mt-[35px] -z-10">

          {data?.map((imovel) => (
            <MediumCardContainer key={imovel.id}>
              <div className="grid grid-col-2 gap-2 items-stretch">
                <Image priority width={300} height={0} className="col-start-1 row-span-2 w-[300px] h-[215px] rounded-t-xl" src={imovel.images?.[0]?.url || Casa} alt="" />
                <Image priority width={300} height={0} className="col-start-2 rounded-t-xl w-[135px] h-[105px]" src={imovel.images?.[1]?.url || Casa} alt="" />
                <Image priority width={300} height={0} className="col-start-2 w-[135px] h-[105px]" src={imovel.images?.[2]?.url || Casa} alt="" />
              </div>

              <div className="flex justify-between">
                <div>
                  <div className="flex mt-1">
                    <h1 className="text-[#088403] text-xl mr-2 ">{`${imovel.type_purchase != 'aluguel' ? `R$ ${imovel.value}` : `R$ ${imovel.value} p/mês`}`}</h1>
                    <h1 className="text-[#04403A] text-xl capitalize">{imovel.type_purchase}</h1>
                  </div>
                  <p className="capitalize">{imovel.type_property}</p>
                  <p className="text-xs">{imovel.city}, {imovel.state}</p>
                  <ul className='grid grid-rows-3 grid-flow-col mt-2 gap-1'>
                    <li className='flex'>
                      <Image className="w-[26px]" src={M2} alt='Metros Quadrado' />
                      <p className='ml-1'>{imovel.square_meters} m²</p>
                    </li>
                    <li className='flex'>
                      <Image className="w-[26px]" src={Cama} alt='Quarto' />
                      <p className='ml-1'>{imovel.bedrooms_quantity} Quartos</p>
                    </li>
                    <li className='flex'>
                      <Image className="w-[26px]" src={Banheira} alt='Banheiro' />
                      <p className='ml-1'>{imovel.toilet_quantity} Banheiros</p>
                    </li>
                    {imovel.garage_quantity != undefined ?
                      <li className='flex'>
                        <Image className="w-[22px]" src={Garagem} alt='Garagem' />
                        <p className='ml-1'>{imovel.garage_quantity} Vagas</p>
                      </li>
                      : ''}

                    {imovel.pool_size != undefined && imovel.pool_size > 0 ?
                      <li className='flex'>
                        <Image className="w-[22px]" src={Piscina} alt='Piscina' />
                        <p className='ml-1 '>{imovel.pool_size} m²</p>
                      </li>
                      : ''}

                    {imovel.recreation_area === true ?
                      <li className='flex'>
                        <Image className="w-[26px]" src={Area_Gourmet} alt='Área goumert' />
                        <p className='ml-1'>{imovel.recreation_area} Área goumert</p>
                      </li>
                      : ''}
                  </ul>
                </div>


                <div className="w-[133px] flex flex-col justify-between">
                  <div className="flex justify-end m-2">
                    <Image className=" w-[30px] h-[30px]" src={LogoMCMV} alt="" />
                    {imovel.plant === true ?
                      <span className="font-semibold text-[5.5px] text-white rounded-full bg-[#085942] w-[30px] h-[30px] text-center flex items-center ml-2">NA PLANTA</span>
                      : ''}

                  </div>
                  <div className="flex justify-center">
                    <Button className="mb-[-7px] bg-gradient-to-r from-[#04403A] to-[#3F957B] : font-normal text-sm h-[40px] max-w-[75px] rounded-[13px]" text={"Saber Mais"} />
                  </div>

                </div>
              </div>
            </MediumCardContainer>

          ))}
        </div>
      </section>

    </>
  );
}
