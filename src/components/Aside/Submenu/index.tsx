import React, { useState } from 'react';

import { Container, SidebarLink, SidebarLabel, DropdowLink } from './styles';

interface SubMenuProps {
  title: string;
  path: string;
  icon: object;
}

interface MenuProps {
  item: {
    title: string;
    path: string;
    icon: object;
    iconClosed?: object;
    iconOpened?: object;
    subMenu?: SubMenuProps[];
  };
  setSidebar: Function;
  sidebar: boolean;
}

const Submenu: React.FC<MenuProps> = ({ item, setSidebar, sidebar }) => {
  const [subMenu, setSubMenu] = useState(false);

  const navigateToPath = () => {
    if (item.subMenu) {
      setSubMenu(!subMenu);
    } else {
      setSidebar(false);
    }
  };

  return (
    <Container>
      <SidebarLink to={item.path} onClick={navigateToPath}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>

        <div>
          {item.subMenu && subMenu
            ? item.iconOpened
            : item.subMenu
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subMenu &&
        item.subMenu?.map((item, index) => {
          return (
            <DropdowLink to={item.path} key={index}>
              <SidebarLabel onClick={() => setSidebar(!sidebar)}>
                {item.icon}
                {item.title}
              </SidebarLabel>
            </DropdowLink>
          );
        })}
    </Container>
  );
};

export { Submenu };
