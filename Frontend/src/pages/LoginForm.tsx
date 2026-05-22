import { useForm } from "react-hook-form";
import { InputText } from "../components/ui/InputText";
import { InputPassword } from "../components/ui/InputPassword";
import { zodResolver } from "@hookform/resolvers/zod";
import {z} from "zod";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


type FormData ={
    email: string;
    password: string;
}

const schema = z.object({
    email: z.string().min(1, "Email harus diisi"),
    password: z.string().min(8, "Password minimal 8 karakter")
})

export default function LoginForm() {
    const navigate = useNavigate();
    const login = useAuthStore((state) => state.login);
    const {register, handleSubmit, formState: {errors}} = useForm<FormData>({
        resolver: zodResolver(schema),
    });

    const onsubmit = (data: FormData) => {
        console.log(data);
        if(data.email === "24090101" && data.password === "24090101"){
            alert("Login Berhasil");
            login(data.email);

            // redirect ke halaman dashboard
            navigate("/dashboard");
        } else {
            alert("Email atau Password Salah");
        }
    }

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

                <div>
                    <Button label="Login" variant="primary"/>
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