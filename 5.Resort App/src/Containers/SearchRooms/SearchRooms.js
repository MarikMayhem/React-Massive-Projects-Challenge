import React, { useState, useEffect } from 'react';
import MainBanner from '../../Components/MainBanner/MainBanner';
import Room from '../../Components/Room/Room';
import data from '../../data';
import RoomBackground from '../../Assets/images/room-2.jpeg';

import './SearchRooms.scss'

const SearchRooms = () => {

    const [allRooms, setAllRooms] = useState(data.map(room => ({ ...room.fields, id: room.sys.id })))
    const [roomType, setRoomType] = useState('all')
    const [guests, setGuests] = useState('')
    const [roomPrice, setRoomPrice] = useState(600)
    const [roomSize, setRoomSize] = useState({ min: 0, max: 3000 })
    const [breakfast, setBreakfast] = useState(false)
    const [pets, setPets] = useState(false)

    useEffect(() => {
        const roomsExtract = data.map(room => ({ ...room.fields, id: room.sys.id }))
        roomsExtract.sort((a, b) => b.price - a.price)
        setAllRooms(roomsExtract)

        if (roomType || guests || roomPrice || roomSize || breakfast || pets) {
            setAllRooms(roomsExtract.filter((room) => {
                if ((roomType === room.type || roomType === 'all') && room.capacity >= +guests && room.price <= roomPrice
                    && (room.size >= roomSize.min && room.size <= roomSize.max) && (room.breakfast === breakfast || room.breakfast)
                    && (room.pets === pets || room.pets)) {
                    return true;
                }
                return false;
            }))
        }
    }, [guests, roomType, roomPrice, roomSize, breakfast, pets])

    return (
        <section className='rooms-section'>
            <MainBanner
                heading={"Our Rooms"}
                linkTo={"/"}
                backgroundImage={RoomBackground}
                linkDescription={"RETURN HOME"} />
            <h1>Search Rooms</h1>
            <hr class="underline" />
            <section className="search-menu">
                <form >
                    <div className="form-group">
                        <label htmlFor="type">Room Type</label>
                        <select name="type" onChange={(e) => setRoomType(e.target.value)}>
                            <option value="all">all</option>
                            <option value="triple">triple</option>
                            <option value="family">family</option>
                            <option value="double">double</option>
                            <option value="single">single</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="guests">Guests</label>
                        <select name="guests" onChange={(e) => setGuests(e.target.value)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Room Price ${roomPrice}</label>
                        <input className="range" value={roomPrice} type="range" name="price"
                            min="0" max="600" onChange={(e) => { setRoomPrice(e.target.value) }} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="sizes">Room Size</label>
                        <div name="sizes" className="sizes">
                            <input className="room-size" value={roomSize.min} type="number" name="min-size" onChange={(e) => { setRoomSize(oldState => ({ ...oldState, min: e.target.value })) }} />
                            <input className="room-size" value={roomSize.max} type="number" name="max-size" onChange={(e) => { setRoomSize(oldState => ({ ...oldState, max: e.target.value })) }} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div>
                            <input value={breakfast} type="checkbox" name="breakfast" onChange={(e) => { setBreakfast(!breakfast) }} />
                            <label htmlFor="breakfast">Breakfast</label>
                        </div>
                        <div>
                            <input value={pets} type="checkbox" name="pets" onChange={(e) => { setPets(!pets) }} />
                            <label htmlFor="pets">Pets</label>
                        </div>
                    </div>
                </form>
            </section>
            {allRooms.length ?
                <section className="search-rooms">
                    {allRooms.map(room => <Room
                        key={room.id}
                        id={room.id}
                        name={room.name}
                        image={room.images[0].fields.file.url}
                        price={room.price} />
                    )}
                </section>
                : <h2 className="error">Unfortunately No Rooms Matched Your Search Parameters</h2>
            }
        </section>
    );
}


export default SearchRooms;
