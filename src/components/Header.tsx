'use client'
import Image from "next/image"
import HambugerButton from "@/Images/HamburgerButton.png"
import Logo from "@/Images/LogoRaval.png";
import IconeRaval from "@/Images/IconeRaval.png"
import Arrow from "@/Images/Arrow.png"
import ArrowSelect from "@/Images/ArrowSelect.png"
import Link from "next/link"
import { useState, useEffect } from "react";
import { Select } from "./Select";

const Header = ({ }) => {
    const [selectVissible, setSelectVissible] = useState<{[key: string]: boolean}>({
        estado: false,
        cidade: false,
    });

    const [selectedValues, setSelectedValues] = useState<{[key: string]: string}>({
        estado: 'Estados',
        cidade: 'Cidade',
    });

    const [estadoOptions, setEstadoOptions] = useState<string[]>([]);
    const [cidadeOptions, setCidadeOptions] = useState<string[]>([]);

    useEffect(() => {
        // Simular chamada para carregar dados do banco de dados
        const fetchData = async () => {
            // Simular delay de carregamento
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // Dados simulados
            const fetchedEstadoOptions = ["Estados", "SP", "RJ", "MG"];
            const fetchedCidadeOptions = ["Cidade", "São Paulo", "Rio de Janeiro", "Belo Horizonte"];

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
            <div
                className="
                bg-[#04403A] 
                w-[514px] 
                h-[50px] 
                rounded-e-3xl 
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                flex
                items-center"
            >
                <button
                    className="
                    ml-3 
                    mr-7"
                >
                    <Image
                        src={HambugerButton}
                        alt="3 traços"
                    />
                </button>
                <nav>
                    <ul
                        className="
                        flex
                        space-x-3
                        text-white"
                    >
                        <Link
                            href={""}
                            className="
                            text-sm
                            font-medium"
                        >
                            <li>INÍCIO</li>
                        </Link>
                        <Link
                            href={""}
                            className="
                            text-sm
                            font-medium"
                        >
                            <li>COMPRAR</li>
                        </Link>
                        <Link
                            href={""}
                            className="
                            text-sm
                            font-medium"
                        >
                            <li>ALUGAR</li>
                        </Link>
                        <Link
                            href={""}
                            className="
                            text-sm
                            font-medium"
                        >
                            <li>VENDER</li>
                        </Link>
                        <Link
                            href={""}
                            className="
                            text-sm
                            font-medium"
                        >
                            <li>EMPREENDIMENTOS</li>
                        </Link>
                    </ul>
                </nav>
            </div>
            <div
                className="
                bg-[#04403A] 
                w-[203px] 
                h-[50px] 
                rounded-3xl 
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                flex
                items-end
                justify-center"
            >
                <Link
                    href={""}
                    className="
                    flex 
                    mb-1"
                >
                    <Image
                        src={IconeRaval}
                        alt={"Icone da logo"}
                        className="
                        w-[22px] 
                        h-[22px] 
                        mr-[2.35px]"
                    />
                    <Image
                        src={Logo}
                        alt={"Logo"}
                    />
                </Link>
            </div>
            <div
                className="
                bg-[rgb(4,64,58)] 
                w-[504px] 
                h-[50px] 
                rounded-s-3xl 
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]
                flex
                items-center
                justify-center
                space-x-3"
            >
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

                <button
                    className="
                    bg-[#085942] 
                    px-2 
                    h-6 
                    font-semibold 
                    text-[10px] 
                    text-white 
                    flex 
                    justify-center 
                    items-center 
                    rounded-full 
                    drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]"
                >
                    <Image src={Arrow} alt={''} className="mr-1"></Image>
                    <p>BUSCAR</p>
                </button>
            </div>
        </header>
    )
}

export default Header
