import { FooterMessage, HeaderMessage } from "../components/common/message";
import {
  Container,
  Form,
  Icon,
  Segment,
  Message,
  Button,
  Divider,
} from "semantic-ui-react";
import { useRef, useState, useEffect } from "react";

const login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;
  // const [password, setPassword] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("something when wrong");
  };

  useEffect(() => {
    setSubmitDisabled(!(email && password));
  }, [user]);

  return (
    <>
      <HeaderMessage />
      <Form
        loading={formLoading}
        error={errorMsg !== null}
        onSubmit={handleSubmit}
      >
        <Message
          error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />
          <Segment>
            <Form.Input
              required
              label="Email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleChange}
              icon="envelope"
              iconPosition="left"
              type="email"
            />
            <Form.Input required 
            label="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            icon={
              ShowPassword
                ? {
                    name: "eye slash",
                    circular: true,
                    link: true,
                    onClick: () => setShowPassword(!ShowPassword),
                  }
                : {
                    name: "eye",
                    circular: true,
                    link: true,
                    onClick: () => setShowPassword(!ShowPassword),
                  }
            }
            iconPosition="left"
            type={ShowPassword ? "text" : "password"}
            />
            <Divider hidden />
            <Button
            icon='signup'
            content="Login"
            type="submit"
            color="green"
            disabled={submitDisabled}
            />
          </Segment>
        
      </Form>
      <FooterMessage />
    </>
  );
};
export default login;
