import { NavDropdown, Button, Modal } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

import { FiUser } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { logout } from "./userSlice";
import { clearOrders } from "../orders/ordersSlice";

const AccountDropdown = () => {
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleLogout = () => {
        dispatch(clearOrders());
        dispatch(logout());
    };

    return (
        <>
            <NavDropdown
                id="account-dropdown"
                title={<FiUser color="#fff" size={"1.5em"} />}
            >
                <div className="nav-dropdown-item">
                    <Link
                        className="d-block text-decoration-none text-dark w-100"
                        to="/orders"
                    >
                        My orders
                    </Link>
                </div>

                <div className="nav-dropdown-item" onClick={handleOpenModal}>
                    Logout
                </div>
            </NavDropdown>

            {/* logout modal */}
            <Modal centered show={openModal} onHide={handleCloseModal}>
                <Modal.Body>
                    <p>Are you sure you want to log out?</p>

                    <Button
                        className={"me-2"}
                        variant={"primary"}
                        onClick={handleLogout}
                    >
                        Logout
                    </Button>
                    <Button variant={"dark"} onClick={handleCloseModal}>
                        Back
                    </Button>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default AccountDropdown;
