import React,{ Suspense } from "react";
import { Route,Routes } from 'react-router-dom';
import routes from "../../routes";


// const DefaultHeader = React.lazy(() =>
//   import("./SideBar")
// );
const DefaultFooter = React.lazy(() =>
  import("./Footer")
);

const DefaultLayout = () => {

  return (
    <div>
      {/* <DefaultHeader /> */}
      <div>
        <Routes>
              {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  // name={route.name}
                  element={<Suspense fallback={<div>Loading ...</div>}> <route.component/></Suspense>}
                />
              ) : <h1>No routes</h1>;
            })}
          
        </Routes>
        {/* <DefaultFooter /> */}
      </div>
    </div>
  );
};

export default DefaultLayout;
