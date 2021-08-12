import { Form, Button } from "react-bootstrap";
import { AiOutlineUser } from "react-icons/all";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "./userSlice";
import Fetch from "../../app/components/Fetch";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const authStatus = useSelector(state => state.user.status);

    const dispatch = useDispatch();

    const handleEmail = e => {
        setUsername(e.target.value);
    };

    const handlePassword = e => {
        setPassword(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        if (authStatus === "idle") {
            await dispatch(loginThunk({ username, password }));
        }
    };

    return (
        <Form onSubmit={handleSubmit} className={"bg-white p-4 shadow rounded"}>
            <h1 className="mb-5 text-primary d-inline-flex align-items-center gap-2 border-bottom border-4 border-primary pb-2">
                <AiOutlineUser size={"2rem"} />
                Login
            </h1>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label>User name</Form.Label>
                <Form.Control
                    value={username}
                    onChange={handleEmail}
                    type="text"
                    placeholder="Enter User name"
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={handlePassword}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            {/* show spinner when loading */}
            {authStatus === "loading" && <Fetch fullPage />}
        </Form>
    );
};

export default LoginForm;
