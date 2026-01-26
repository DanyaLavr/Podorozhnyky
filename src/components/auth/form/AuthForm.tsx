import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Loader from "@/components/ui/Loader";
import { resetError } from "@/redux/auth/authSlice";
import { selectAuthError, selectAuthIsLoading } from "@/redux/auth/selectors";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import type { IAuthFormConfig } from "@/types/auth/form";
import { Form, Formik } from "formik";
import { useEffect } from "react";

interface IProps<T> {
  shema: IAuthFormConfig;
  onSubmit: (values: T) => void;
}
const AuthForm = <T extends object>({ shema, onSubmit }: IProps<T>) => {
  const { validationSchema, initialValues, inputs, button } = shema;
  const dispatch = useAppDispatch();
  const disabled = useAppSelector(selectAuthIsLoading);
  const error = useAppSelector(selectAuthError);
  useEffect(() => {
    dispatch(resetError());
  }, []);
  return (
    <Formik<T>
      validationSchema={validationSchema}
      initialValues={initialValues as T}
      onSubmit={onSubmit}
    >
      <Form className={`grid gap-6 mt-8`}>
        {inputs.map((elem) => (
          <Input key={elem.config.name} {...elem} />
        ))}
        {error && <p className="text-error">{error}</p>}
        <Loader loading={disabled} />
        <Button variant="primary" className="py-2.5" disabled={disabled}>
          {button.content}
        </Button>
      </Form>
    </Formik>
  );
};

export default AuthForm;
