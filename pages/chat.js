import { Box, Text, TextField, Image, Button } from "@skynexui/components";
import React from "react";
import appConfig from "../config.json";
import { BiSend } from "react-icons/bi";
import { FaShareSquare, FaSketch } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import { createClient } from "@supabase/supabase-js";
import { ButtonSendSticker } from '../src/components/ButtonSendSticker';
import { useRouter } from "next/router";

const SUPABASE_ANON_KEY ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzM3NTUxNSwiZXhwIjoxOTU4OTUxNTE1fQ.L-J3dTqmb353o0GDBi_e9IW-4VWpGKQnYdtqdJ7EmtM";
const SUPABASE_URL = "https://vaueqrjygahdtjccjeek.supabase.co";
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function escutaMensagensEmTempoReal(adicionaMensagem) {
  return supabaseClient
    .from('mensagens')
    .on('INSERT', (respostaLive) => {
      adicionaMensagem(respostaLive.new);
    })
    .subscribe();
}

export default function ChatPage() {
  const roteamento = useRouter();
  const usuarioLogado = roteamento.query.username;
  const [mensagem, setMensagem] = React.useState('');
  const [listaDeMensagens, setListaDeMensagens] = React.useState([]);

  React.useEffect(() => {
    supabaseClient
      .from('mensagens')
      .select('*')
      .order('id', { ascending: false })
      .then(({ data }) => {
        // console.log('Dados da consulta:', data);
        setListaDeMensagens(data);
      });

    const subscription = escutaMensagensEmTempoReal((novaMensagem) => {
      console.log('Nova mensagem:', novaMensagem);
      console.log('listaDeMensagens:', listaDeMensagens);
      // Quero reusar um valor de referencia (objeto/array) 
      // Passar uma função pro setState

      // setListaDeMensagens([
      //     novaMensagem,
      //     ...listaDeMensagens
      // ])
      setListaDeMensagens((valorAtualDaLista) => {
        console.log('valorAtualDaLista:', valorAtualDaLista);
        return [
          novaMensagem,
          ...valorAtualDaLista,
        ]
      });
    });

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  return (
    <Box
      styleSheet={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage:"url(https://images.hdqwalls.com/wallpapers/dc-vs-marvel-heroes-5k-13.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        color: appConfig.theme.colors.neutrals["000"],
      }}
    >
      <Box
        styleSheet={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
          borderRadius: "5px",
          backgroundColor: appConfig.theme.colors.transparente.fundo,
          height: "100%",
          maxWidth: "95%",
          maxHeight: "95vh",
          padding: "32px",
        }}
      >
        <Header />

        <Box
          styleSheet={{
            position: "relative",
            display: "flex",
            flex: 1,
            height: "80%",
            flexDirection: "column",
            borderRadius: "5px",
            padding: "16px",
          }}
        >
          <MessageList mensagens={listaDeMensagens} />

          {/* {listaDeMensagens.map((mensagemAtual) =>{
            return(
              <li key={mensagemAtual.id}>
                {mensagemAtual.de}: {mensagemAtual.texto}
              </li>
            )
          })} */}

          <Box
            as="form"
            styleSheet={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <TextField
              value={mensagem}
              onChange={(event) => {
                const valor = event.target.value;
                setMensagem(valor);
              }}
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  console.log(event);
                  handleNovaMensagem(mensagem);
                }
              }}
              placeholder="Digite sua mensagem..."
              type="textarea"
              styleSheet={{
                width: "100%",
                border: "0",
                resize: "none",
                borderRadius: "5px",
                padding: "5px",
                backgroundColor: appConfig.theme.colors.transparente.fundo,
                color: appConfig.theme.colors.neutrals[200],
              }}
            />

            <Button
              variant="tertiary"
              label={<BiSend />}
              type="submit"
              styleSheet={{
                borderRadius: "5px",
                backgroundColor:
                appConfig.theme.colors.transparente.buttonBlack,
                marginLeft: "10px",
                color: appConfig.theme.colors.neutrals[200],
              }}
              buttonColors={{
                mainColorLight: appConfig.theme.colors.transparente.buttonRed,
              }}
              onClick={(event) => {
                event.preventDefault();
                if (mensagem.length > 0) {
                  handleNovaMensagem(mensagem);
                }
              }}
            />
            {/* Callback */}
            <ButtonSendSticker
              onStickerClick={(sticker) => {
                console.log('[USANDO O COMPONENTE] Salva esse sticker no banco', sticker);
                handleNovaMensagem(':sticker:' + sticker)
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );

  function handleNovaMensagem(novaMensagem) {
    const mensagem = {
      // id: listaDeMensagens.length + 1,
      de: usuarioLogado,
      texto: novaMensagem,
    };

    supabaseClient
      .from('mensagens')
      .insert([
        // Tem que ser um objeto com os MESMOS CAMPOS que você escreveu no supabase
        mensagem
      ])
      .then(({ data }) => {
        console.log('Criando mensagem: ', data);
      });

    setMensagem('');
  }

  function Header() {
    return (
      <>
        <Box
          styleSheet={{
            width: "100%",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text variant="heading5">SUPERHERO {<FaSketch />} CHAT</Text>
          <Button
            variant="tertiary"
            label={<FaShareSquare />}
            href="/"
            styleSheet={{
              borderRadius: "5px",
              backgroundColor: appConfig.theme.colors.transparente.buttonBlack,
              marginRight: "10px",
              color: appConfig.theme.colors.neutrals[200],
            }}
            buttonColors={{
              mainColorLight: appConfig.theme.colors.transparente.buttonRed,
            }}
          />
        </Box>
      </>
    );
  }

  function MessageList(props) {
    console.log(props);
    return (
      <Box
        tag="ul"
        styleSheet={{
          overflowY: "scroll",
          wordWrap: "break-word",
          display: "flex",
          flexDirection: "column-reverse",
          flex: 1,
          color: appConfig.theme.colors.neutrals["000"],
          marginBottom: "1px",
        }}
      >
        {props.mensagens.map((mensagem) => {
          return (
            <Text
              key={mensagem.id}
              tag="li"
              styleSheet={{
                borderRadius: "5px",
                padding: "6px",
                marginBottom: "12px",
                wordWrap: "word-brek",
                hover: {
                  backgroundColor: appConfig.theme.colors.transparente.fundo,
                },
              }}
            >
              <Box
                styleSheet={{
                  marginBottom: "3px",
                  //Display flex
                  width: "100%",
                  marginBottom: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Image
                    styleSheet={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                      display: "inline-block",
                      marginRight: "8px",
                    }}
                    src={`https://github.com/${mensagem.de}.png`}
                  />
                  <Text tag="strong">{mensagem.de}</Text>
                  <Text
                    styleSheet={{
                      fontSize: "10px",
                      marginLeft: "8px",
                      color: appConfig.theme.colors.neutrals[300],
                    }}
                    tag="span"
                  >
                    {new Date().toLocaleDateString()}
                  </Text>
                </Box>

                <Box
                  title={`Apagar mensagem`}
                  styleSheet={{
                    padding: "2px 15px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    let resposta = confirm("Deseja remover essa mensagem?");
                    if (resposta === true) {
                      supabaseClient
                        .from("mensagens")
                        .delete()
                        .match({ id: mensagem.id })
                        .then(() => {
                          let indice = listaDeMensagens.indexOf(mensagem);
                          //1 parametro: Indice que vou manipular
                          //2 parametro: Quantidade de itens que seram manipulados a partir do primeiro paramentro
                          //3 parametro: Setar oq vc vai colocar no lugar (não obrigatório)
                          listaDeMensagens.splice(indice, 1);
                          //... juntar um objeto/array com o outro
                          setListaMensagens([...listaDeMensagens]);
                        });
                    }
                  }}
                >
                  {<RiDeleteBinLine />}
                </Box>
              </Box>
              {/* [Declarativo] */}
              {/* Condicional: {mensagem.texto.startsWith(':sticker:').toString()} */}
              {mensagem.texto.startsWith(':sticker:')
                ? (
                  <Image src={mensagem.texto.replace(':sticker:', '')} />
                )
                : (
                  mensagem.texto
                )}
              {/* if mensagem de texto possui stickers:
                mostra a imagem
                  else 
                mensagem.texto */}
              {/* {mensagem.texto} */}
            </Text>
          );
        })}
      </Box>
    );
  }
}