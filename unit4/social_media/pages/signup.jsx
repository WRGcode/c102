import { Container, Form, Segment, TextArea, Button } from "semantic-ui-react";
import { useRef, useState, useEffect } from "react";
import { FooterMessage, HeaderMessage } from "../components/common/message";
import CommonSocials from "../components/common/CommonSocials";
import DragNDrop from "../components/common/DragNDrop";
import usernameRegex from "../util/usernameRegex";
import axios from "axios";

const signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    youturb: "",
    twitter: "",
    instagram: "",
    facebook: "",
  });
  const { name, email, password, bio } = user;

  //* form states
  const [formLoading, setFormLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [submitDisabled, setsubmitDisabled] = useState(false);
  const [ShowPassword, setShowPassword] = useState(false);

  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(true);
  const [username, setUsername] = useState("");

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const inputRef = useRef(null);
  const [highLighted, setHighLighted] = useState(false);
  const [media, setMedia] = useState(null);
  const [mediaPreview, setMediaPreview] = useState(null);

  //* functions

  const handleSubmit = (e) => {
    e.perventDefault();
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const checkUsername = async () => {
    setUsernameLoading(true);
    try {
      const res = await axios.get(`/api/v1/signup/${username}`);
      if (res.data === "Available") {
        setUsernameAvailable(true);
        setUser((prev) => ({ ...prev, username }));
      }
    } catch (error) {
      setErrorMsg("username not available");
    }
    setUsernameLoading(false)
  };

  //* EFFECTS

  useEffect(() => {
    setsubmitDisabled(!(name && email && password && username));
  }, [user, username]);

  useEffect(() => {
    username === "" ? setUsernameAvailable(false) : checkUsername();
  }, [username]);

  return (
    <>
      <HeaderMessage />
      <Form loading={formLoading} error={errorMsg} onSubmit={handleSubmit}>
        <Segment>
          <DragNDrop
            inputRef={inputRef}
            handleChange={handlechange}
            media={media}
            setMedia={setMedia}
            mediaPreview={mediaPreview}
            setMediaPreview={setMediaPreview}
            highLighted={highLighted}
            setHighLighted={setHighLighted}
          ></DragNDrop>
          {/* //drag and drop */}
          <Form.Input
            required
            label="name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handlechange}
            icon="user"
            iconPosition="left"
          />
          <Form.Input
            required
            label="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handlechange}
            icon="envelope"
            iconPosition="left"
          />
          <Form.Input
            required
            label="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handlechange}
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
          <Form.Input
            loading={usernameLoading}
            error={!usernameAvailable}
            required
            label="username"
            placeholder="username"
            value={username}
            icon={usernameAvailable ? "check" : "close"}
            iconPosition="left"
            onChange={(e) => {
              setUsername(e.target.value);
              const test = usernameRegex.test(e.target.value);
              if (test || usernameRegex.test(e.target.value)) {
                setUsernameAvailable(true);
              } else {
                setUsernameAvailable(false);
              }
            }}
          />

          <Form.Field
            control={TextArea}
            name="bio"
            value={bio}
            onChange={handlechange}
            placeholder="bio"
          />
          <CommonSocials
            user={user}
            onChange={handlechange}
            showSociallinks={showSocialLinks}
            setSociallinks={setShowSocialLinks}
          />
          <Button
            icon="signup"
            content="Sign up"
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
export default signup;
