'use client';

import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container mx-auto flex justify-between">
                <div className="font-bold">Mi Aplicación</div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>
                    <li>
                        <Link href="/home">Home</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
