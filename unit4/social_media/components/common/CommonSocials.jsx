import React from "react";
import { Divider, Message, Button } from "semantic-ui-react";

const CommonSocials =
  ({
    user: { facebook, instagram, youtube, twitter },
    handleChange,
    showSocialLinks,
    setShowSocialLinks,
  }) => {
    return (
      <>
        <Button
          content="add social links"
          color="orange"
          icon="at"
          type="button"
          onChange={() => setShowSocialLinks(!showSocialLinks)}
        />

        {showSocialLinks && (
          <>
            <Divider />
            <Message
              icon="attention"
              info
              size="small"
              header="Social media links are optional"
            />

            <Form.Input
              icon="youtube"
              iconPostion="left"
              placeholder="youtube"
              name="youtube"
              value={youtube}
              onChange={handleChange}
            />
            <Form.Input
              icon="facebook"
              iconPostion="left"
              placeholder="facebook"
              name="facebook"
              value={facebook}
              onChange={handleChange}
            />
            <Form.Input
              icon="youtube"
              iconPostion="left"
              placeholder="youtube"
              name="youtube"
              value={youtube}
              onChange={handleChange}
            />
            <Form.Input
              icon="youtube"
              iconPostion="left"
              placeholder="youtube"
              name="youtube"
              value={youtube}
              onChange={handleChange}
            />
          </>
        )}
      </>
    );
  };

export default CommonSocials;
