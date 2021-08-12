import { Container, Row, Col } from "react-bootstrap";
import { Switch, Redirect } from "react-router-dom";
import PublicRoutes from "../components/routes/PublicRoutes";

import LoginForm from "../../features/user/LoginForm";

const AuthLayout = () => {
    return (
        <div className={"bg-light vh-100 d-flex align-items-center "}>
            <Container fluid={"sm"}>
                <Row className={"w-100"}>
                    <Col lg={6} className={"mx-auto"}>
                        <Switch>
                            {/* routes */}
                            <PublicRoutes
                                restricted
                                path={"/auth/login"}
                                component={LoginForm}
                            />

                            <Redirect from="/auth" to="/auth/login" />
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AuthLayout;
