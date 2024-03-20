"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import styles from "./banner.module.css";
import { useSession } from "next-auth/react";

export default function Banner() {
    const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg'];
    const [index, setIndex] = useState(0);
    const router = useRouter();
    const { data: session } = useSession();

    return (
        <div className={styles.banner} onClick={()=>{ setIndex(index+1) }}>
            <Image src={covers[index%4]}
            alt='cover'
            fill={true}
            priority
            style={{objectFit:"cover"}}
            className="opacity-50"/>
            {
                session? <div className="absolute top-5 right-5 m-2">Welcome {session.user?.name}</div> : null
            }
            <div className="relative top-32 z-20 text-center">
                <h1 className="text-4xl font-medium">Vaccine Service Center</h1>
                <h3 className="text-xl font-serif">Information about vaccination</h3>
            </div>
            <button className='bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent'
            onClick={(e)=>{ e.stopPropagation(); router.push('/hospital')}}>Select Hospital</button>
        </div>
    );
}