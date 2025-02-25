import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Title from "../../Components/Title";
import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";

function AddFood() {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [url, setUrl] = useState(null);
    const [foodQuantity1, setFoodQuantity] = useState(0);
    const [foodPrice1, setFoodPrice] = useState("$Price");
    const [foodName, setFoodName] = useState("Food Name");
    const [foodOrigin, setFoodOrigin] = useState("Origin");
    const [about, setAbout] = useState("About food is here");
    const [foodCategory, setFoodCategory] = useState("Food Category");
    // handle add new food
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = user.email;
        const name = user.displayName;
        const foodPrice = parseInt(foodPrice1);
        const foodQuantity = parseInt(foodQuantity1);
        const food = {
            url,
            foodName,
            foodCategory,
            foodOrigin,
            foodPrice,
            foodQuantity,
            about,
            email,
            name,
        };
        // post food data on database
        axios.post("/foods", food).then((res) => {
            if (res.data.insertedId) {
                toast.success("Food added success!");
                navigate("/foods");
            }
        });
        e.target.reset();
    };

    return (
        <div>
            {/* title for this page */}
            <Helmet>
                <title>Dish Dash | Add Food</title>
            </Helmet>

            {/* banner for title */}
            <Title title={`Add Food`} />

            <div className="container mx-auto mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 items-center justify-center">
                    <div className="w-full mb-5 md:mb-0 animate__animated animate__fadeInLeft">
                        <h3 className="text-center mb-5">Preview</h3>
                        <div className="border rounded-xl p-5 w-full">
                            <div className="w-full h-[20vh]">
                                <img
                                    className="w-full h-full rounded-xl"
                                    src={url}
                                    alt=""
                                />
                            </div>

                            <div className="px-5 md:px-10 mt-5">
                                <div className="flex items-center justify-between">
                                    <h4 className="mb-4">{foodName}</h4>
                                    <p>{foodCategory}</p>
                                </div>
                                <h3>
                                    <i>$ {foodPrice1}</i>
                                </h3>
                                <h5 className="mb-2">
                                    Quantity:{" "}
                                    <span className="text-[#cd9232bb] font-bold">
                                        {foodQuantity1}
                                    </span>
                                </h5>
                                <h5 className="mb-2">
                                    Origin:{" "}
                                    <span className="text-[#cd9232bb] font-bold">
                                        {foodOrigin}
                                    </span>
                                </h5>

                                <p className="mb-5">{about}</p>
                            </div>
                        </div>
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="col-span-2 animate__animated animate__fadeInRight"
                    >
                        <div className="mb-5">
                            <label htmlFor="Food Image">Food Image</label>
                            <input
                                required
                                type="url"
                                name="foodImageUrl"
                                placeholder="Food image URL"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setUrl(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Name">Food Name</label>
                            <input
                                required
                                type="text"
                                name="foodName"
                                placeholder="Food Name"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodName(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Category">Food Category</label>
                            <input
                                required
                                type="text"
                                name="category"
                                placeholder="Food category"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodCategory(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Price">Food Price</label>
                            <input
                                required
                                type="number"
                                name="price"
                                placeholder="Food price"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) => setFoodPrice(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="Food Quantity">Food Quantity</label>
                            <input
                                required
                                type="number"
                                name="quantity"
                                placeholder="Food quantity"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1"
                                onChange={(e) =>
                                    setFoodQuantity(e.target.value)
                                }
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="origin">Food Origin</label>
                            <input
                                required
                                type="text"
                                name="origin"
                                placeholder="Tell us about your food"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                onChange={(e) => setFoodOrigin(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="About">About Food</label>
                            <textarea
                                type="text"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                onChange={(e) => setAbout(e.target.value)}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email">Email</label>
                            <input
                                required
                                type="email"
                                name="aboutFood"
                                placeholder="Tell us about your food"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                disabled
                                value={user.email}
                            />
                        </div>

                        <div className="mb-5">
                            <label htmlFor="name">Name</label>
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Tell us about your food"
                                className="outline-none border border-[#cd9232bb] py-2 px-4 w-full rounded-lg mt-1 resize-none"
                                value={user.displayName}
                                disabled
                            />
                        </div>

                        <button
                            type="submit"
                            className="border border-[#cd9232bb] py-2 w-full rounded-lg text-lg hover:bg-[#cd9232bb] hover:text-white font-bold transition-all"
                        >
                            Add Food
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddFood;
