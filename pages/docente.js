import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { createClient } from "@supabase/supabase-js";
import { render } from "react-dom";

const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzU0ODU2OSwiZXhwIjoxOTU5MTI0NTY5fQ.1WsKZHn9bzelGPvq1wfdJBIeJqZ5J46WKXeAkvbPGgY";
const SUPABASE_URL = "https://ehnbnwojkxxmvweivtmp.supabase.co";

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export default function Docente() {
  const [username, setUsername] = React.useState("");

  /*supabase
    .from("turmas")
    .select("*")
    .order("id", { ascending: false })
    .then();*/
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: "url()",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
          height: "100vh",
          backgroundColor: appConfig.theme.colors.neutrals[500],
        }}
      >
        <Box
          styleSheet={{
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            borderRadius: "15px",
            height: "99vh",
            padding: "32px",
            margin: "5px",
            marginTop: "10px",
            marginBottom: "10px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          <Box
            styleSheet={{
              display: "flex",
              alignItems: "center",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
              width: "100%",
              borderRadius: "15px",
              margin: "5px",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Box styleSheet={{ width: "80%" }}>
              <Menu />
              <Turmas username={username} setUsername={setUsername} />
            </Box>
            <Box>
              <Usuario username={username} setUsername={setUsername} />
            </Box>
          </Box>
          <Forum username={username} setUsername={setUsername} />
        </Box>
      </Box>
    </>
  );
}

function Forum(props) {
  const username = props.username;
  const setUsername = props.setUsername;
  const [mensagem, setMensagem] = React.useState([]);
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  React.useEffect(() => {
    supabase
      .from("forum")
      .select("*")
      .order("id", { ascending: false })
      .then(({ data }) => {
        setListaDeMensagens(data);
      });
  }, []);

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      de: username,
      mensagem: novaMensagem,
    };

    supabase
      .from("forum")
      .insert([mensagem])
      .then(({ data }) => {
        setListaDeMensagens([data[0], ...listaDeMensagens]);
        console.log(listaDeMensagens);
      });
    setMensagem("");
  }

  return (
    <>
      <Text
        styleSheet={{
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          padding: "1%",
        }}
      >
        Fórum
      </Text>
      <Box
        tag="ul"
        styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals[800],
          borderRadius: "10px",
          padding: "1%",
          color: "white",
          overflow: "scroll",
          display: "flex",
          flexDirection: "column-reverse",
          height: "200px",
          padding: "20px",
        }}
      >
        {listaDeMensagens.map((mensagem) => {
          return (
            <Text key={mensagem.id} tag="li" styleSheet={{ padding: "5px" }}>
              {mensagem.de}: {mensagem.mensagem}
            </Text>
          );
        })}
      </Box>
      <br />
      <TextField
        value={mensagem}
        onChange={(event) => {
          setMensagem(event.target.value);
        }}
        onKeyPress={(e) => {
          if (e.key == "Enter") {
            handleNovaMensagem(mensagem);
          }
        }}
        placeholder="Insira sua mensagem aqui..."
        type="textarea"
        styleSheet={{
          width: "100%",
          border: "0",
          resize: "none",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: appConfig.theme.colors.neutrals[800],
          marginRight: "12px",
          color: appConfig.theme.colors.neutrals[200],
        }}
      ></TextField>
    </>
  );
}

function Turmas(props) {
  const [turmas, setTurmas] = React.useState([]);

  function changeBackgroundOver(e) {
    if (e.target.tagName == "LI") {
      e.target.style.background = appConfig.theme.colors.neutrals[500];
    } else {
      e.target.parentElement.style.background =
        appConfig.theme.colors.neutrals[500];
    }
  }
  function changeBackgroundOut(e) {
    e.target.style.background = "none";
  }
  React.useEffect(() => {
    supabase
      .from("disciplinas")
      .select("*")
      .eq("aluno", `${props.username}`)
      .then(({ data }) => {
        setTurmas(data);
      });
  }, []);

  const listaTurmas = Object.values(turmas).map((turma) => {
    return (
      <>
        <br />
        <li
          onMouseOver={changeBackgroundOver}
          onMouseOut={changeBackgroundOut}
          style={{
            cursor: "pointer",
            borderRadius: "10px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          onClick={() => {
            alert("oi");
          }}
          key="{turma.id}"
        >
          <div style={{ width: "300px", textAlign: "left" }}>
            {turma.disciplina}
          </div>
        </li>
      </>
    );
  });
  return (
    <>
      <Text
        styleSheet={{
          color: "white",
          fontWeight: "bold",
          fontSize: "24px",
          padding: "1%",
        }}
      >
        Turmas Ministradas
      </Text>
      <Box
        styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals[800],
          borderRadius: "10px",
          padding: "1%",
          color: "white",
          minHeight:'300px',
          overflow: "scroll",

        }}
      >
        <table style={{ width: "100%" }}>
          <tr
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            <td style={{ width: "300px", textAlign: "left" }}>Disciplinas</td>
          </tr>
          {listaTurmas}
          <br />
        </table>
      </Box>
    </>
  );
}

function Menu() {
  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: "left",
          width: "100%",
        }}
      >
        <Button
          label="Ensino"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Pesquisa"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Extensão"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Monitoria"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Biblioteca"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Bolsas"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Estágio"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Ambientes"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="Outros"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
        <Button
          label="E-Mail"
          styleSheet={{ width: "auto", margin: "1%" }}
        ></Button>
      </Box>
    </>
  );
}

function Usuario(props) {
  const [aluno, setAluno] = React.useState(['']);

  React.useEffect(() => {
    supabase
      .from("usuarios")
      .select("*")
      .eq("nome", `${props.username}`)
      .then(({ data }) => {
        setAluno(data[0]);
      });
  }, []);

  return (
    <>
      <Box
        styleSheet={{
          backgroundColor: appConfig.theme.colors.neutrals[500],
          width: "500px",
          marginLeft: "30px",
          borderRadius: "5%",
          height: "450px",
          padding: "5%",
        }}
      >
        <Text
          styleSheet={{
            color: "white",
            fontWeight: "bold",
            fontSize: "36px",
            padding: "3%",
          }}
        >
          {props.username}
        </Text>
        <Box styleSheet={{display: 'flex', alignItens: 'center'}}>
          <Image
            src={`/images/${props.username}.jpeg`}
            styleSheet={{ height: "200px", width: "200px", borderRadius: "5%", marginRight: '20px' }}
          />
          <Box styleSheet={{color:'white', display: 'flex', justifyContent: 'space-around', flexDirection: 'column', height: '330px', width: '300px'}}>
            <Text styleSheet={{fontSize:'22px', fontWeight:'bold'}}>Matrícula: </Text>
            <Text>{aluno.matricula}</Text>
            <Text styleSheet={{fontSize:'22px', fontWeight:'bold'}}>Curso: </Text>
            <Text>{aluno.curso}</Text>
            <Text styleSheet={{fontSize:'22px', fontWeight:'bold'}}>Status: </Text>
            <Text>{aluno.statusAluno}</Text>
            <Text styleSheet={{fontSize:'22px', fontWeight:'bold'}}>Email: </Text>
            <Text>{aluno.email}</Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
