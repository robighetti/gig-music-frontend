import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const moduleMenus = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Empresa',
    path: '/companies',
    icon: <FaIcons.FaBuilding />,
    iconClosed: <FiIcons.FiChevronDown />,
    iconOpened: <FiIcons.FiChevronUp />,
    subMenu: [
      {
        title: 'Cadastro',
        path: '/companies/register',
        icon: <FiIcons.FiFilePlus />,
      },
      {
        title: 'Configurações',
        path: '/companies/settings',
        icon: <AiIcons.AiOutlineSetting />,
      },
    ],
  },
  {
    title: 'Usuários',
    path: '/users',
    icon: <FaIcons.FaUser />,
    iconClosed: <FiIcons.FiChevronDown />,
    iconOpened: <FiIcons.FiChevronUp />,
    subMenu: [
      {
        title: 'Controle de Usuários',
        path: '/users/register',
        icon: <FaIcons.FaUserLock />,
      },
    ],
  },
  {
    title: 'Suporte',
    path: '/support',
    icon: <IoIcons.IoMdHelpCircle />,
  },
];
