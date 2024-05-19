import Link from "next/link"


const NavMenu = () => {
    return (
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
    )
}

export default NavMenu