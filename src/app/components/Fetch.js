import { Button, Spinner } from "react-bootstrap";
import clsx from "clsx";
import { IoReload } from "react-icons/io5";
import { useDispatch } from "react-redux";

const Fetch = ({ fullPage, error, refetch }) => {
    const classes = clsx(
        "d-flex gap-3 align-items-center justify-content-center bg-white",
        { "position-fixed top-0 end-0 start-0 bottom-0": fullPage }
    );

    const dispatch = useDispatch();

    const handleRefetch = () => {
        dispatch(refetch());
    };

    return (
        <div style={{ opacity: 0.75 }} className={classes}>
            {error ? (
                <div className="d-flex flex-column gap-4">
                    <Button
                        onClick={handleRefetch}
                        variant="primary"
                        className="rounded-circle"
                    >
                        <IoReload />
                    </Button>
                    <span>failed</span>
                </div>
            ) : (
                <>
                    <Spinner variant={"primary"} animation={"border"} />
                    <span>Please wait ...</span>
                </>
            )}
        </div>
    );
};

export default Fetch;
