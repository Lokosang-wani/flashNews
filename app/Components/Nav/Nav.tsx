import Image from "next/image";
import { NAV_ITEMS } from "./Constant";
import logoPng from "@/public/logo.png";
import NavItem from "./NavItem";

export default function Nav(){
    return <>
    <div>
        <Image src={logoPng} alt="Logo" className="w-40" />
        <nav className="space-y-4 mt-4">
        {NAV_ITEMS.map((navItem) =>
            <NavItem {...navItem} /> )}
        </nav>
    </div>
    </>
}