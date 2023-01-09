import {
  SignUp,
  SignIn,
  Header,
  VideoList,
  Video,
} from "../pages";

export const privateRoute = [
  {
    component: Video,
    path: "/vieo",
    layout: "",
    exact: false,
    permission: "Permissions.VehicleApplication"
  },
  // {
  //   component: Edit,
  //   path: "/car-edit",
  //   layout: "/:id",
  //   exact: true,
  //   permission:"Permissions.VehicleApplication.Edit"
  // },
  // {
  //   component: Edit,
  //   path: "/car-edit",
  //   layout: "/:id/:tab",
  //   exact: true,
  //   permission:"Permissions.VehicleApplication.Edit"
  // },
];
