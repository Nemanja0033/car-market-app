import { EuroIcon, Phone, TagIcon,} from "lucide-react";
import { AdDataType } from "../types/AdDataType";

const AdCard: React.FC<AdDataType> = ({ brand, carBodyType, city, color, engineCm, fuel, gearboxType, imageUrl, model, phone, price, year }: AdDataType) => {

  return (
    <div className="md:w-[400px] w-full h-auto rounded-sm shadow-sm flex justify-center">
            <div className="w-[90%] m-3 flex-row">
            <div className="flex h-52 m-2 justify-center">
                <img className="h-full w-full rounded-sm" src={imageUrl} alt={model} />
            </div>

            <div className="flex justify-between mx-4 text-xl font-bold">
                <span>{brand}</span>
                <span>{model}</span>
            </div>

            <div className="flex justify-between mx-4 mt-3 text-md text-gray-400">
                <span>{engineCm}</span>
                <span>{fuel}</span>
            </div>

            <div className="flex justify-between mx-4 mt-3 text-md text-gray-400">
                <span>{gearboxType}</span>
                <span>{carBodyType}</span>
            </div>

            <div className="flex justify-between mx-4 mt-3 text-md text-gray-400">
                <span>{color}</span>
                <span>{year}</span>
            </div>

            <div className="flex justify-between mx-4 mt-3 text-md font-bold">
                <span className="flex items-center gap-2"><TagIcon size={16} />{city}</span>
                <span className="flex items-center gap-2"><Phone size={16} />{phone}</span>
            </div>

            <div className="flex justify-end mx-4 mt-3 text-xl font-bold">
                <span className="flex items-center"><EuroIcon />{price}</span>
            </div>
        </div>
    </div>
  )
}

export default AdCard