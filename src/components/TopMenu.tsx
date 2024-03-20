import Image from "next/image";
import TopMenuItem from "./TopMenuItem";
import { getServerSession } from 'next-auth';
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function TopMenu () {
    const session = await getServerSession(authOptions);
    return (
        <div className="h-16 bg-white fixed top-0 left-0 right-0 z-30 border-t 
        border-solid border-lightgray flex flex-row justify-between">
            <div className="flex items-center justify-center">
                {
                    session? <TopMenuItem title="Sign-Out" pageRef="/api/auth/signout"/> :
                    <TopMenuItem title="Sign-In" pageRef="/api/auth/signin"/>
                }
                <TopMenuItem title="My Booking" pageRef="/mybooking"/>
            </div>
            <div className="flex flex-row">
                <TopMenuItem title="Booking" pageRef="/booking"/>
                <Image src={'/img/logo.png'} className="w-auto h-full"
                alt='logo' width={0} height={0} sizes="100vh"/>
            </div>
        </div>
    )
}