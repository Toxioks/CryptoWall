import {
  MegamenuItem,
  NavItemType,
} from "components/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";
import __megamenu from "./jsons/__megamenu.json";



const dashboardChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/posts",
    name: "Posts",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/edit-profile",
    name: "Edit profile",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/billing-address",
    name: "Billing address",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/subscription",
    name: "Subscription",
  },
  {
    id: ncNanoId(),
    href: "/dashboard/submit-post",
    name: "Submit post",
  },
];

const otherPageChildMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    href: "/login",
    name: "Login",
  },
  {
    id: ncNanoId(),
    href: "/signup",
    name: "Signup",
  },
  {
    id: ncNanoId(),
    href: "/forgot-pass",
    name: "Forgot Password",
  },
  {
    id: ncNanoId(),
    href: "/dashboard",
    name: "Dashboard",
    type: "dropdown",
    children: dashboardChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/subscription",
    name: "Subscription",
  },
];

const archviePageChildrenMenus: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/archive/the-demo-archive-slug",
    name: "Archive Page",
  },
  {
    id: ncNanoId(),
    href: "/archive-audio/the-demo-archive-slug",
    name: "Archive Audio",
  },
  {
    id: ncNanoId(),
    href: "/archive-video/the-demo-archive-slug",
    name: "Archive Video",
  },
  {
    id: ncNanoId(),
    href: "/author/the-demo-author-slug",
    name: "Author Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/author/the-demo-author-slug",
        name: "Author Page 1",
      },
      {
        id: ncNanoId(),
        href: "/author-v2/the-demo-author-slug",
        name: "Author Page 2",
      },
    ],
  },
  {
    id: ncNanoId(),
    href: "/search",
    name: "Search Page",
    type: "dropdown",
    children: [
      {
        id: ncNanoId(),
        href: "/search",
        name: "Seach Page 1",
      },
      {
        id: ncNanoId(),
        href: "/search-v2",
        name: "Search Page 2",
      },
    ],
  },
];

const singleChildrenMenus: NavItemType = {
  id: ncNanoId(),
  href: "/single/this-is-single-slug",
  name: "Single Template ",
  type: "dropdown",
  children: [
    {
      id: ncNanoId(),
      href: "/single-sidebar/this-is-single-slug",
      name: "Single Template 1",
    },
    {
      id: ncNanoId(),
      name: "Template 1 sidebar",
      href: "/single/this-is-single-slug-2",
    },
    {
      id: ncNanoId(),
      href: "/single-template-2/this-is-single-slug-2",
      name: "Single Template 2",
    },
    {
      id: ncNanoId(),
      href: "/single-2-sidebar/this-is-single-slug",
      name: "Template 2 sidebar",
    },
    {
      id: ncNanoId(),
      href: "/single-template-3/this-is-single-slug-3",
      name: "Single Template 3",
    },
    {
      id: ncNanoId(),
      href: "/single-3-sidebar/this-is-single-slug",
      name: "Template 3 sidebar",
    },
  ],
};

const contactChildMenus: NavItemType[] = [

  {
    id: ncNanoId(),
    href: "/contact",
    name: "Contact us",
  },
  {
    id: ncNanoId(),
    name: "FAQ",
    href: "/single/this-is-single-slug-2",
  },
];

const defaultChildMenus: NavItemType[] = [


];

const featuredChildMenus: NavItemType[] = [

  {
    id: ncNanoId(),
    href: "/single-template-3/this-is-single-slug-3",
    name: "Featured #1",
  },
  {
    id: ncNanoId(),
    href: "/single-template-3/this-is-single-slug-3",
    name: "Featured #2",
  },
  {
    id: ncNanoId(),
    href: "/single-template-3/this-is-single-slug-3",
    name: "Featured #3",
  },
];


const templateChilds: NavItemType[] = [
  ...archviePageChildrenMenus,
  singleChildrenMenus,
  {
    id: ncNanoId(),
    href: "/single-gallery/this-is-single-slug",
    name: "Single Gallery",
  },
  {
    id: ncNanoId(),
    href: "/single-audio/this-is-single-slug",
    name: "Single Audio",
  },
  {
    id: ncNanoId(),
    href: "/single-video/this-is-single-slug",
    name: "Single Video",
  },
];

export const NAVIGATION_DEMO: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    type: "none",
    children: defaultChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/author/the-demo-author-slug",
    name: "You",
    type: "none",
    children: defaultChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
    type: "none",
    children: defaultChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/single-template-3/this-is-single-slug-3",
    name: "Featured",
    type: "none",
    children: defaultChildMenus,
  },
  {
    id: ncNanoId(),
    href: "/contact",
    name: "Support",
    type: "dropdown",
    children: contactChildMenus,
  },
  /**{
    id: ncNanoId(),
    href: "/dashboard",
    name: "User",
    type: "dropdown",
    children: dashboardChildMenus,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "pages #1 (Temporary)",
    type: "dropdown",
    children: templateChilds,
  },
  {
    id: ncNanoId(),
    href: "#",
    name: "Pages #2 (Temporary)",
    type: "dropdown",
    children: otherPageChildMenus,
  },**/
];
