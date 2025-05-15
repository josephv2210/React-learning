import { type SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FormValues, schema } from "./models/";
import InputForm from "./components/CustomInput";



const CustomForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        name="name"
        control={control}
        label="Nombre"
        error={errors.name}
        type="text"
      />
      <InputForm
        name="email"
        control={control}
        label="Email"
        error={errors.email}
        type="email"
      />
      <InputForm
        name="password"
        control={control}
        label="Contraseña"
        error={errors.password}
        type="password"
      />
      <InputForm
        name="confirmPassword"
        control={control}
        label="Confirmar contraseña"
        error={errors.confirmPassword}
        type="password"
      />
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default CustomForm;
