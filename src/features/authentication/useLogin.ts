// @ts-nocheck

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }: any) => loginApi({ email, password }),
    onSuccess: (user) => {
      navigate("/dashboard", { replace: true });
      queryClient.setQueryData(["user"], user.user);
    },
    onError: (err: any) => {
      toast.error("Provided email/password is incorrect.");
    },
  });

  return { login, isLoading };
}
