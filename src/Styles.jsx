import { Button } from 'react-bootstrap';
import { Alert, Form } from 'react-bootstrap';
const Styles = () => {
    let imag_p = "./4960099.jpg";
    return (
        <div >
            <div className="card">
                {/* <h1 className="heading">Welcome to style page</h1> */}

                <div className="img-wrapper">
                    <img src={imag_p} className="imgstyle" alt="Profile" />
                </div>

                <div className="name">Balasab M</div>
                <div className="role">Software Developer</div>
            </div>
            <div className="card">
                {/* <h1 className="heading">Welcome to style page</h1> */}

                <div className="img-wrapper">
                    <img src={imag_p} className="imgstyle" alt="Profile" />
                </div>

                <div className="name">Balasab M</div>
                <div className="role">Software Developer</div>
            </div>
            <div className="card">
                {/* <h1 className="heading">Welcome to style page</h1> */}

                <div className="img-wrapper">
                    <img src={imag_p} className="imgstyle" alt="Profile" />
                </div>

                <div className="name">Balasab M</div>
                <div className="role">Software Developer</div>
            </div>
            <div className="card">
                {/* <h1 className="heading">Welcome to style page</h1> */}

                <div className="img-wrapper">
                    <img src={imag_p} className="imgstyle" alt="Profile" />
                </div>

                <div className="name">Balasab M</div>
                <div className="role">Software Developer</div>
            </div>
            <div className="card">
                {/* <h1 className="heading">Welcome to style page</h1> */}

                <div className="img-wrapper">
                    <img src={imag_p} className="imgstyle" alt="Profile" />
                </div>

                <div className="name">Balasab M</div>
                <div className="role">Software Developer</div>
            </div>
            <Button variant='success'>OK</Button>
            <Button variant='danger'>OK</Button>
            <Button variant='warning'>OK</Button>
            <br></br>
            <br></br>
            <Alert variant='danger'>Hello</Alert>
            <br></br>
            <br></br>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Label htmlFor="inputPassword5">Password</Form.Label>
                <Form.Control
                    type="password"
                    id="inputPassword5"
                    aria-describedby="passwordHelpBlock"
                />
                <Form.Text id="passwordHelpBlock" muted>
                    Your password must be 8-20 characters long, contain letters and numbers,
                    and must not contain spaces, special characters, or emoji.
                </Form.Text>
            </Form>
        </div>


    )
}
export default Styles;