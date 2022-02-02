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
import {
    Table,
    TableTR,
    TableTH,
    TableTD,
    EditIcon,
    DeleteIcon,
} from '../../components/Table/styles';
import Modal from '../../components/Modal';
import { useForm, SubmitHandler, UseFormRegister } from 'react-hook-form';
import { useFetch } from '../../hooks/useFetch';
import api from '../../services/api';

interface Database {
    host: string;
    port: string;
    database: string;
    user: string;
    password: string;
    name: string;
    id: number;
}

interface Edit {
    id: number;
}

const Databases: React.FC = () => {
    const { data, error, mutate } = useFetch<Database[]>('database');
    const { register, handleSubmit, setValue } = useForm<Database>();
    const {
        register: registerEdit,
        handleSubmit: handleSubmitEdit,
        setValue: setValueEdit,
    } = useForm<Database>();
    const { handleSubmit: handleSubmitDelete, setValue: setValueDelete } =
        useForm<Edit>();

    let [isShow, setIsShow] = useState(false);
    let [showDelete, setShowDelete] = useState(false);
    let [showEdit, setShowEdit] = useState(false);
    let [message, setMessage] = useState(null);
    let [deleteContent, setDeleteContent] = useState({ name: '', id: 0 });

    // Add
    const toggle = () => setIsShow(!isShow);
    const onSubmit: SubmitHandler<Database> = (r) => {
        api.post(`database-test`, r).then((response) => {
            if (response.data.status == 'Error') {
                setMessage(response.data.message);
            }
            if (response.data.status == 'OK') {
                api.post(`database`, r).then((response) => {
                    if (response.data.status == 'Error') {
                        setMessage(response.data.message);
                    } else {
                        mutate(data);
                        toggle();
                    }
                });
            }
        });
    };
    // Edit
    const toggleEdit = () => setShowEdit(!showEdit);
    const onEdit: SubmitHandler<Database> = (r) => {
        api.post(`database-test`, r).then((response) => {
            if (response.data.status == 'Error') {
                setMessage(response.data.message);
            }
            if (response.data.status == 'OK') {
                api.put(`database/${r.id}`, r).then((response) => {
                    mutate(data);
                    toggleEdit();
                });
            }
        });
    };
    const edit = (db: Database) => {
        for (let [key, value] of Object.entries(db)) {
            // @ts-ignore
            setValueEdit(key, value);
        }
        toggleEdit();
    };
    // Delete
    const toggleDelete = () => setShowDelete(!showDelete);
    const onDelete: SubmitHandler<Edit> = (r) => {
        api.delete(`database/${r.id}`).then((response) => {
            mutate(data);
            toggleDelete();
        });
    };
    const remove = (name: string, id: number) => {
        setDeleteContent({ name, id });
        setValueDelete('id', id);
        toggleDelete();
    };
    // Modal content
    const removeContent = (
        <Container>
            <Form onSubmit={handleSubmitDelete(onDelete)}>
                <FormGroup>
                    <Buttons>
                        <Button type="button" onClick={toggleDelete}>
                            CANCEL
                        </Button>
                        <Button
                            type="submit"
                            style={{ marginRight: 15 }}
                            bgcolor="#fdaeae"
                            color="red"
                        >
                            DELETE
                        </Button>
                    </Buttons>
                </FormGroup>
            </Form>
        </Container>
    );
    const inputs = (reg: UseFormRegister<Database>) => (
        <>
            <FormGroups>
                <FormGroup>
                    <Label>Host</Label>
                    <Input
                        placeholder="localhost"
                        {...reg('host', { required: true })}
                    ></Input>
                </FormGroup>
                <FormGroup width="100px">
                    <Label>Port</Label>
                    <Input
                        {...reg('port', { required: true })}
                        placeholder="5432"
                    ></Input>
                </FormGroup>
            </FormGroups>
            <FormGroup width="300px">
                <Label>Database</Label>
                <Input
                    {...reg('database', { required: true })}
                    placeholder="postgres"
                ></Input>
            </FormGroup>
            <FormGroup width="300px">
                <Label>User</Label>
                <Input
                    {...reg('user', { required: true })}
                    placeholder="postgres"
                ></Input>
            </FormGroup>
            <FormGroup width="300px">
                <Label>Password</Label>
                <Input
                    {...reg('password', { required: true })}
                    type="password"
                ></Input>
            </FormGroup>
            <FormGroup width="300px">
                <Label>Display name</Label>
                <Input
                    {...reg('name', { required: true })}
                    placeholder="My Database"
                ></Input>
            </FormGroup>
            <Buttons>
                <Message>{message}</Message>
                <Button type="submit">CONNECT</Button>
            </Buttons>
        </>
    );
    const editContent = (
        <Container>
            <Form onSubmit={handleSubmitEdit(onEdit)}>
                {inputs(registerEdit)}
            </Form>
        </Container>
    );
    const modalContent = (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>{inputs(register)}</Form>
        </Container>
    );

    if (!data) {
        return <></>;
    }

    return (
        <Container>
            <Header>
                <span>Databases</span>
                <Button onClick={toggle}>+ Database</Button>
            </Header>
            <Table>
                <thead>
                    <TableTR>
                        <TableTH>Name</TableTH>
                        <TableTH>Host</TableTH>
                        <TableTH>Database</TableTH>
                        <TableTH>Actions</TableTH>
                    </TableTR>
                </thead>
                <tbody>
                    {data.map((db) => (
                        <TableTR key={db.id}>
                            <TableTD>{db.name}</TableTD>
                            <TableTD>{db.host}</TableTD>
                            <TableTD>{db.database}</TableTD>
                            <TableTD>
                                <button onClick={() => edit(db)}>
                                    <EditIcon />
                                </button>
                                <button onClick={() => remove(db.name, db.id)}>
                                    <DeleteIcon />
                                </button>
                            </TableTD>
                        </TableTR>
                    ))}
                </tbody>
            </Table>
            <Modal
                isActive={isShow}
                header="New connection"
                hide={toggle}
                content={modalContent}
            />
            <Modal
                isActive={showEdit}
                header="Edit connection"
                hide={toggleEdit}
                content={editContent}
            />
            <Modal
                isActive={showDelete}
                header={`Remove database "${deleteContent.name}"?`}
                hide={toggleDelete}
                content={removeContent}
            />
        </Container>
    );
};

export default Databases;
