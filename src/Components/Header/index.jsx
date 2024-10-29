
import logo from './../../Images/AshokChoudari.JPG'

export default function Header(){
    return(
        <div className="p-6 bg-violet-600 flex items-center fixed w-full z-10">
             <div>
                <img src={logo} className=" rounded-full  cursor-pointer w-10"/>
             </div>
             <div className="flex-1">
                <ul className="flex  justify-end  gap-10">
                    <li className="cursor-pointer ">Home</li>
                    <li className="cursor-pointer">About </li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
             </div>
        </div>
    )
}