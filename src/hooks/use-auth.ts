import { authAtom } from "providers/atoms/auth-atoms";
import { useEffect, useLayoutEffect } from "react";
import { useSetRecoilState } from "recoil";

export const useAuth = () => {
  const setAuth = useSetRecoilState(authAtom);

  useLayoutEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setAuth(JSON.parse(user));
    }
  }, []);
};
