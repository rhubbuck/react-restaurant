import { React, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from "react-datepicker";
import './style.css';
import {db} from '../../Firebase-config';
import { collection, addDoc, } from 'firebase/firestore';
import Modal from './Modal';


import "react-datepicker/dist/react-datepicker.css";




const Reservations = () => {

    const { register, handleSubmit, control } = useForm();
    const reservationsCollectionRef = collection(db, "reservations");
    const [openModal, setOpenModal] = useState(false);
    const toggleModal = () => {
        setOpenModal(!openModal)
    }

    const createReservation = async (data) => {
        var dateString = data.date;
        dateString = new Date(dateString).toUTCString();
        dateString = dateString.split(' ').slice(0, 4).join(' ');
        await addDoc(reservationsCollectionRef, {name: data.name, party: data.party, date: dateString, time: data.time})
    }  

    const onSubmit = (data) => {
        var dateString = data.date;
        dateString = new Date(dateString).toUTCString();
        dateString = dateString.split(' ').slice(0, 4).join(' ');
        console.log(dateString);
        console.log(data);
        createReservation(data);
        toggleModal();
    }

    return (
        <div className="reservationContainer">
        <h1>Reservations</h1>
           <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Name: </label>
                    <input type="text" placeholder="Name" name="name" {...register("name", { required: "Required" })}/>
                </div>
                <div className="form-control">
                    <label>Party Size: </label>
                    <select name="party" {...register("party", { required: "Required" })}>
                        <option value='2'>2 People</option>
                        <option value='3'>3 People</option>
                        <option value='4'>4 People</option>
                        <option value='5'>5 People</option>
                        <option value='6'>6 People</option>
                        <option value='7'>7 People</option>
                        <option value='8'>8 People</option>
                        <option value='9'>9 People</option>
                        <option value='10'>10 People</option>
                        <option value='11'>11 People</option>
                        <option value='12'>12 People</option>
                        <option value='13'>13 People</option>
                        <option value='14'>14 People</option>
                        <option value='15'>15 People</option>
                    </select>
                </div>
                <div className="form-control">
                    <label>Date: </label>
                    <Controller name="date" control={control} defaultValue={null}
                        render={
                            ({field}) => <DatePicker onChange={(e) => field.onChange(e)} selected={field.value} placeholderText="Reservation date" />
                        }
                    />
                </div> 
                <div className="form-control">
                <label>Reservation Time</label>
                <select name="time" {...register("time", { required: "Required" })} >
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option> 
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="12:30 PM">12:30 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="1:30 PM">1:30 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="2:30 PM">2:30 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="3:30 PM">3:30 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="4:30 PM">4:30 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="6:00 PM">6:00 PM</option>
                    <option value="6:30 PM">6:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                    <option value="7:30 PM">7:30 PM</option>
                    <option value="8:00 PM">8:00 PM</option>
                </select>
                </div>
                <div className="form-control">
                    <label>Email: </label>
                    <input type="email" placeholder="Email" name="email" {...register("email", { required: "Required" })}/>
                </div>
                { !openModal ? 
                <div className="form-control">
                    <label></label>
                    <input className="submit" type="submit" />
               </div>
               : <Modal />
                }
           </form>
        </div>
    )
}

export default Reservations
