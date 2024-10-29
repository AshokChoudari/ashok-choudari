
import introImg from "./../../Images/IntroImg.JPG";
function Intro(){
    return(
        <div className="bg-black text-white flex justify-center items-center justify-around  pt-16">
            <div>
                <h2 className='font-bold font-serif text-5xl'>Hello 👋 I'm Ashok Choudari</h2>
                <p className="font-sans text-4xl">Wed developer🧑‍💻</p>
            </div>
            <div>
                <img src={introImg} alt="" className="w-96 relative justify-end" />
            </div>
        </div>
    );
}

export default Intro