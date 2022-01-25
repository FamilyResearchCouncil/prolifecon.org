import React, { useState, useRef, useEffect } from "react";
import Burger from '../navigation/burger'
import Menu from '../navigation/menu'
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import styles from './Header.module.css'
import Image from "next/image";
import Link from "next/link";



const Header = () => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    const [hideLogo, setHideLogo] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setHideLogo(window.scrollY > 200);
        });
    }, []);

    return (
        <header ref={node} className={styles.header}>
            <Link href={"/"}>
                <a className={styles.logoLink}>
                    <Image src="/img/sm_logo_plc.png" alt="Logo" width={10} height={10} layout='responsive' />
                </a>
            </Link>
            <Burger open={open} setOpen={setOpen} />
            <Menu  open={open} setOpen={setOpen} />
        </header>
    );
}

export default Header;