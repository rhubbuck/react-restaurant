import './App.css';
import {db} from './Firebase-config'
import { collection, getDocs, addDoc, doc, deleteDoc } from 'firebase/firestore';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import MainInfo from './Components/MainInfo';
import Gallery from './Components/Gallery';
import Menu from './Components/MenuSection';
import Footer from './Components/Footer';
import Reservations from './Components/Reservations';
import { useEffect, useState } from 'react';
import DatePicker from 'react-date-picker';
import emailjs from 'emailjs-com';
// import { useForm } from 'react-hook-form';

function App() {

  // const { register, handleSubmit } = useForm();

  const [newName, setNewName] = useState("");
  const [newParty, setParty] = useState(0);
  const [users, setUsers] = useState([]);
  const [newDate, setNewDate] = useState(new Date());
  const [newTime, setNewTime] = useState("");
  const reservationsCollectionRef = collection(db, "reservations");

  const createReservation = async () => {
      await addDoc(reservationsCollectionRef, {name: newName, party: Number(newParty), date: newDate, time: newTime})
  }

  // function sendEmail (e) {
  //   e.preventDefault();

  //   emailjs.sendForm('gmail', 'template_javau0m', e.target, 'user_ViWYiGu4yLdFIXPcCAgcc')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // }

  useEffect(() => {

    const getUsers = async () => {
        const data = await getDocs(reservationsCollectionRef);
        console.log(data)
        setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id })))
        console.log(users);
    }

    getUsers()
  }, [])

  // const onSubmit = (data) => {
  //   console.log(data)
  // }

  return (
    <div className="App">
        <Navbar />
        <Hero />
        {/* <form onSubmit={handleSubmit(onSubmit)}> */}
          <input placeholder="Name" onChange={(event) => {setNewName(event.target.value)}}/>
          <input type="number" placeholder="Party Size" onChange={(event) => {setParty(event.target.value)}}/>
          <button onClick={createReservation}>Enter</button>
          <DatePicker
          onChange={setNewDate}
          value={newDate}
          />
          <select id="reservationTime" onChange={(event) => {setNewTime(event.target.value)}}>
            <option value="11:00 AM">11:00 AM</option>
            <option value="11:30 PM">11:30 AM</option>
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
      {/* </form> */}
      {console.log(newDate)}

        <MainInfo />
        <Reservations />
        <Gallery />
        <Menu />
        <Footer />
    </div>
  );
}

export default App;
