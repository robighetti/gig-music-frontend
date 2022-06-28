import React from 'react';

import * as FaIcons from 'react-icons/fa';
import * as FiIcons from 'react-icons/fi';
import * as AiIcons from 'react-icons/ai';
import * as BsIcons from 'react-icons/bs';
import * as BiIcons from 'react-icons/bi';
import * as MdIcons from 'react-icons/md';

export const moduleMenus = [
  {
    title: 'Agenda',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Restaurante',
    path: '/restaurant',
    icon: <BiIcons.BiRestaurant />,
    iconClosed: <FiIcons.FiChevronDown />,
    iconOpened: <FiIcons.FiChevronUp />,
    subMenu: [
      {
        title: 'Pratos',
        path: '/restaurants/food',
        icon: <MdIcons.MdRestaurant />,
      },
      {
        title: 'Eventos',
        path: '/restaurants/events',
        icon: <BsIcons.BsCalendar />,
      },
    ],
  },
  {
    title: 'Buscar Musico',
    path: '/music',
    icon: <FaIcons.FaMusic />,
  },
];
