'use client'
import Image from "next/image"
import HambugerButton from "@/Images/HamburgerButton.png"
import LogoRaval from "@/Images/LogoRaval.png";
import IconeRaval from "@/Images/IconeRaval.png"
import Arrow from "@/Images/Arrow.png"
import ArrowSelect from "@/Images/ArrowSelect.png"
import Link from "next/link"
import { useState, useEffect } from "react";
import { Select } from "./Select";
import { NavBar } from "./Navbar";
import NavBarContainer from "./Navbar/NavBarContainer";
import iconePerfil from '@/Images/icone_perfil.png'
import Logo from "./Logo";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useFetch } from "@/hooks/useRequest";
import SelectButton from "./Select/SelectButton";





interface RepositoryStatesIbge {
    id: number,
    sigla: string,
    nome: string,
}

const Header = () => {

    const repoStates = useFetch<RepositoryStatesIbge[]>('https://servicodados.ibge.gov.br/api/v1/localidades/estados')


    const [city, setCity] = useState('Cidades')
    const [state, setState] = useState('Estados')
    const [visibilitySelectState, setVisibilitySelectState] = useState(false)
    const [visibilitySelectCity, setVisibilitySelectCity] = useState(false)

    const { register, handleSubmit } = useForm()

    const handleFilterProperty = (data: any) => {
        localStorage.setItem('state', data.state)
        localStorage.setItem('city', data.city)
        window.location.href = '/Empreendimentos'
    }



    return (
        <header
            className="
                bg-[#085942] 
                h-[50px] 
                flex 
                justify-between 
                drop-shadow-[0_20px_25px_rgba(0,0,0,0.25)]"
        >

            <NavBar.Container
                className="
                    rounded-e-3xl 
                    w-[514px]
                    max-mobile:flex
                    max-mobile:justify-center"
            >
                <NavBar.Button icon={HambugerButton} />
                <NavBar.NavMenu />
            </NavBar.Container>

            <NavBar.Container
                className="
                    min-w-[203px] 
                    rounded-3xl 
                    flex
                    items-end
                    justify-center
                    mx-3"
            >
                <Logo logo={LogoRaval} iconeLogo={IconeRaval} />
            </NavBar.Container>

            <NavBar.Container
                className="
                    w-[514px] 
                    rounded-s-3xl 
                    items-center 
                    justify-end
                    space-x-4
                    max-mobile:space-x-0
                    max-mobile:justify-center"
            >

                <form onSubmit={handleSubmit(handleFilterProperty)} className="flex space-x-4 max-mobile:space-x-0">
                    <Select.Root>
                        <Select.Button
                            text={state}
                            icon={ArrowSelect}
                            type="button"
                            onClick={() => setVisibilitySelectState(!visibilitySelectState)}
                            className="w-[100px] h-[25px] max-laptop:hidden"
                        />
                        {
                            visibilitySelectState === true ?
                                <div className="absolute py-2">
                                    <div className="h-52 w-[100px] overflow-y-scroll custom-scrollbar cursor-pointer rounded-xl">
                                        <ul className="bg-white mr-2">
                                            <li
                                                className='relative pl-2 pr-8 h-10 flex items-center hover:bg-slate-200'
                                                onClick={() => { setState('Estados'); setVisibilitySelectState(!visibilitySelectState) }}
                                            >
                                                <input className="absolute w-full h-full appearance-none cursor-pointer" type="radio" value={'Estados'} {...register('state')} />
                                                <span className='text-[12px]'>Estados</span>
                                            </li>
                                            {repoStates?.map((repo) => (
                                                <li
                                                    key={repo.id}
                                                    className='relative pl-2 pr-8 h-10 flex items-center hover:bg-slate-200 cursor-pointer'
                                                >
                                                    <input className="absolute w-full h-full appearance-none cursor-pointer" type="radio" onClick={() => { setState(repo.nome); setVisibilitySelectState(!visibilitySelectState) }} value={repo.nome} {...register('state')} />
                                                    <span className='text-[12px]'>{repo.sigla}</span>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                </div>
                                : ''
                        }

                    </Select.Root>
                    <Select.Root>
                        <Select.Button
                            text={city}
                            icon={ArrowSelect}
                            type="button"
                            onClick={() => setVisibilitySelectCity(!visibilitySelectCity)}
                            className="w-[200px] h-[25px] max-laptop:hidden"

                        />
                        {
                            visibilitySelectCity === true ?
                                <div className="absolute py-2">
                                    <div className="h-52 w-[200px] overflow-y-scroll custom-scrollbar cursor-pointer rounded-xl">
                                        <ul className="bg-white mr-2">
                                            <li
                                                className='relative pl-2 pr-8 h-10 flex items-center hover:bg-slate-200'
                                                onClick={() => {setCity('Cidades'); setVisibilitySelectCity(!visibilitySelectCity)}}
                                            >
                                                <input className="absolute w-full h-full appearance-none cursor-pointer" type="radio" value={'Cidades'} {...register('city')} />
                                                <span className='text-[12px]'>Cidades</span>
                                            </li>
                                            {repoStates?.map((repo) => (
                                                <li
                                                    key={repo.id}
                                                    className='relative pl-2 pr-8 h-10 flex items-center hover:bg-slate-200 cursor-pointer'
                                                >
                                                    <input className="absolute w-full h-full appearance-none cursor-pointer" type="radio" onClick={() => {setCity(repo.nome); setVisibilitySelectCity(!visibilitySelectCity)}} value={repo.nome} {...register('city')} />
                                                    <span className='text-[12px]'>{repo.nome}</span>
                                                </li>
                                            ))}

                                        </ul>
                                    </div>

                                </div>
                                : ''
                        }

                    </Select.Root>


                    <Button
                        type="submit"
                        icon={Arrow}
                        text="BUSCAR"
                        className="max-laptop:hidden"
                    />





                </form>




                <Link href='' className="flex flex-col items-center mt-1 pl-[10px] pr-[25px] max-mobile:pl-[10px] max-mobile:pr-0">
                    <Image
                        src={iconePerfil}
                        alt='Icone de perfil'
                        className="drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]"
                    />
                    <p className="font-normal text-[7px] text-white">LOGAR</p>
                </Link>

            </NavBar.Container>


        </header >

    )
}

export default Header
