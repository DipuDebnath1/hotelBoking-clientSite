import { FaSnowboarding } from "react-icons/fa";

const Location = () => {
    return (
        <div>
            <div>
                <h2 className="py-5 text-4xl font-semibold text-start">Find Our Location</h2>

            </div>


            <div className="flex gap-10 items-center flex-col md:flex-row ">
                <iframe className="w-8/12 h-[400px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.383615473065!2d91.98150667501001!3d21.41416157443046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adc880c658b5f1%3A0xbe5e1e83da2852a3!2sSayeman%20Beach%20Resort!5e0!3m2!1sen!2sbd!4v1699209344554!5m2!1sen!2sbd" allowfullscreen="" loading="lazy"></iframe>
                <div className="text-start space-y-2">
                    <h2 className="text-4xl font-semibold">Things to do</h2>
                    <p>Stay at Sayeman and enjoy the following activities at our private beach:</p>
                    <div>
                        <div className="flex justify-between border-b p-2">
                            <h2 className="text-lg">Jet Ski</h2>
                            <p><FaSnowboarding /></p>
                        </div>
                        <div className="flex justify-between border-b p-2">
                            <h2 className="text-lg">Kayak</h2>
                            <p><FaSnowboarding /></p>
                        </div>
                        <div className="flex justify-between border-b p-2">
                            <h2 className="text-lg">Surf Board</h2>
                            <p><FaSnowboarding /></p>
                        </div>
                        <div className="flex justify-between border-b p-2">
                            <h2 className="text-lg">Beach Bike</h2>
                            <p><FaSnowboarding /></p>
                        </div>
                        <div className="flex justify-between border-b p-2">
                            <h2 className="text-lg">Beach Chairs</h2>
                            <p><FaSnowboarding /></p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Location;