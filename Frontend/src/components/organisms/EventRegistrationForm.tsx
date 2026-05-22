import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { InputText } from "../ui/InputText"; 
import { Select } from "../atoms/InputSelect";
import { Textarea } from "../atoms/TextArea";
import { Button } from "../atoms/Button";

// Schema validasi
const eventSchema = z.object({
  nama: z.string().min(1, "Nama wajib diisi"),
  email: z.string().email("Format email tidak valid").min(1, "Email wajib diisi"),
  jenis_event: z.string().min(1, "Silakan pilih salah satu event"),
  biodata: z.string().min(10, "Biodata minimal 10 karakter"),
});

type EventFormData = z.infer<typeof eventSchema>;

export default function EventRegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<EventFormData>({
    resolver: zodResolver(eventSchema),
  });

  const onSubmit = (data: EventFormData) => {
    console.log("Data Event:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <InputText 
        label="Nama" 
        name="nama" 
        register={register} 
        error={errors.nama?.message} 
      />

      <InputText 
        label="Email" 
        name="email" 
        register={register} 
        error={errors.email?.message} 
      />

      <Select 
        label="Jenis Event" 
        name="jenis_event" 
        register={register} 
        error={errors.jenis_event?.message}
        options={[
          { label: "Invofest 2026", value: "invofest" },
          { label: "Workshop AI", value: "ai" },
          { label: "Web Development", value: "web" }
        ]}
      />

      <Textarea 
        label="Biodata Singkat" 
        name="biodata" 
        register={register} 
        error={errors.biodata?.message} 
        placeholder="Tuliskan pengalaman atau motivasimu..."
      />

      <div className="mt-4">
        <Button label="Daftar Event" variant="primary" />
      </div>
    </form>
  );
}