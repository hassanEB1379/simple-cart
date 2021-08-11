import { Spinner } from "react-bootstrap";
import clsx from "clsx";

const Fetch = ({ fullPage }) => {
    const classes = clsx(
        "d-flex gap-3 align-items-center justify-content-center bg-white",
        { "position-fixed top-0 end-0 start-0 bottom-0": fullPage }
    );

    return (
        <div style={{ opacity: 0.75 }} className={classes}>
            <Spinner variant={"primary"} animation={"border"} />
            <span>Please wait ...</span>
        </div>
    );
};

export default Fetch;
