import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='mb-5 all-color'>
            <h1 className='text-center'>Questions-Answers Section</h1>
            <Accordion defaultActiveKey="0" flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Difference between javascript and nodejs</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr className='text-center'>
                                    <th>Javascript</th>
                                    <th>Node JS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>JavaScript is used for any client-side activity for one web application.</td>
                                    <td> Node JS used for accessing or running any operating system for non-blocking operation.</td>
                                </tr>
                                <tr>
                                    <td>Javascript is a Scripting language.</td>
                                    <td>NodeJS is a cross-platform and open source Javascript runtime environment.</td>
                                </tr>
                                <tr>
                                    <td> Javascript is capable enough to add HTML and play with the DOM.</td>
                                    <td>Nodejs does not have capability to add HTML tags.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>When should you use nodejs and when should you use mongodb.</Accordion.Header>
                    <Accordion.Body>
                        <h2>When should you use mongodb</h2>
                        <p>If your application needs the ability to persistently store data in a way that you can efficiently query or update it later, then you would typically use some form of database. There are dozens of popular databases. MongoDB is one such database. MariaDB, MySql, CouchDB, DynamoDB (on AWS), Postgres are examples of other databases. Different databases have different strengths (things they are best at) and different ways of using them so it's a whole different question to choose the right/best database for what you're doing.</p> <br />
                        <h2>When should you use nodejs </h2>
                        <p>Any project needs a programming environment and a runtime library that offers you basic programming tools/support and can compile and/or interpret your code. Nodejs is such as tool for the Javascript programming language. There are other similar tools for other languages such as Python, Java, PHP, C#, C++, Go, etc...
                            So, if you want to write some kind of stand-alone program or server in Javascript, then you can use nodejs for it.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Differences between SQL and NoSQL databases.</Accordion.Header>
                    <Accordion.Body>
                        <Table striped bordered hover>
                            <thead>
                                <tr className='text-center'>
                                    <th>SQL</th>
                                    <th>NoSQL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>SQL databases are primarily called as Relational Databases.</td>
                                    <td>NoSQL database are primarily called as non-relational or distributed database.</td>
                                </tr>
                                <tr>
                                    <td>SQL databases defines and manipulates data based structured query language.</td>
                                    <td>NoSQL database has dynamic schema for unstructured data.</td>
                                </tr>
                                <tr>
                                    <td> Vertically Scalable.</td>
                                    <td>Horizontally scalable.</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is the purpose of jwt and how does it work?</Accordion.Header>
                    <Accordion.Body>
                        <p>JSON Web Token (JWT) is an open standardthat defines a compact and self-contained way for securely transmitting information between parties as a JSON object.</p>
                        <p>JWTs differs from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default Blogs;