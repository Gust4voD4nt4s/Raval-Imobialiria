import Image from "next/image"
import HambugerButton from "@/Images/HamburgerButton.png"
import Logo from "@/Images/LogoRaval.png";
import IconeRaval from "@/Images/IconeRaval.png"
import Link from "next/link"

interface HeaderProps {

}

const Header = ({ }: HeaderProps) => {
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
                    className="flex mb-1"
                >
                    <Image src={IconeRaval} alt={"Icone da logo"} className="w-[22px] h-[22px] mr-[2.35px]"/>
                    <Image src={Logo} alt={"Logo"}/>
                </Link>
            </div>
            <div
                className="
                bg-[rgb(4,64,58)] 
                w-[504px] 
                h-[50px] 
                rounded-s-3xl 
                drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
            >

            </div>
        </header>
    )
}

export default Header
