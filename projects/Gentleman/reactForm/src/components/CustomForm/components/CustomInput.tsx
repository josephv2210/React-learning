import { type Control, type FieldError, Controller } from "react-hook-form";
import { type FormValues } from "../models";
import './CustomInput.css';

interface Props {
  name: keyof FormValues;
  control: Control<FormValues>;
  label: string;
  type?: string;
  error?: FieldError;
}

const InputForm = ({ name, control, label, type, error }: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={name} >{label}</label>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            id={name}
            type={type}
            {...field}
            className={`form-control ${error ? "is-invalid" : ""}`}
          />
        )}
      />
      {error && <p className="error">{error.message}</p>}
    </div>
  );
};

export default InputForm;
