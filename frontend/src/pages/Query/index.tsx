import React, { useEffect, useState } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

import {
  Container,
  Header,
  Button,
  Text,
  TitleInput,
  Form,
  Column,
  Columns,
  Input,
  Label,
  Select,
  Args,
  Table,
  Wrapper,
  Message,
  LoadIcon,
  VerifyMessage,
} from "./styles";

import Card from "../../components/Card";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

interface SQL {
  database: number;
  name: string;
  description: string;
  sql: string;
  hsm: string;
  task?: string;
  once_time: boolean;
}

interface Database {
  host: string;
  port: string;
  database: string;
  user: string;
  password: string;
  name: string;
  id: number;
}

interface Company {
  company: string;
  api_key: string;
  phone_number: string;
  id: number;
}

interface Templates {
  templates: Array<string>;
}

interface Tasks {
  data: [];
}

type Params = {
  id: any;
};

const Query: React.FC = () => {
  const { data: dataCompany, mutate } = useFetch<Company[]>(`dialog`);
  const { data } = useFetch<Database[]>("database");
  const { data: tasks } = useFetch<Tasks>("tasks");
  const [company, setCompany] = useState<String>("explorernet");
  const { data: hsm } = useFetch<Templates>(`/templates/${company}`);
  const [template, setTemplate] = useState<JSX.Element>();
  const [templateArgs, setTemplateArgs] = useState<JSX.Element>();
  const [result, setResult] = useState<JSX.Element>();
  const [message, setMessage] = useState<string>("");
  const [isRunning, setRunning] = useState<boolean>(false);
  const [isDisabled, setDisabled] = useState<boolean>(true);
  const [hasArgs, setArgs] = useState<boolean>(false);
  const [needTask, setTask] = useState<boolean>(false);

  const { register, handleSubmit, setValue, watch } = useForm<SQL>();
  const { id } = useParams<Params>();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      api.get(`query/${id}`).then((response) => {
        setValue("sql", response.data.sql);
        setValue("name", response.data.name);
        setValue("database", response.data.database.id);
        setValue("hsm", response.data.hsm), { shouldValidate: true };
        setValue("task", response.data.task);
        setValue("once_time", response.data.once_time);
      });
    }
  }, [hsm, data]);

  if (!data) {
    return <>Loading...</>;
  }
  if (!hsm) {
    return <>Loading...</>;
  }
  if (!dataCompany) {
    return <>Loading...</>;
  }
  if (!tasks) {
    return <>Loading...</>;
  }

  const onSubmit: SubmitHandler<SQL> = (r) => {
    r.task = needTask ? r.task : undefined;
    if (id) {
      api.put(`query/${id}`, r).then(() => history.push("/queries"));
    } else {
      api.post(`query`, r).then(() => history.push("/queries"));
    }
  };

  const run = () => {
    const query = watch("sql");
    const database = watch("database");
    if (!query) {
      return setMessage("Query cannot be empty!");
    }
    if (watch("hsm") == "select") {
      return setMessage("Select a HSM");
    }
    setMessage("");
    setRunning(true);
    setDisabled(true);
    api.post("run", { query, database }).then((result) => {
      setRunning(false);
      if (result.data.status !== "Erro") {
        if (!result.data[0].hasOwnProperty("phone")) {
          return setMessage('A "phone" column is required!');
        }
        if (!result.data[0].hasOwnProperty("company")) {
          return setMessage('A "company" column is required!');
        }
        if (!result.data[0].hasOwnProperty("body_args") && hasArgs) {
          return setMessage('A "body_args" column is required!');
        }
        setDisabled(false);
        let head = [];
        let i = 1;
        for (let key in result.data[0]) {
          head.push(<th key={i}>{key}</th>);
          i++;
        }
        let body = [];
        for (let value of result.data) {
          let row = [];
          let i = 1;
          for (let key in value) {
            row.push(<td key={i}>{value[key]}</td>);
            i++;
          }
          body.push(<tr>{row}</tr>);
        }
        setResult(
          <Wrapper>
            <Table>
              <thead>
                <tr>{head}</tr>
              </thead>
              <tbody>{body}</tbody>
            </Table>
          </Wrapper>
        );
      } else {
        setMessage(result.data.message);
      }
    });
  };

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCompany(value);
    mutate(dataCompany);
  };

  const selectHsm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setDisabled(true);
    api.get(`/templates/${company}/${value}`).then((response) => {
      response.data.body.args ? setArgs(true) : setArgs(false);
      response.data.header?.format === "DOCUMENT"
        ? setTask(true)
        : setTask(false);
      setTemplate(
        <Card
          body={response.data.body}
          header={response.data?.header}
          footer={response.data?.footer}
          buttons={response.data?.buttons}
        />
      );
      setTemplateArgs(
        <>
          <Label>Variables</Label>
          {response.data?.header ? (
            <Args active={response.data.header?.args}>
              Header{" "}
              <span>
                {response.data.header?.args
                  ? `${response.data.header?.format}`
                  : ""}
              </span>
            </Args>
          ) : (
            ""
          )}
          <Args active={response.data.body.args}>
            Body{" "}
            <span>
              {response.data.body.args ? response.data.body.args : ""}
            </span>
          </Args>
          {response.data.buttons?.data.map(
            (btn: { variable: number; type: string }) => (
              <Args active={btn.variable}>
                Button <span>{btn.variable ? btn.type : ""}</span>
              </Args>
            )
          )}
        </>
      );
      setDisabled(true);
    });
  };

  const selectTasks = (
    <Column style={{ paddingTop: 20 }}>
      <Label>Task for document</Label>
      <Select {...register("task")} style={{ width: "200px", height: 40 }}>
        {tasks.data.map((f: any) => (
          <option value={f} key={f}>
            {f}
          </option>
        ))}
      </Select>
    </Column>
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <div>
            <TitleInput
              placeholder="New query"
              {...register("name")}
              length={watch("name") ? watch("name").length : 12}
              required
            />
            <Button disabled={isDisabled}>Save</Button>
            <VerifyMessage>
              {isDisabled ? "Run to verify and save" : ""}
            </VerifyMessage>
          </div>
          <Link to="/queries">
            <Button>↩ Back</Button>
          </Link>
        </Header>
        <Columns>
          <Column>
            <Text {...register("sql")} onChange={() => setDisabled(true)} />
          </Column>
          <Column>
            <Columns>
              <Column style={{ width: "150px" }}>
                <Label>Database</Label>
                <Select {...register("database")}>
                  {data.map((o) => (
                    <option value={o.id} key={o.id}>
                      {o.name}
                    </option>
                  ))}
                </Select>
              </Column>
              <Column style={{ width: "230px" }}>
                <Columns style={{ marginTop: 0 }}>
                  <Label>HSM</Label>
                  <Select className="discret" onChange={selectChange}>
                    {dataCompany.map((i) => (
                      <option value={i.company} key={i.id}>
                        {i.company}
                      </option>
                    ))}
                  </Select>
                </Columns>
                <Select {...register("hsm")} onChange={selectHsm}>
                  <option value="select" key="select">
                    Select...
                  </option>
                  {hsm?.templates.sort().map((t, i) => (
                    <option value={t} key={i}>
                      {t}
                    </option>
                  ))}
                </Select>
              </Column>
              <Column>{templateArgs}</Column>
            </Columns>
            <Columns>
              {template}
              <Column>
                <Columns style={{ flexWrap: "nowrap" }}>
                  <Input
                    type="checkbox"
                    {...register("once_time")}
                    style={{ width: 30, marginTop: 8 }}
                  />
                  <Label>Send only once</Label>
                </Columns>
                {needTask ? selectTasks : null}
              </Column>
            </Columns>
            {result}
            <Columns>
              <Button
                type="button"
                bgcolor="lightblue"
                color="darkblue"
                style={{
                  marginTop: 20,
                  paddingLeft: 30,
                  paddingRight: 30,
                  minWidth: 120,
                  minHeight: 50,
                  fontSize: 15,
                }}
                disabled={isRunning ? true : false}
                onClick={run}
              >
                {isRunning ? <LoadIcon /> : "▶ Run"}
              </Button>
              {message ? <Message>{message}</Message> : ""}
            </Columns>
          </Column>
        </Columns>
      </Form>
    </Container>
  );
};

export default Query;
