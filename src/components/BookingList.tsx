"use client"
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { removeBooking } from "@/redux/features/bookSlice";

export default function BookingList() {

    const bookItems = useAppSelector((state) => state.bookSlice.bookItems);
    const dispatch = useDispatch<AppDispatch>();

    if (bookItems.length === 0) {
        return (
            <div className="pt-3 text-2xl text-center">No Vaccine Booking</div>
        )
    }
    return (
        <div className="pt-3">
        {
            bookItems.map((bookItem) => (
                <div className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
                key={bookItem.id}>
                    <div className="text-sm">Name: {bookItem.name}</div>
                    <div className="text-sm">Surname: {bookItem.surname}</div>
                    <div className="text-sm">ID: {bookItem.id}</div>
                    <div className="text-sm">Hospital: {bookItem.hospital}</div>
                    <div className="text-sm">Book date: {bookItem.bookDate}</div>
                    <button className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 
                    text-white shadow-sm" name="Remove Booking"
                    onClick={()=>{dispatch(removeBooking(bookItem.id))}}>Remove Booking</button>
                </div>
            ))
        }
        </div>
    )
}