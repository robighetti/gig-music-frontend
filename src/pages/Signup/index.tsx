import React, { useCallback, useRef } from 'react';
import { FiMail, FiLock, FiEdit } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import { useToast } from '../../hooks/toast';

import userMock from '../../mocks/userMock';

import getValidationErrors from '../../utils/getValidationErrors';

import logo from '../../assets/gig-logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content, Background, ForgotPass } from './styles';

interface UserProps {
  name: string;
  email: string;
  password: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: UserProps) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string().required('O nome do restaurante é obrigatório!'),
          email: Yup.string()
            .email('O Email precisa ser um email valido!')
            .required('O Email é obrigatório!'),
          password: Yup.string().required('Senha obrigatória!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        const { name, email, password } = data;

        userMock.push({
          id: (userMock.length + 1).toString(),
          name,
          email,
          password,
          avatar_url: '',
          avatar: '',
        });

        addToast({
          type: 'success',
          title: 'Usuário criado com sucesso, agora é só usar !',
        });

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao fazer cadastro, cheque suas informações!',
        });
      }
    },
    [addToast, history],
  );
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="Gig Music" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Crie seu cadastro</h1>

          <Input
            name="name"
            icon={FiEdit}
            type="text"
            placeholder="Nome do restaurante"
          />

          <Input name="email" icon={FiMail} type="text" placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Cadastrar</Button>

          <ForgotPass to="/">Voltar para login</ForgotPass>
        </Form>
      </Content>
    </Container>
  );
};

export { SignUp };
