import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TopFood({ data }) {
    const id = data;
    return (
        <div className="border-2 border-green-300 shadow-lg p-3 rounded-lg">
            <div className="h-[40vh] relative overflow-hidden rounded-lg">
                <img
                    className="w-full h-full rounded-lg absolute hover:transform hover:scale-[1.04] transition-all cursor-pointer"
                    src="/banner.webp"
                    alt=""
                />
            </div>

            <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mt-5 text-black">
                    Food Name
                </h1>

                <div className="flex justify-between">
                    <h1 className="text-[13px]">
                        Category:{" "}
                        <span className="font-semibold hover:underline cursor-pointer">
                            Food Category
                        </span>
                    </h1>

                    <h1 className="text-[13px]">
                        Price:{" "}
                        <span className="font-semibold hover:underline cursor-pointer">
                            Food price
                        </span>
                    </h1>
                </div>

                <hr className="my-3" />

                <Link to={`/food/${id}`}>
                    <button className="border py-2 w-full rounded-lg border-green-600 hover:bg-green-600 hover:text-white transition-all font-bold text-lg text-black">
                        Details
                    </button>
                </Link>
            </div>
        </div>
    );
}

TopFood.propTypes = {
    data: PropTypes.object,
};

export default TopFood;
