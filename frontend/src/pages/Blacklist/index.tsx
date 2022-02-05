import React, { useEffect, useState } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import { useFetch } from "../../hooks/useFetch";
import api from "../../services/api";

import { Container, Header, Input, Button, DeleteIcon, List } from "./styles";

interface PhoneList {
  id: number;
  number: string;
}

const Blacklist: React.FC = () => {
  const { register, handleSubmit, setValue, watch } = useForm<PhoneList>();
  const { data, mutate } = useFetch<PhoneList[]>("blacklist");

  const onSubmit: SubmitHandler<PhoneList> = (r) => {
    if (r.number) {
      api.post(`blacklist/${r.number}`, {}).then((response) => {
        mutate(data);
        setValue("number", "");
      });
    }
  };

  const remove = (number: string) => {
    api.delete(`blacklist/${number}`).then((response) => {
      mutate(data);
    });
  };

  if (!data) {
    return <>Loading...</>;
  }

  return (
    <Container>
      <Header>
        <span>Blacklist</span>
      </Header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ margin: 20 }}>
          <Input {...register("number")} type="text" minLength={11} />
          <Button>+</Button>
        </div>
      </form>
      <ul>
        {data.map((i) => (
          <List key={i.id}>
            {i.number}
            <DeleteIcon onClick={() => remove(i.number)} />
          </List>
        ))}
      </ul>
    </Container>
  );
};

export default Blacklist;
