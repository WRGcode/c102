import React from 'react';
import { Message, Button } from 'semantic-ui-react';

export const NoProfilePost = () => {
  return( <><Message
  info
  icon="meh"
  header="sorry!"
  content="users has not posted anything yet"
  />
  <Button
  icon="long arrow alternate left"
  content="go back"
  as="a"
  href='/'
  />
  </>
  )
};

export const NoFollowData =() => {};
export const NoMessages=() => {
  return (
    <Message
    info
    icon="telegram plane"
    header="sorry!"
    content="you have no Messages"
    />
  )}
export const NoPosts=() => {
  return (
    <Message
    info
    icon="meh"
    header="hey!"
    content="you shoud follow someone"
    />
  )
};


