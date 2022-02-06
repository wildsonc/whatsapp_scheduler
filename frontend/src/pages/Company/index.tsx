import React, { useState } from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

import { Container, Header, Button, Buttons } from "./styles";
import { Form, FormGroup, Label, Input } from "../../components/Form/styles";
import {
  Table,
  TableTR,
  TableTH,
  TableTD,
  EditIcon,
  DeleteIcon,
} from "../../components/Table/styles";

import Modal from "../../components/Modal";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

interface Company {
  company: string;
  api_key: string;
  phone_number: string;
  namespace: string;
  id: number;
}

interface Edit {
  id: number;
}

const Company: React.FC = () => {
  let [isShow, setIsShow] = useState(false);
  let [showDelete, setShowDelete] = useState(false);
  let [showEdit, setShowEdit] = useState(false);
  let [deleteContent, setDeleteContent] = useState({ name: "", id: 0 });

  const { register, handleSubmit, setValue } = useForm<Company>();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue: setValueEdit,
  } = useForm<Company>();
  const { handleSubmit: handleSubmitDelete, setValue: setValueDelete } =
    useForm<Edit>();
  const { data, error, mutate } = useFetch<Company[]>("api/dialog");

  // Add
  const toggle = () => setIsShow(!isShow);
  const onSubmit: SubmitHandler<Company> = (r) => {
    api.post(`api/dialog`, r).then((response) => {
      mutate(data);
      toggle();
    });
  };
  // Edit
  const toggleEdit = () => setShowEdit(!showEdit);
  const onEdit: SubmitHandler<Company> = (r) => {
    api.put(`api/dialog/${r.id}`, r).then((response) => {
      mutate(data);
      toggleEdit();
    });
  };
  const edit = (db: Company) => {
    for (let [key, value] of Object.entries(db)) {
      // @ts-ignore
      setValueEdit(key, value);
    }
    toggleEdit();
  };
  // Delete
  const toggleDelete = () => setShowDelete(!showDelete);
  const onDelete: SubmitHandler<Edit> = (r) => {
    api.delete(`api/dialog/${r.id}`).then((response) => {
      mutate(data);
      toggleDelete();
    });
  };
  const remove = (name: string, id: number) => {
    setDeleteContent({ name, id });
    setValueDelete("id", id);
    toggleDelete();
  };
  // Modal content
  const inputs = (reg: UseFormRegister<Company>) => (
    <>
      <FormGroup width="350px">
        <Label>Company name</Label>
        <Input {...reg("company", { required: true })}></Input>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Api-key</Label>
        <Input {...reg("api_key", { required: true })}></Input>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Namespace</Label>
        <Input {...reg("namespace", { required: true })}></Input>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Phone number</Label>
        <Input {...reg("phone_number", { required: true })}></Input>
      </FormGroup>

      <Buttons>
        <Button type="submit">SAVE</Button>
      </Buttons>
    </>
  );
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
  const editContent = (
    <Container>
      <Form onSubmit={handleSubmitEdit(onEdit)}>{inputs(registerEdit)}</Form>
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
        <span>Company</span>
        <Button onClick={toggle}>+ Company</Button>
      </Header>
      <div style={{ overflow: "auto" }}>
        <Table>
          <thead>
            <TableTR>
              <TableTH>Company</TableTH>
              <TableTH>Phone Number</TableTH>
              <TableTH>Actions</TableTH>
            </TableTR>
          </thead>
          <tbody>
            {data.map((c) => (
              <TableTR key={c.id}>
                <TableTD>{c.company}</TableTD>
                <TableTD>{c.phone_number}</TableTD>
                <TableTD>
                  <button onClick={() => edit(c)}>
                    <EditIcon />
                  </button>
                  <button onClick={() => remove(c.company, c.id)}>
                    <DeleteIcon />
                  </button>
                </TableTD>
              </TableTR>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal
        isActive={isShow}
        header="New company"
        hide={toggle}
        content={modalContent}
      />
      <Modal
        isActive={showEdit}
        header="Edit company"
        hide={toggleEdit}
        content={editContent}
      />
      <Modal
        isActive={showDelete}
        header={`Remove company "${deleteContent.name}"?`}
        hide={toggleDelete}
        content={removeContent}
      />
    </Container>
  );
};

export default Company;
