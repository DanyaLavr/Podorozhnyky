import AuthForm from "@/components/auth/form/AuthForm";
import AuthHeading from "@/components/auth/heading/AuthHeading";

const Login = () => {
  return (
    <>
      <AuthHeading
        title="Вхід"
        description="   Вітаємо знову у спільноту мандрівників!"
      />
      <AuthForm
        shema={{
          inputs: [
            {
              variant: "input",
              config: { name: "Name", type: "text", placeholder: "Name" },
            },
            {
              variant: "input",
              config: { name: "Email", type: "email", placeholder: "Email" },
            },
          ],
        }}
        onSubmit={() => {}}
      />
    </>
  );
};

export default Login;
