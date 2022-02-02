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

interface HsmCard {
  header?: { format: string; text: string };
  body: { text: string };
  footer?: { text: string };
  buttons?: [{ text: string }];
}

const Query: React.FC = () => {
  const { data: dataCompany, mutate: mutateCompany } =
    useFetch<Company[]>(`dialog`);
  const { data } = useFetch<Database[]>("database");
  const [company, setCompany] = useState<String>("explorernet");
  const { data: hsm, error } = useFetch<Templates>(`/templates/${company}`);
  const { register, handleSubmit, setValue } = useForm<SQL>();
  const [message, setMessage] = useState<JSX.Element>();

  if (!data) {
    return <></>;
  }
  if (!hsm) {
    return <></>;
  }
  if (!dataCompany) {
    return <></>;
  }

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setCompany(value);
    mutateCompany(dataCompany);
  };

  const selectHsm = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    api
      .get(`/templates/${company}/${value}`)
      .then((response) =>
        setMessage(
          <Card
            body={response.data.body}
            header={response.data?.header}
            footer={response.data?.footer}
            buttons={response.data?.buttons}
          />
        )
      );
  };

  return (
    <Container>
      <Header>
        <TitleInput placeholder="New query" {...register("name")} />
        <Link to="/queries">
          <Button>↩ Back</Button>
        </Link>
      </Header>
      <Form>
        <Columns>
          <Column>
            <Text {...register("sql")} />
          </Column>
          <Column style={{ width: "400px" }}>
            <Columns>
              <Column>
                <Label>Database</Label>
                <Select {...register("database")}>
                  {data.map((o) => (
                    <option value={o.id} key={o.id}>
                      {o.name}
                    </option>
                  ))}
                </Select>
              </Column>
              <Column>
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
                  {hsm?.templates.sort().map((t, i) => (
                    <option value={t} key={i}>
                      {t}
                    </option>
                  ))}
                </Select>
              </Column>
            </Columns>
            {message}
          </Column>
        </Columns>
      </Form>
    </Container>
  );
};

export default Query;
