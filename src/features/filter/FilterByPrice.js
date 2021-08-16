import { Range } from "rc-slider";
import { useDispatch, useSelector } from "react-redux";
import { changePriceRange, initialRange } from "./filterSlice";

const FilterByPrice = () => {
    const priceRange = useSelector(state => state.filter.priceRange);

    const dispatch = useDispatch();

    const handleRange = value => {
        dispatch(changePriceRange(value));
    };

    return (
        <div className="pe-4">
            <h5 className="mb-4">Price range</h5>

            <Range
                allowCross={false}
                min={initialRange[0]}
                max={initialRange[1]}
                marks={{ [initialRange[0]]: "0", [initialRange[1]]: "1000" }}
                defaultValue={initialRange}
                value={priceRange}
                onChange={handleRange}
            />

            <div className="mt-5 px-3 py-2 border rounded shadow-sm d-flex justify-content-between">
                <div className="d-flex flex-column align-items-center">
                    <span className="fw-bold">from </span>
                    <span style={{ color: "#9f9f9f" }}>{priceRange[0]} $</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <span className="fw-bold">to </span>
                    <span style={{ color: "#9f9f9f" }}>{priceRange[1]} $</span>
                </div>
            </div>
        </div>
    );
};

export default FilterByPrice;
