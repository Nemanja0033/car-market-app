import { House, Car, Heart } from "lucide-react"
import { Link } from "react-router-dom"

const SmNavbar = () => {
  return (
    <nav className="w-full h-[50px] bg-gray-50 flex justify-around items-center md:hidden fixed bottom-0">
         <Link className="flex gap-1 items-center hover:text-primary" to={'/'}><House size={24} /></Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={'/ads'}><Car size={24} /></Link>
          <Link className="flex gap-1 items-center hover:text-primary" to={'/favourites/:id'}><Heart size={24} /></Link>
    </nav>
  )
}

export default SmNavbar