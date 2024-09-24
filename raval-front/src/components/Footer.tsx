import Logo from "./Logo"
import LogoRaval from "@/Images/LogoRaval.png";
import IconeRaval from "@/Images/IconeRaval.png"
import { NavBar } from "./Navbar";

const Footer = () => {
    return (
        <footer className="bg-[#2F735F] min-h-52 flex justify-center">
            <div className="flex text-[13px] text-white leading-6 mt-8">
                <div className="flex flex-col items-center mr-9">
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
                <div className="mr-11">
                    <h1 className="font-semibold text-base text-[#04403A]">Encontre seu imóvel</h1>
                    <p>Casas a venda</p>
                    <p>Apertamentos a venda</p>
                    <p>Minha casa minha vida</p>
                    <p>Alugue seu imóvel</p>
                </div>
                <div className="mr-7">
                    <h1 className="font-semibold text-base text-[#04403A]">Entre em contato</h1>
                    <p>Trabalhe conosco</p>
                    <p>Seja um corretor</p>
                    <p>Venda seu imóvel</p>
                    <p>Solicite um atendimento</p>
                </div>
                <div>
                    <h1 className="font-semibold text-base text-[#04403A]">Central de vendas</h1>
                    <p>61 99999-9999</p>
                    <p>61 99999-9999</p>
                    <h1 className="font-semibold text-base text-[#04403A]">Siga a RAVAL</h1>
                </div>
            </div>
        </footer>
    )
}

export default Footer