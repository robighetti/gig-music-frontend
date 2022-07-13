import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as BiIcons from 'react-icons/bi';

export const moduleMenus = [
  {
    title: 'Agenda',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Pratos do dia',
    path: '/food',
    icon: <BiIcons.BiRestaurant />,
  },
  {
    title: 'Buscar Musico',
    path: '/music',
    icon: <FaIcons.FaMusic />,
  },
];
