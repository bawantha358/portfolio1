import React, { useRef, useEffect } from "react";
import css from './Dragable.module.css';
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaFilePen } from "react-icons/fa6";
import { MdOutlineContactless } from "react-icons/md";

const Dragable: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const elmnt = divRef.current;
        if (!elmnt) return;

        let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

        const header = headerRef.current;
        const dragMouseDown = (e: MouseEvent): void => {
            e.preventDefault();
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.addEventListener("mouseup", closeDragElement);
            document.addEventListener("mousemove", elementDrag);
        };

        const elementDrag = (e: MouseEvent): void => {
            e.preventDefault();
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            
            // Prevent dragging outside viewport
            const rect = elmnt.getBoundingClientRect();
            const maxLeft = window.innerWidth - rect.width;
            const maxTop = window.innerHeight - rect.height;

            let newLeft = Math.min(Math.max(elmnt.offsetLeft - pos1, 0), maxLeft);
            let newTop = Math.min(Math.max(elmnt.offsetTop - pos2, 0), maxTop);

            elmnt.style.left = `${newLeft}px`;
            elmnt.style.top = `${newTop}px`;
        };

        const closeDragElement = (): void => {
            document.removeEventListener("mouseup", closeDragElement);
            document.removeEventListener("mousemove", elementDrag);
        };

        if (header) {
            header.addEventListener("mousedown", dragMouseDown);
        } else {
            elmnt.addEventListener("mousedown", dragMouseDown);
        }

        return () => {
            if (header) header.removeEventListener("mousedown", dragMouseDown);
            elmnt.removeEventListener("mousedown", dragMouseDown);
        };
    }, []);

    // ✅ Correct Type for Style
    const divStyle: any = {
        width: "100px",
        height: "300px",
        position: "fixed",
        cursor: "move",
        bottom: "300px",
        right: "10px",
    };

    return (
        <div>
            <div id="mydiv" className={css.mydivheader} ref={divRef} style={divStyle}>
                <ul className={css.navList}>
                    <li><a className={css.active} href="#home"><FaHome /></a></li>
                    <li><a href="#aboutMe"><CgProfile /></a></li>
                    <li><a href="#skills"><HiOutlineLightBulb /></a></li>
                    <li><a href="#projects"><FaFilePen /></a></li>
                    <li><a href="#contact"><MdOutlineContactless /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default Dragable;
