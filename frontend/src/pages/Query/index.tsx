import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler, UseFormRegister } from "react-hook-form";

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

const Query: React.FC = () => {
  const { data: dataCompany, mutate: mutateCompany } =
    useFetch<Company[]>(`dialog`);
  const { data } = useFetch<Database[]>("database");
  const [company, setCompany] = useState<String>("explorernet");
  const { data: hsm } = useFetch<Templates>(`/templates/${company}`);
  const { register, handleSubmit, setValue, watch } = useForm<SQL>();
  const [template, setTemplate] = useState<JSX.Element>();
  const [templateArgs, setTemplateArgs] = useState<JSX.Element>();
  const [result, setResult] = useState<JSX.Element>();
  const [message, setMessage] = useState<string>("");
  const [isRunning, setRunning] = useState<boolean>(false);

  if (!data) {
    return <>Loading...</>;
  }
  if (!hsm) {
    return <>Loading...</>;
  }
  if (!dataCompany) {
    return <>Loading...</>;
  }
  const onSubmit: SubmitHandler<SQL> = (r) => {
    api.post(`query`, r).then((response) => {});
  };

  const run = () => {
    const query = watch("sql");
    const database = watch("database");
    if (!query) {
      return setMessage("Query cannot be empty!");
    }
    if (!database) {
      return setMessage("Select an database");
    }
    setMessage("");
    setRunning(true);
    api.post("run", { query, database }).then((result) => {
      setRunning(false);
      if (result.data.status !== "Erro") {
        let head = [];
        for (let key in result.data[0]) {
          head.push(<th key={Math.random()}>{key}</th>);
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
    mutateCompany(dataCompany);
  };

  const selectHsm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    api.get(`/templates/${company}/${value}`).then((response) => {
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
          {response.data.buttons?.map(
            (btn: { variable: number; type: string }) => (
              <Args active={btn.variable}>
                Button <span>{btn.variable ? btn.type : ""}</span>
              </Args>
            )
          )}
        </>
      );
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Header>
          <div>
            <TitleInput
              placeholder="New query"
              {...(register("name"), { required: true })}
              length={watch("name") ? watch("name").length : 12}
            />
            <Button>Save</Button>
          </div>
          <Link to="/queries">
            <Button>↩ Back</Button>
          </Link>
        </Header>
        <Columns>
          <Column>
            <Text {...register("sql")} />
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
                <Select
                  {...(register("hsm"), { required: true })}
                  onChange={selectHsm}
                >
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
            {template}
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
