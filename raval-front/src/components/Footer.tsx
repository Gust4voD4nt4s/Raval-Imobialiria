import Logo from "./Logo"
import LogoRaval from "@/Images/LogoRaval.png";
import IconeRaval from "@/Images/IconeRaval.png"
import { NavBar } from "./Navbar";

const Footer = () => {
    return (
        <footer className="bg-[#2F735F] min-h-52 py-5 flex justify-center items-center max-tablet_mini:flex-col max-mobile:text-center" >
            <div className="flex flex-col items-center mr-9 text-white leading-6 text-[13px] max-tablet_mini:mr-0">
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
                <p className="mt-2">
                    Copyright © 2024 | RAVAL.<br />Todos os direitos reservados.<br />CNPJ: 12312313123
                </p>
            </div>
            <div className="flex text-[13px] text-white leading-6 max-tablet:flex-col ">
                <div className="flex max-mobile:flex-col">
                    <div className="mr-11 max-mobile:mr-0">
                        <h1 className="font-semibold text-base text-[#04403A]">Encontre seu imóvel</h1>
                        <p>Casas a venda</p>
                        <p>Apertamentos a venda</p>
                        <p>Minha casa minha vida</p>
                        <p>Alugue seu imóvel</p>
                    </div>
                    <div className="mr-7 max-mobile:mr-0">
                        <h1 className="font-semibold text-base text-[#04403A]">Entre em contato</h1>
                        <p>Trabalhe conosco</p>
                        <p>Seja um corretor</p>
                        <p>Venda seu imóvel</p>
                        <p>Solicite um atendimento</p>
                    </div>
                </div>
                <div className="max-tablet:flex max-mobile:flex-col ">
                    <div className="max-tablet:mr-14 max-mobile:mr-0">
                        <h1 className="font-semibold text-base text-[#04403A]">Central de vendas</h1>
                        <p>61 99999-9999</p>
                        <p>61 99999-9999</p>
                    </div>
                    <div>
                        <h1 className="font-semibold text-base text-[#04403A]">Siga a RAVAL</h1>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer