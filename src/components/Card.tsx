import Image from "next/image";
import InteractiveCard from "./InteractiveCard";
import { Rating } from "@mui/material";

export default function Card({hospitalName, imgSrc, rating, onRate}
    :{hospitalName: string, imgSrc: string, rating?:number, onRate?:Function}) {
    return (
        <InteractiveCard contentName={hospitalName}>
            <div className="w-full h-[70%] relative rounded-t-lg">
                <Image src={imgSrc}
                alt='Product Picture'
                fill={true}
                objectFit="cover"
                className="object-cover rounded-t-lg"/>
            </div>
            <div className="w-full h-[15%] p-[10px]">{hospitalName}</div>
            {
                onRate?
                <Rating id={hospitalName + " Rating"} name={hospitalName + " Rating"} data-testid={hospitalName + " Rating"}
                value={rating} 
                onChange={(e, newValue)=>{e.preventDefault(); onRate(hospitalName, newValue)}}
                />
                : ''
            }
        </InteractiveCard>
    );
}