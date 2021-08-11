import { NavDropdown, Button, Modal } from "react-bootstrap";
import { useState } from "react";

import { FiUser } from "react-icons/fi";

import { useDispatch } from "react-redux";
import { logout } from "./authSlice";

const AccountDropdown = () => {
    const [openModal, setOpenModal] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <>
            <NavDropdown
                id="account-dropdown"
                title={<FiUser color="#fff" size={"1.5em"} />}
            >
                <NavDropdown.Item>Edit info</NavDropdown.Item>
                <NavDropdown.Item onClick={handleOpenModal}>
                    Logout
                </NavDropdown.Item>
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
