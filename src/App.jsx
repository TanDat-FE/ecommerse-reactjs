import { BrowserRouter, Route, Routes } from "react-router-dom";
import routers from "@/routers/routers";
import { createElement, Suspense } from "react";
import { SidebarProvider } from "@/contexts/SideBarProvider";
import SideBar from "@components/SideBar/SideBar";
import ToastifyProvider from "@/contexts/ToastifyProvider";
function App() {
  return (
    <>
      <ToastifyProvider>
        <SidebarProvider>
          <SideBar />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routers.map((item, index) => {
                  return (
                    <Route
                      path={item.path}
                      // element={<item.element />}
                      element={createElement(item.component)}
                      key={index}
                    />
                  );
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SidebarProvider>
      </ToastifyProvider>
    </>
  );
}

export default App;
