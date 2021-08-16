import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import { CgClose } from "react-icons/all";
import { changePriceRange, initialRange, removeCategory } from "./filterSlice";

const SelectedFilters = () => {
    const { priceRange, categories } = useSelector(state => state.filter);

    const dispatch = useDispatch();

    const handleRemoveCategory = category => {
        dispatch(removeCategory(category));
    };

    const setToInitialRange = () => {
        dispatch(changePriceRange(initialRange));
    };

    return (
        <div className="mb-4 d-flex gap-3 align-items-center flex-wrap">
            <span className="fs-5 fw-bold">Selected filters :</span>

            <Badge pill bg="success">
                {priceRange[0]}$ - {priceRange[1]}$
                <span
                    onClick={setToInitialRange}
                    className="ms-2 cursor-pointer"
                >
                    <CgClose />
                </span>
            </Badge>

            {categories.map((category, i) => (
                <Badge pill key={i} bg="primary">
                    {category}
                    <span
                        onClick={() => handleRemoveCategory(category)}
                        className="ms-2 cursor-pointer"
                    >
                        <CgClose />
                    </span>
                </Badge>
            ))}
        </div>
    );
};

export default SelectedFilters;
