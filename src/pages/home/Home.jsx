import Banner from "../../components/Banner";
import RoomCard from "../../components/RoomCard";
import RoomSlider from "../../components/RoomSlider";

const Home = () => {
    return (
        <div className="space-y-10">
           <Banner></Banner>
           <RoomSlider></RoomSlider>
           <RoomCard></RoomCard>
        </div>
    );
};

export default Home;