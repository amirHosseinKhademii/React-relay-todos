import { useAuth } from "hooks";
import Authentication from "pages/authentication/Authentication";
import Home from "pages/home/Home";
import { authAtom } from "providers/atoms/auth-atoms";
import { ReactNode } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes as Router,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useRecoilValue(authAtom);

  if (user) return <>{children}</>;
  return <Navigate to="/auth" />;
};

export const Routes = () => {
  return (
    <Router>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/auth" element={<Authentication />} />
    </Router>
  );
};

export const AppRouter = () => {
  useAuth();
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
};
