import React from 'react';
import {
  FiAlignJustify,
  FiDelete,
  FiEdit,
  FiPlus,
  FiZoomIn,
} from 'react-icons/fi';

import { GiExpense } from 'react-icons/gi';

import {
  List,
  ListItems,
  FilterContainer,
  Header,
} from '../../components/Custom';

import { Container, Content } from './styles';

const Expenses: React.FC = () => {
  return (
    <Container>
      <Header>
        <div>
          <h1>
            <GiExpense size={24} />
            Despesas
          </h1>
          <button type="button">
            <FiPlus size={24} />
            Adicionar
          </button>
        </div>

        <FilterContainer type="button" title="Filtrar">
          <FiAlignJustify size={36} />
        </FilterContainer>
      </Header>

      <Content>
        <List>
          <ListItems>
            <label htmlFor="name">
              Nome
              <p id="name">Administrador</p>
            </label>

            <label htmlFor="type">
              Tipo de acesso
              <p id="type">Admnistrador</p>
            </label>

            <label htmlFor="email">
              Email
              <p id="type">robighetti@gmail.com</p>
            </label>

            <div>
              <button type="button" title="Visualizar">
                <FiZoomIn size={20} />
              </button>

              <button type="button" title="Editar">
                <FiEdit size={20} />
              </button>

              <button type="button" title="Deletar">
                <FiDelete size={20} />
              </button>
            </div>
          </ListItems>
        </List>
      </Content>
    </Container>
  );
};

export default Expenses;
