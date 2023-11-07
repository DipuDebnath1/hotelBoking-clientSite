import { useEffect, useState } from "react";

const RoomCard = () => {
    const [rooms, setRooms] = useState([])
    useEffect(()=>{
        fetch('room.json')
        .then(res=>res.json())
        .then(data=>setRooms(data))
    },[])
    return (
        <div>
            <h2 className="py-5 text-4xl font-semibold text-start">Book your Rooms</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 md:gap-10">
                {
                    rooms.map(room=><div className="text-start flex flex-col space-y-1" key={room.id}>
                        <img src={room.img} className="w-full h-52" alt={room.title} />
                      <div>
                      <div className="flex justify-between"> 
                        <h2 className="text-2xl font-semibold"> {room.title}</h2> 
                        <span>Aviable:{room.available ? <span>True</span> : <span>False</span>}</span>
                       </div>
                      
                      </div>
                        <p>Reguler Price:<del>{room.price}</del></p>
                        <p className="font-semibold text-orange-500">Spacial Price:{room.discounted_price}</p>
                        <p className="flex-grow">{room.description}</p>
                        <button className="btn bg-orange-400 border-none hover:bg-orange-500 text-white btn-primary">Book Now</button>
                    </div>)
                }
            </div>
            <div>



            </div>
        </div>
    );
};

export default RoomCard;