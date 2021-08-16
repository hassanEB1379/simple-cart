import FilterByPrice from "../filter/FilterByPrice";
import FilterByCategory from "../filter/FilterByCategory";

// style of range slider
import "rc-slider/assets/index.css";

export const categories = [
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
];

const ProductSidebar = () => {
    return (
        <div style={{ top: 85 }} className="position-sticky">
            <div className="position-relative">
                <h3 className="mb-3">filters</h3>

                <hr />

                <FilterByCategory categories={categories} />

                <hr />

                <FilterByPrice />
            </div>
        </div>
    );
};

export default ProductSidebar;
