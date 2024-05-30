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

const Header = ({ }) => {
    const [selectVissible, setSelectVissible] = useState<{ [key: string]: boolean }>({
        estado: false,
        cidade: false,
    });

    const [selectedValues, setSelectedValues] = useState<{ [key: string]: string }>({
        estado: 'ESTADOS',
        cidade: 'CIDADES',
    });

    const [estadoOptions, setEstadoOptions] = useState<string[]>([]);
    const [cidadeOptions, setCidadeOptions] = useState<string[]>([]);

    useEffect(() => {
        // Simular chamada para carregar dados do banco de dados
        const fetchData = async () => {
            // Simular delay de carregamento
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Dados simulados
            const fetchedEstadoOptions = ["ESTADOS", "SP", "RJ", "MG"];
            const fetchedCidadeOptions = ["CIDADES", "São Paulo", "Rio de Janeiro", "Belo Horizonte"];

            setEstadoOptions(fetchedEstadoOptions);
            setCidadeOptions(fetchedCidadeOptions);
        };

        fetchData();
    }, []);

    const toggleDropdown = (selectId: string) => {
        setSelectVissible((prevMenus) => ({
            ...prevMenus,
            [selectId]: !prevMenus[selectId],
        }));
    };

    const handleSelect = (selectId: string, value: string) => {
        setSelectedValues((prevValues) => ({
            ...prevValues,
            [selectId]: value,
        }));
        toggleDropdown(selectId);  // Close the dropdown after selection
    };

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
                    w-[514px]"
            >
                <NavBar.Button icon={HambugerButton} />
                <NavBar.NavMenu />
            </NavBar.Container>

            <NavBar.Container
                className="
                    w-[203px] 
                    rounded-3xl 
                    flex
                    items-end
                    justify-center"
            >
                <Logo logo={LogoRaval} iconeLogo={IconeRaval} />
            </NavBar.Container>

            <NavBar.Container
                className="
                    w-[504px] 
                    rounded-s-3xl 
                    items-center 
                    justify-center 
                    space-x-3">
                <Select.Root>
                    <Select.Button
                        text={selectedValues["estado"]}
                        icon={ArrowSelect}
                        className="w-[100px] h-[25px]"
                        onClick={() => toggleDropdown("estado")}
                    />
                    <Select.Menu
                        visible={selectVissible["estado"]}
                        options={estadoOptions}
                        onSelect={(value) => handleSelect("estado", value)}
                    />
                </Select.Root>

                <Select.Root>
                    <Select.Button
                        text={selectedValues["cidade"]}
                        icon={ArrowSelect}
                        className="w-[200px] h-[25px]"
                        onClick={() => toggleDropdown("cidade")}
                    />
                    <Select.Menu
                        visible={selectVissible["cidade"]}
                        options={cidadeOptions}
                        onSelect={(value) => handleSelect("cidade", value)}
                    />
                </Select.Root>

                <Button
                    icon={Arrow}
                    text="BUSCAR"
                />

                <div className="mt-1 pl-[10px]">
                    <Link href='' className="flex flex-col items-center">
                        <Image 
                            src={iconePerfil} 
                            alt='Icone de perfil'
                            className="drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]"
                        />
                        <p className="font-normal text-[7px] text-white">LOGAR</p>
                    </Link>
                </div>
            </NavBar.Container>


        </header >
    )
}

export default Header
