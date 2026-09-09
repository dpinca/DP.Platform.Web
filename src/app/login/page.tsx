"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginInput } from "@/schemas/auth";
import { api } from "@/lib/api";
import { LoginResponse } from "@/types/auth";
import { useDispatch } from "react-redux";
import { setAuth } from "@/store/authSlice";

export default function LoginPage() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginInput) {
    try {
      const response = await api.post<LoginResponse>("/auth/login", data);

      dispatch(
        setAuth({
          accessToken: response.data.accessToken,
          expiresAtUtc: response.data.expiresAtUtc,
        }),
      );

      console.log("Login successful");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-slate-900">
            Sign in to DP Platform
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Enter your credentials to continue.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label htmlFor="email">Email</label>

            <input id="email" type="email" {...register("email")} />

            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="password">Password</label>

            <input id="password" type="password" {...register("password")} />

            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Sign in</button>
        </form>
      </div>
    </main>
  );
}
