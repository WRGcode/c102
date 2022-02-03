import { useRouter } from "next/router";
// import { useState } from "react";
import { Message, Icon} from "semantic-ui-react";
import Link from "next/link";

export const HeaderMessage = () => {
  const router = useRouter();
  const isSignup = router.pathname === "/signup";
  // const [hideMesage, setHideMessage] = useState(false);
  return (
    <Message
      color="teal"
      icon={isSignup ? "settings" : "privacy"}
      header={isSignup ? "get started here" : " welcome back"}
      content={
        isSignup ? "Create New account" : "Login with Email and Password"
      }
    />
  );
};

export const FooterMessage = () => {
  const router = useRouter();
  const isSignup = router.pathname === "/signup";
  return (
    <>
      {isSignup ? (
        <>
          <Message warning>
            <Icon name="help" />
            <Link href="/login">login here!</Link>
          </Message>
        </>
      ) : (
        <>
          <Message attached='top'>
            <Icon name="lock" />
            <Link href="/reset">Forget password?</Link>
          </Message>
          <Message attached='bottom' warning>
            <Icon name="help" />
            <Link href="/signup">Signup here!</Link>
          </Message>
        </>
      )}
    </>
  );
};
