import React, { useState } from "react";

interface IForm {
  onSubmit: (data: any) => void;
  register: any;
  errors: any;
  isAuthenticated: boolean;
}
const FormLogin: React.FC<IForm> = ({
  onSubmit,
  register,
  errors,
  isAuthenticated,
}) => {
  const [isShowedPassword, setIsShowedPassword] = useState(true);
  return (
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://fa-react-email-app.vercel.app/static/media/connect-logo-black.d5b0863d.svg"
          alt="Connect"
        />

        <p className="mt-2 text-center text-sm text-black text-[20px] font-extralight">
          Login to check your email!!
        </p>
      </div>
      <form className="space-y-6 " action="#" method="POST" onSubmit={onSubmit}>
        <div>
          <label
            htmlFor="email-address"
            className="text-xl w-full inline-block pb-[8px]"
          >
            Email
          </label>
          <select
            id="email-address"
            name="email"
            className="relative block w-full px-[10px] py-[12px] text-[16px] border border-gray-900 shadow-md placeholder-gray-500 text-black rounded-md "
            defaultValue="------Choose an email"
            {...register("email", {
              required: "Email is incorrect! Please try again",
            })}
          >
            <option value="" disabled>
              -----Choose an email
            </option>
            <option value="test1@test1.com">test1@test1.com</option>
          </select>
          {errors.email && (
            <p className="text-[red] text-[14px]">Choose your email</p>
          )}
        </div>
        <div className="rounded-md shadow-sm -space-y-px">
          <label
            htmlFor="password"
            className="text-xl w-full inline-block pb-[8px]"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type={isShowedPassword ? "password" : "text"}
              autoComplete="current-password"
              required
              placeholder="Password"
              className="relative block w-full px-[10px] py-[11.5px] text-[16px] border border-gray-900 shadow-md placeholder-gray-500 text-gray-900 rounded-md "
              {...register("password", {
                required: true,
              })}
            />
            {isShowedPassword ? (
              <i
                onClick={() => setIsShowedPassword(false)}
                className="p-[5px] fa-solid fa-eye absolute top-[50%] left-[100%] translate-y-[-50%] translate-x-[-150%] cursor-pointer hover:opacity-50"
              ></i>
            ) : (
              <i
                onClick={() => setIsShowedPassword(true)}
                className="p-[5px] fa-solid fa-eye-slash absolute top-[50%] left-[100%] translate-y-[-50%] translate-x-[-150%] cursor-pointer hover:opacity-50"
              ></i>
            )}
          </div>
          {isAuthenticated === false && (
            <p className="text-[red] text-[14px]">
              Password is incorrect! Please try again
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-[16px] font-medium rounded-md text-white bg-[#152943] hover:bg-indigo-700 focus:outline-none "
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
