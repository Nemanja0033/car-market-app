import { EuroIcon, Phone, TagIcon,} from "lucide-react";
import { AdDataType } from "../types/AdDataType";

const AdCard: React.FC<AdDataType> = ({ brand, imageUrl, model, price, year }: AdDataType) => {

  return (
    <div className="md:w-[400px] w-full justify-self-center border mt-3 h-auto rounded-md shadow-md flex justify-center">
            <div className="w-[90%] m-3 flex-row">
            <div className="flex h-52 m-2 justify-center">
                <img className="h-full w-full rounded-sm" src={imageUrl} alt={model} />
            </div>

            <div className="flex justify-center gap-2 mx-4 text-xl font-bold">
                <span>{brand}</span>
                <span>{model}</span>
            </div>

            <div className="flex justify-between gap-4 mx-4 text-md  text-gray-500">
                <span className="flex"><EuroIcon />{price}</span>

                <span>{year}</span>
            </div>
        </div>
    </div>
  )
}

export default AdCard