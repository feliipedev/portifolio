import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

const Contact = (): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [ddd, setDdd] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (email.length > 0 && name.length > 0 && message.length > 0 && ddd.length > 0 && phone.length > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, name, message, ddd, phone]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const sendEmailJs: any = {
      name: name,
      email: email,
      message: message,
      cellphone: `${ddd} ${phone}`
    }
    emailjs.send('gmailMessage', 'template_tp03eww', sendEmailJs, 'bJYmHDwn0a75FxJlK')
      .then((result) => {
        toast.success("Mensagem enviada com sucesso!");
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }, (error) => {
        toast.error("Erro ao enviar mensagem!");
      });
  };

  return (
    <ContactContainer id="contact">
      <h1>Envie uma menssagem</h1>
      <Form onSubmit={handleSubmit}>
        <InputLabeled
          type="text"
          name="name"
          placeholder="Nome"
          required
          onChange={(e) => setName(e.target.value)}
        />
        <InputLabeled
          type="email"
          name="e-mail"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <FlexContainer>
          <InputDdd
            type="number"
            name="ddd"
            placeholder="DDD"
            required
            maxLength={2}
            onChange={(e) => setDdd(e.target.value)}
          />
          <InputCellphone
            type="number"
            name="cellphone"
            placeholder="Telefone"
            onChange={(e) => setPhone(e.target.value)}
            required
            maxLength={9}
          />
        </FlexContainer>
        <InputMessage
          type="text"
          name="message"
          placeholder="Digite aqui sua mensagem "
          required
          maxLength={300}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" disabled={isDisabled}>
          Enviar Mensagem
        </Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;

const ContactContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    letter-spacing: 0.02em;
    color: #000000;
    margin-top: 100px;
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  max-width: 500px;
  width: 100%;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const InputLabeled = styled.input`
  width: 100%;
  //max-width: 300px;
  height: 64px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: #f3f3f3;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputDdd = styled.input`
  width: 25%;
  //max-width: 300px;
  height: 64px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: #f3f3f3;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 500px;
`;

const InputCellphone = styled.input`
  width: 65%;
  //max-width: 300px;
  height: 64px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: #f3f3f3;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const InputMessage = styled.input`
  width: 100%;
  //max-width: 300px;
  height: 164px;
  margin-top: 16px;
  margin-bottom: 16px;
  background: #f3f3f3;
  border-radius: 8px;
  outline: none;
  border: none;
  padding: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 100%;
  letter-spacing: 0.02em;
  color: #1a1a1a;
  display: flex;
  align-items: flex-end;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 64px;
  margin-top: 32px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 40px;
  color: #ffffff;
  border: none;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  :hover {
    opacity: 0.8;
  }
`;
