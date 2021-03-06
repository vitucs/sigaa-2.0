import React from "react";
import appConfig from "../config.json";
import { useRouter } from "next/router";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

export default function PaginaInicial() {
  const [user, setUser] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const roteamento = useRouter();

  React.useEffect(() => {
    setPhoto(`/images/${user}.jpeg`);
  }, [user]);
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
          height: "95vh",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          <Box
            as="form"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                (user == "Victor" && password == "123") ||
                (user == "Everton" && password == "123") ||
                (user == "Igor" && password == "123")
              ) {
                roteamento.push({ pathname: "/discente", query: { user } });
              } else if (user == "Tassio" && password == "admin") {
                roteamento.push({ pathname: "/docente", query: { user } });
              }
            }}
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Text
              styleSheet={{
                fontSize: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              Boas vindas de volta!
            </Text>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals[300],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              placeholder="Usu??rio"
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              onChange={(event) => {
                setUser(event.target.value);
              }}
            />
            <TextField
              type="password"
              placeholder="Senha"
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <Button
              type="submit"
              label="Entrar"
              fullWidth
              buttonColors={{
                contrastColor: "black",
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formul??rio */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              maxWidth: "200px",
              padding: "16px",
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: "1px solid",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50vh'
              }}
              src={`${photo}`}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
