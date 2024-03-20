"use client"
import DateReserve from "@/components/DateReserve";
import { TextField, Select, Button, MenuItem } from "@mui/material";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";

export default function Booking() { 

    const [form, setForm] = useState({
        Name: '',
        Lastname: '',
        CitizenID: '',
    });

    const handleChange = (event:any) => {
        setForm({
            ...form,
            [event.target.id]: event.target.value,
        });
    };

    const [hospital, setHospital] = useState('Chula');
    
    const [reserveDate, setReserveDate] = useState<Dayjs|null>(null);

    const dispatch = useDispatch<AppDispatch>();

    const bookVaccine = () => {
        if (reserveDate) {
            const item:BookingItem = {
                name: form.Name,
                surname: form.Lastname,
                id: form.CitizenID,
                hospital: hospital,
                bookDate: dayjs(reserveDate).format('YYYY-MM-DD'),
            };
            console.log(item);
            dispatch(addBooking(item));
        }
    }

    return (
        <main className="pt-3 w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl font-medium">Vaccine Booking</div>            
            <div className="w-fit e-Lspace-y-2 flex flex-col items-center">
                <TextField name="Name" id="Name" label="Name" variant="standard" className="w-[200px]" onChange={handleChange}/>
                <TextField name="Lastname" id="Lastname" label="Lastname" variant="standard" className="w-[200px]" onChange={handleChange}/>
                <TextField name="Citizen ID" id="CitizenID" label="Citizen ID" variant="standard" className="w-[200px]" onChange={handleChange}/>
                <div>Hospital</div>
                <Select variant='standard' name='Hospital' id='Hospital' className='h-[2em] w-[200px]' onChange={(event)=>{setHospital(event.target.value as unknown as string)}}>
                    <MenuItem value='Chulalongkorn Hospital'>Chulalongkorn Hospital</MenuItem>
                    <MenuItem value='Rajavithi Hospital'>Rajavithi Hospital</MenuItem>
                    <MenuItem value='Thammasat University Hospital'>Thammasat University Hospital</MenuItem>
                </Select>
                
                <div className="text-md text-left text-gray-600">Date for vaccination</div>
                <DateReserve onDateChange={(value:Dayjs)=>{setReserveDate(value)}}/>
            </div>   

            <Button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
            text-white shadow-sm" name="Book Vaccine" onClick={bookVaccine}>Book Vaccine</Button>        
        </main>
    );
}