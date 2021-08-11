import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-light py-4">
            <Container>
                <span className="fw-bold">
                    Made by{" "}
                    <a
                        href="https://github.com/hassanEB1379"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Hassan
                    </a>
                </span>
            </Container>
        </footer>
    );
};

export default Footer;
