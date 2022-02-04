import React, { useState } from "react";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

import { Container, Header, Button, Buttons, Select } from "./styles";
import {
  Form,
  FormGroup,
  FormGroups,
  Label,
  Input,
} from "../../components/Form/styles";
import {
  Table,
  TableTR,
  TableTH,
  TableTD,
  EditIcon,
  DeleteIcon,
  PlayIcon,
  PauseIcon,
} from "../../components/Table/styles";

import Modal from "../../components/Modal";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

interface Task {
  id: number;
  name: string;
  crontab: {
    minute: string;
    hour: string;
    day_of_week: string;
    day_of_month: string;
    month_of_year: string;
    timezone?: string;
  };
  task: string;
  kwargs: string;
  enabled?: boolean;
  last_run_at?: string;
  total_run_count?: number;
  one_off: boolean;
  start_time?: string;
  date_changed: string;
  query?: string;
}

interface SQL {
  database: number;
  name: string;
  description: string;
  sql: string;
  hsm: string;
  task?: string;
}

interface Tasks {
  data: [];
}

interface Edit {
  id: number;
}

const Tasks: React.FC = () => {
  let [isShow, setIsShow] = useState(false);
  let [showDelete, setShowDelete] = useState(false);
  let [showEdit, setShowEdit] = useState(false);
  let [deleteContent, setDeleteContent] = useState({ name: "", id: 0 });

  const { register, handleSubmit, setValue } = useForm<Task>();
  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    setValue: setValueEdit,
    watch,
  } = useForm<Task>();
  const { handleSubmit: handleSubmitDelete, setValue: setValueDelete } =
    useForm<Edit>();
  const { data, mutate } = useFetch<Task[]>("periodic");
  const { data: query } = useFetch<SQL[]>("query");
  const { data: tasks } = useFetch<Tasks>("tasks");

  if (!tasks) {
    return <>Loading...</>;
  }
  if (!query) {
    return <>Loading...</>;
  }

  // Add
  const toggle = () => setIsShow(!isShow);
  const onSubmit: SubmitHandler<Task> = (r) => {
    api.post(`periodic`, r).then((response) => {
      mutate(data);
      toggle();
    });
  };
  // Edit
  const toggleEdit = () => setShowEdit(!showEdit);
  const onEdit: SubmitHandler<Task> = (r) => {
    api.put(`periodic/${r.id}`, r).then((response) => {
      mutate(data);
      toggleEdit();
    });
  };
  const edit = (db: Task) => {
    for (let [key, value] of Object.entries(db)) {
      // @ts-ignore
      setValueEdit(key, value);
    }
    let q = JSON.parse(db.kwargs.replaceAll("'", '"'));
    setValueEdit("query", q.query);
    if (db.start_time) {
      setValueEdit("start_time", db.start_time.substring(0, 16));
    }
    toggleEdit();
  };
  // Delete
  const toggleDelete = () => setShowDelete(!showDelete);
  const onDelete: SubmitHandler<Edit> = (r) => {
    api.delete(`periodic/${r.id}`).then((response) => {
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
  const inputs = (reg: UseFormRegister<Task>) => (
    <>
      <FormGroup width="350px">
        <Label>Name</Label>
        <Input {...reg("name", { required: true })}></Input>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Task</Label>
        <Select {...reg("task")}>
          {tasks.data.map((f: any) => (
            <option value={f} key={f}>
              {f}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Query</Label>
        <Select {...reg("query")}>
          {query.map((i: any) => (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          ))}
        </Select>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Crontab</Label>
        <FormGroups style={{ textAlign: "center" }}>
          <FormGroup>
            <Input
              {...reg("crontab.minute", { required: true })}
              style={{ textAlign: "center" }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              {...reg("crontab.hour", { required: true })}
              style={{ textAlign: "center" }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              {...reg("crontab.day_of_week", { required: true })}
              style={{ textAlign: "center" }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              {...reg("crontab.day_of_month", { required: true })}
              style={{ textAlign: "center" }}
            />
          </FormGroup>
          <FormGroup>
            <Input
              {...reg("crontab.month_of_year", { required: true })}
              style={{ textAlign: "center" }}
            />
          </FormGroup>
        </FormGroups>
      </FormGroup>
      <FormGroup width="350px">
        <Label>Timezone</Label>
        <Input {...reg("crontab.timezone", { required: true })} />
      </FormGroup>
      <FormGroups>
        <FormGroup>
          <Label>Start time</Label>
          <Input type="datetime-local" {...reg("start_time")}></Input>
        </FormGroup>
        <FormGroup>
          <Label>Run once</Label>
          <Input type="checkbox" {...reg("one_off")}></Input>
        </FormGroup>
      </FormGroups>

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

  const formatDate = (date: string) => {
    let newDate = new Date(date).toLocaleString();
    return newDate;
  };

  const controlTask = (id: number, active: boolean) => {
    api.put("periodic-state", { id, active }).then(() => {
      mutate(data);
    });
  };

  return (
    <Container>
      <Header>
        <span>Periodic Tasks</span>
        <Button onClick={toggle}>+ Task</Button>
      </Header>
      <div style={{ overflow: "auto" }}>
        <Table>
          <thead>
            <TableTR>
              <TableTH>Active</TableTH>
              <TableTH>Runs</TableTH>
              <TableTH>Task</TableTH>
              <TableTH>Crontab</TableTH>
              <TableTH>Last run</TableTH>
              <TableTH>Run once</TableTH>
              <TableTH>Updated at</TableTH>
              <TableTH>Actions</TableTH>
            </TableTR>
          </thead>
          <tbody>
            {data.map((i) => (
              <TableTR key={i.id}>
                <TableTD active={i.enabled} className="active" />
                <TableTD>{i.total_run_count}</TableTD>
                <TableTD>{i.name}</TableTD>
                <TableTD>{`${i.crontab.minute} 
                ${i.crontab.hour} 
                ${i.crontab.day_of_week} 
                ${i.crontab.day_of_month} 
                ${i.crontab.month_of_year}`}</TableTD>
                <TableTD>
                  {i.last_run_at ? formatDate(i.last_run_at) : ""}
                </TableTD>
                <TableTD active={i.one_off} className="active" />
                <TableTD>{formatDate(i.date_changed)}</TableTD>
                <TableTD>
                  <button onClick={() => edit(i)} style={{ marginLeft: 10 }}>
                    <EditIcon />
                  </button>
                  <button onClick={() => remove(i.name, i.id)}>
                    <DeleteIcon />
                  </button>
                  <button onClick={() => controlTask(i.id, !i.enabled)}>
                    {i.enabled ? <PauseIcon /> : <PlayIcon />}
                  </button>
                </TableTD>
              </TableTR>
            ))}
          </tbody>
        </Table>
      </div>
      <Modal
        isActive={isShow}
        header="New task"
        hide={toggle}
        content={modalContent}
      />
      <Modal
        isActive={showEdit}
        header="Edit task"
        hide={toggleEdit}
        content={editContent}
      />
      <Modal
        isActive={showDelete}
        header={`Remove task "${deleteContent.name}"?`}
        hide={toggleDelete}
        content={removeContent}
      />
    </Container>
  );
};

export default Tasks;
