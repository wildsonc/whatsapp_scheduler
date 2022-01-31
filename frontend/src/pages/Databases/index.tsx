import React, { useState } from 'react';
import { Container, Header, Button, Buttons } from './styles';
import {
    Form,
    FormGroups,
    FormGroup,
    Label,
    Input,
    Message,
} from '../../components/Form/styles';
import Modal from '../../components/Modal';
import { useForm } from '../../hooks/useForm';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

interface Database {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
    name: string;
}

const Databases: React.FC = () => {
    const initialState = {
        host: '',
        port: '',
        database: '',
        user: '',
        password: '',
        name: '',
    };
    const { data, error, mutate } = useFetch<Database[]>('database');
    const { onChange, onSubmit, values } = useForm(formCallback, initialState);

    let [isShow, SetIsShow] = useState(false);
    let [message, setMessage] = useState(null);

    const toggle = () => SetIsShow(!isShow);

    async function formCallback() {
        api.post(`database-test`, values).then((response) => {
            if (response.data.status == 'Error') {
                setMessage(response.data.message);
            }
            if (response.data.status == 'OK') {
                api.post(`database`, values).then((response) => {
                    if (response.data.status == 'Error') {
                        setMessage(response.data.message);
                    } else {
                        toggle();
                    }
                });
            }
        });
    }

    if (!data) {
        return <></>;
    } else {
        console.log(data);
    }

    const modalContent = (
        <Container>
            <Form onSubmit={onSubmit}>
                <FormGroups>
                    <FormGroup>
                        <Label>Host</Label>
                        <Input
                            name="host"
                            placeholder="localhost"
                            onChange={onChange}
                        ></Input>
                    </FormGroup>
                    <FormGroup width="100px">
                        <Label>Port</Label>
                        <Input
                            name="port"
                            placeholder="5432"
                            onChange={onChange}
                        ></Input>
                    </FormGroup>
                </FormGroups>
                <FormGroup width="300px">
                    <Label>Database</Label>
                    <Input
                        name="database"
                        placeholder="postgres"
                        onChange={onChange}
                        required
                    ></Input>
                </FormGroup>
                <FormGroup width="300px">
                    <Label>User</Label>
                    <Input
                        name="user"
                        placeholder="postgres"
                        onChange={onChange}
                        required
                    ></Input>
                </FormGroup>
                <FormGroup width="300px">
                    <Label>Password</Label>
                    <Input
                        name="password"
                        type="password"
                        onChange={onChange}
                        required
                    ></Input>
                </FormGroup>
                <FormGroup width="300px">
                    <Label>Display name</Label>
                    <Input
                        name="name"
                        placeholder="My Database"
                        onChange={onChange}
                        required
                    ></Input>
                </FormGroup>
                <Buttons>
                    <Message>{message}</Message>
                    <Button type="submit">CONNECT</Button>
                </Buttons>
            </Form>
        </Container>
    );
    return (
        <Container>
            <Header>
                <span>Databases</span>
                <Button onClick={toggle}>+ Database</Button>
            </Header>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Host</th>
                    <th>Database</th>
                </tr>
                {data.map((db) => (
                    <tr>
                        <td>{db.name}</td>
                        <td>{db.host}</td>
                        <td>{db.database}</td>
                    </tr>
                ))}
            </table>
            <Modal
                isActive={isShow}
                header="New connection"
                hide={toggle}
                content={modalContent}
            />
        </Container>
    );
};

export default Databases;
