"use client"
import { useReducer, useRef } from "react";
import Card from "@/components/Card";
import Link from "next/link";

export default function CardPanel() {

    const countRef = useRef(0);
    const inputRef = useRef<HTMLInputElement>(null);


    
    const initRatingList = new Map([
        ["Chulalongkorn Hospital", 5],
        ["Rajavithi Hospital", 5],
        ["Thammasat University Hospital", 5]
    ]);
    
    const showRatingReducer = (
        ratingList : Map<string, number>,
        action : {type:string, hospitalName:string, rating:number}
    ) => {
        switch (action.type) {
            case "update" : {
                ratingList.set(action.hospitalName, action.rating);
                return new Map(ratingList);
            }
            case "remove": {
                ratingList.delete(action.hospitalName);
                return new Map(ratingList);
            }
            default: {
                return ratingList;
            }
        }
    }

    // Mock Data
    const mockHospitalList = [
        {hid: "001", name:"Chulalongkorn Hospital", imgSrc: "/img/chula.jpg"},
        {hid: "002", name:"Rajavithi Hospital", imgSrc: "/img/rajavithi.jpg"},
        {hid: "003", name:"Thammasat University Hospital", imgSrc: "/img/thammasat.jpg"}
    ]

    const [ratingList, dispatch] = useReducer(showRatingReducer, initRatingList);

    return (
        <div>
            <div style={{margin:"20px", display:"flex", flexDirection:"row", 
                alignContent:"space-around", justifyContent:"space-around", flexWrap:"wrap"}}>
                {mockHospitalList.map( (hospital) => 
                    <Link href={`/hospital/${hospital.hid}`} className="w-1/5">
                    <Card key={hospital.hid} hospitalName={hospital.name} imgSrc={hospital.imgSrc}
                    rating={ratingList.get(hospital.name) || 0}
                    onRate={(hospital:string, rating:number) => dispatch({ type: "update", hospitalName:hospital, rating })}
                    />
                    </Link>
                )}
            </div>
            { Array.from(ratingList.entries()).map( ([hospital, rating]) => 
                <div key={hospital} data-testid={hospital}
                onClick={()=>{ dispatch({type:"remove", hospitalName:hospital, rating:rating}) }}>
                    {hospital} Rating: {rating}</div> 
            )}   
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            text-white shadow-sm" name="Book Vaccine"
            onClick={()=>{countRef.current = countRef.current+1; alert(countRef.current)}}>Count with REf</button>   
            
            <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            text-white shadow-sm" name="Book Vaccine"
            onClick={()=>{ if(inputRef.current != null) inputRef.current.focus() }}>Focus Input</button>   


            <input type="text" placeholder="Please fill" className="block text-gray-900 rounded-lg p-2 m-2 bg-purple-50 ring-1 ring-inset ring-purple-400
            focus:outline-none focus:bg-purple-200 focus:ring-2" ref={inputRef}></input>          
        </div>
    )
}