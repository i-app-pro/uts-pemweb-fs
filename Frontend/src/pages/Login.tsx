import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "../components/atoms/Button";
import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

const schema = z.object({
  email: z
    .string()
    .min(1, "Email harus diisi")
    .email("Format email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
});

export default function Login() {
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onsubmit = (data: FormData) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find(
      (u: any) =>
        u.email === data.email && u.password === data.password
    );

    if (!user) {
      setLoginError("Email atau password salah");
      return;
    }

    // simpan status login
    localStorage.setItem("isLogin", "true");
    localStorage.setItem("currentUser", JSON.stringify(user));

    // redirect
    window.location.href = "/";
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <InputText
          label="Email"
          name="email"
          register={register}
          error={errors.email?.message}
        />

        <InputPassword
          label="Password"
          name="password"
          register={register}
          error={errors.password?.message}
        />

        {/* ERROR LOGIN */}
        {loginError && (
          <p className="text-red-500">{loginError}</p>
        )}

        <div>
          <Button label="Login" variant="primary" type="submit" />
        </div>

        <div>
          Belum punya akun?{" "}
          <a
            href="/register"
            className="text-blue-500 hover:underline"
          >
            Daftar di sini
          </a>
        </div>
      </form>
    </div>
  );
}