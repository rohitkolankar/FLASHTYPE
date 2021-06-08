import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <div>
            <Card className="text-center">

                <Card.Body>
                    <Card.Title>Made with 🧡</Card.Title>
                    <Card.Text>
                        Find this Repository on Github!
    </Card.Text>
                    <Button variant="dark">Github</Button>
                </Card.Body>

            </Card>
        </div>
    );
}

export default Footer;