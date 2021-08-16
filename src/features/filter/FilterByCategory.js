import { useDispatch, useSelector } from "react-redux";
import { addCategory, removeCategory } from "./filterSlice";
import { Nav } from "react-bootstrap";

const FilterByCategory = ({ categories }) => {
    const categoriesFiltered = useSelector(state => state.filter.categories);

    const dispatch = useDispatch();

    const handleFilterCategory = e => {
        const { checked, name } = e.target;

        if (checked) {
            dispatch(addCategory(name));
        } else {
            dispatch(removeCategory(name));
        }
    };

    return (
        <>
            <h5 className="mb-4 fs-5">categories</h5>

            <Nav style={{ top: 85 }} className="flex-column">
                {categories.map((category, index) => (
                    <div key={index} className="form-check fw-bold pb-3">
                        <input
                            onChange={handleFilterCategory}
                            checked={
                                categoriesFiltered.indexOf(category) !== -1
                            }
                            name={category}
                            id={category}
                            className="form-check-input"
                            type="checkbox"
                        />

                        <label htmlFor={category}>{category}</label>
                    </div>
                ))}
            </Nav>
        </>
    );
};

export default FilterByCategory;
