import React from "react";
import { FrontendRoutes } from "./path";

// const FAQs = React.lazy(() =>
//     import("../../components/frontend/FAQs")
// );
// const Notfound = React.lazy(() =>
//     import("../../components/frontend/NotFound")
// );

// const Queries = React.lazy(() =>
//     import("../../components/frontend/ClientForm/index")
// );

const Home = React.lazy(() => import("../components/FrontLayout/Home"));

const Login = React.lazy(() => import("../components/FrontLayout/Login"));

const routes = [
  { path: FrontendRoutes.INDEX, name: "Login", component: Login },
  { path: FrontendRoutes.Home, name: "Home", component: Home },
  { path: FrontendRoutes.Summary, name: "Summary", component: Home },
  { path: FrontendRoutes.RagSummary, name: "RagSummary", component: Home },
  // { path: FrontendRoutes.Dashboard, name: "Dashboard", component: UserDashboard },
  // { path: FrontendRoutes.FAQs, name: "FAQs", component: FAQs },
  // { path: FrontendRoutes.Queries, name: "Queries", component: Queries },
  // { path: FrontendRoutes.NotFound, name: "Not Found", component: Notfound }
];

export default routes;
