import { uniqueId } from "lodash";
interface MenuitemsType {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: any;
  href?: string;
  children?: MenuitemsType[];
  bgcolor?: any;
  chip?: string;
  chipColor?: string;
  variant?: string;
  external?: boolean;
}


const Menuitems: MenuitemsType[] = [
  {
    navlabel: true,
    subheader: "Home",
  },
  {
    id: uniqueId(),
    title: "Dashboard",
    icon: 'screencast-2-line-duotone',
    href: "/",
    bgcolor: "primary",
  },
  {
    navlabel: true,
    subheader: "Apps",
  },
  {
    id: uniqueId(),
    title: "Test Menu",
    icon: 'phone-line-duotone',
    href: "/sample-page",
    bgcolor: "success",
  },

  {
    id: uniqueId(),
    title: "Test Sub Menu",
    icon: 'align-vertical-spacing-line-duotone',
    href: "#",
    bgcolor: "warning",
    children: [
      {
        id: uniqueId(),
        title: "Posts",
        href: "#",
      },
      {
        id: uniqueId(),
        title: "Detail",
        href: "#",
      },
    ],
  }
];

export default Menuitems;
