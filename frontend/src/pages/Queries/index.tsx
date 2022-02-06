import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Table,
  EditIcon,
  DeleteIcon,
  TableTD,
} from "../../components/Table/styles";
import Modal from "../../components/Modal";
import { useFetch } from "../../hooks/useFetch";
import { Form, FormGroup, Label, Input } from "../../components/Form/styles";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

import api from "../../services/api";

import { Container, Header, Button, Buttons } from "./styles";

interface Queries {
  id: number;
  database: {
    name: string;
  };
  name: string;
  hsm: string;
  update_at: string;
  once_time: boolean;
}

interface Edit {
  id: number;
}

const Queries: React.FC = () => {
  const { data, mutate } = useFetch<Queries[]>("/api/query");
  let [deleteContent, setDeleteContent] = useState({ name: "", id: 0 });
  const { handleSubmit, setValue } = useForm<Edit>();
  let [showDelete, setShowDelete] = useState(false);

  if (!data) {
    return <>Loading....</>;
  }

  const toggleDelete = () => setShowDelete(!showDelete);
  const onDelete: SubmitHandler<Edit> = (r) => {
    api.delete(`/api/query/${r.id}`).then((response) => {
      mutate(data);
      toggleDelete();
    });
  };
  const remove = (name: string, id: number) => {
    setDeleteContent({ name, id });
    setValue("id", id);
    toggleDelete();
  };

  const formatDate = (date: string) => {
    let newDate = new Date(date).toLocaleString();
    return newDate;
  };

  const removeContent = (
    <Container>
      <Form onSubmit={handleSubmit(onDelete)}>
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

  return (
    <Container>
      <Header>
        <span>Queries</span>
        <Link to="query/new">
          <Button>+ Query</Button>
        </Link>
      </Header>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Database</th>
            <th>HSM</th>
            <th>Once time</th>
            <th>Updated at</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.database.name}</td>
              <td>{i.hsm}</td>
              <TableTD active={i.once_time} className="active" />
              <td>{formatDate(i.update_at)}</td>
              <TableTD>
                <Link to={`query/${i.id}`}>
                  <EditIcon />
                </Link>
                <button onClick={() => remove(i.name, i.id)}>
                  <DeleteIcon />
                </button>
              </TableTD>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal
        isActive={showDelete}
        header={`Remove query "${deleteContent.name}"?`}
        hide={toggleDelete}
        content={removeContent}
      />
    </Container>
  );
};

export default Queries;
