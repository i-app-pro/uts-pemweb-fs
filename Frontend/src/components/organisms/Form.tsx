import { useForm } from "react-hook-form"; 
import { Input } from "../atoms/Input"; 
import { InputPassword } from "../ui/InputPassword"; 
import { Textarea } from "../atoms/TextArea"; 
import { Select } from "../atoms/InputSelect"; 
import { Button } from "../atoms/Button"; 
 
export default function RegisterForm() { 
  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm(); 
 
  const onSubmit = (data: any) => { 
    console.log(data); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4"> 
       
      <Input 
        label="Nama" 
        name="name" 
        register={register} 
        error={errors.name?.message as string} 
      /> 
 
      <Input 
        label="Email" 
        name="email" 
        register={register} 
        error={errors.email?.message as string} 
      /> 
 
      <InputPassword 
        label="Password" 
        name="password" 
        register={register}
        error={errors.password?.message as string} 
      /> 
 
      <Textarea 
        label="Bio" 
        name="bio" 
        register={register} 
      /> 
 
      <Select 
        label="Event" 
        name="event" 
        register={register} 
        options={[ 
          { label: "Invofest", value: "invofest" }, 
          { label: "Workshop AI", value: "ai" } 
        ]} 
      /> 
 
      <Button type="submit" label="Daftar" /> 
    </form> 
  ); 
} 