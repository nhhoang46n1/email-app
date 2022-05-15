import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormLogin from "../../components/FormLogin/FormLogin";

const Login: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "test%test",
    },
  });

  const [currentPassword] = watch(["password"]);

  const onSubmit = (data: any) => {
    if (currentPassword === "test%test") {
      setIsAuthenticated(true);
      navigate("/main/email");
    } else {
      setIsAuthenticated(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-[#0e1f33]">
      <div className="max-w-[30rem] h-auto w-full border px-[32px] py-[64px] bg-white">
        <div className="max-w-md w-full">
          <FormLogin
            onSubmit={handleSubmit(onSubmit)}
            register={register}
            errors={errors}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
