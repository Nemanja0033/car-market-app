import { useState } from "react";
import { carBrands } from "../utils/carBrands";
import { fuelType } from "../utils/fuelType";
import { gearbox } from "../utils/gearbox";
import { carColors } from "../utils/carColors";
import { carBodyTypes } from "../utils/carBody";
import { carYears } from "../helpers/carYear";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../../config/firebase";

const AddForm = () => {
    const [brand, setBrand] = useState<string>("");
    const [model, setModel] = useState<string>("");
    const [fuel, setFuel] = useState<string>("");
    const [engineCm, setEngineCm] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const [year, setYear] = useState<string>("");
    const [gearboxType, setGearbox] = useState<string>("");
    const [carBodyType, setCarBodyType] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const [images, setImages] = useState<File[]>([]);
    const [previews, setPreviews] = useState<string[]>([]);
    const [city, setCity] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const fileArray = Array.from(files);
            setImages(fileArray);

            const previewUrls = fileArray.map((file) => URL.createObjectURL(file));
            setPreviews(previewUrls);
        }
    };
    
    const adsCollectionRef = collection(db, "ads");

    const handleCreateAd =  async () => {
            await addDoc(adsCollectionRef, {
                brand,
                model,
                fuel,
                engineCm,
                color,
                year,
                gearboxType,
                carBodyType,
                price,
                city,
                phone,
                author:{
                    username: auth.currentUser?.displayName,
                    id: auth.currentUser?.uid,
                }
            }
        );
        location.reload();
    }

    return (
        <div className="w-full h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <div className="flex justify-center items-center">
                    <img className="h-16 cursor-pointer" src="/logo.png" alt="car market logo" />
                </div>
                <form className="space-y-4">
                    <select
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                        required
                        className="w-full border shadow-lg rounded-lg h-10 px-3"
                    >
                        <option value="" disabled>
                            Select Brand
                        </option>
                        {carBrands.map((brand) => (
                            <option key={brand} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                    <input
                        value={model}
                        onChange={(e) => setModel(e.target.value)}
                        className="w-full shadow-lg h-10 border rounded-lg px-3"
                        type="text"
                        placeholder="Model"
                        required
                    />
                    <div className="flex flex-col md:flex-row md:gap-3 space-y-3 md:space-y-0">
                        <select
                            value={fuel}
                            onChange={(e) => setFuel(e.target.value)}
                            required
                            className="w-full border shadow-lg rounded-lg h-10 px-3"
                        >
                            <option value="" disabled>
                                Select Fuel Type
                            </option>
                            {fuelType.map((fuel) => (
                                <option key={fuel} value={fuel}>
                                    {fuel}
                                </option>
                            ))}
                        </select>
                        <input
                            className="w-full shadow-lg h-10 border rounded-lg px-3"
                            placeholder="Engine displacement"
                            type="text"
                            value={engineCm}
                            onChange={(e) => setEngineCm(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-3 space-y-3 md:space-y-0">
                        <select
                            value={gearboxType}
                            onChange={(e) => setGearbox(e.target.value)}
                            required
                            className="w-full border shadow-lg rounded-lg h-10 px-3"
                        >
                            <option value="" disabled>
                                Select Gearbox
                            </option>
                            {gearbox.map((gear) => (
                                <option key={gear} value={gear}>
                                    {gear}
                                </option>
                            ))}
                        </select>
                        <select
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            required
                            className="w-full border shadow-lg rounded-lg h-10 px-3"
                        >
                            <option value="" disabled>
                                Select Color
                            </option>
                            {carColors.map((color) => (
                                <option key={color} value={color}>
                                    {color}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="flex flex-col md:flex-row md:gap-3 space-y-3 md:space-y-0">
                        <select
                            value={carBodyType}
                            onChange={(e) => setCarBodyType(e.target.value)}
                            required
                            className="w-full border shadow-lg rounded-lg h-10 px-3"
                        >
                            <option value="" disabled>
                                Select Body Type
                            </option>
                            {carBodyTypes.map((body) => (
                                <option key={body} value={body}>
                                    {body}
                                </option>
                            ))}
                        </select>
                        <select
                            value={year}
                            onChange={(e) => setYear(e.target.value)}
                            required
                            className="w-full border shadow-lg rounded-lg h-10 px-3"
                        >
                            <option value="" disabled>
                                Select Year
                            </option>
                            {carYears.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                    </div>
                    <input
                        type="number"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full shadow-lg h-10 border rounded-lg px-3"
                        placeholder="Price ($)"
                        required
                    />
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full shadow-lg h-10 border rounded-lg px-3"
                        type="text"
                        placeholder="City"
                        required
                    />
                    <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full shadow-lg h-10 border rounded-lg px-3"
                        type="tel"
                        placeholder="Phone Number"
                        required
                    />
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-700">
                            Upload Car Images
                        </label>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImagesChange}
                            className="w-full shadow-lg border rounded-lg px-3 py-2"
                            multiple
                            required
                        />
                        {previews.length > 0 && (
                            <div className="grid grid-cols-3 gap-2 mt-4">
                                {previews.map((preview, index) => (
                                    <img
                                        key={index}
                                        src={preview}
                                        alt={`Preview ${index + 1}`}
                                        className="w-full h-auto max-h-32 object-cover rounded-lg shadow-lg"
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                    <button
                        type="button"
                        className="w-full bg-primary text-white h-10 rounded-lg shadow-lg hover:bg-black"
                        onClick={handleCreateAd}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddForm;
