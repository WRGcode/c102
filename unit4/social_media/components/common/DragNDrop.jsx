import React from "react";
import { Form, Header, Icon, Segment, Image } from "semantic-ui-react";

const DragNDrop = ({
  highLighted,
  setHighLighted,
  inputRef,
  handleChange,
  media,
  setMedia,
  mediaPreview,
  setMediaPreview     ,
}) => {
  return (
    <>
      <Form.Field>
        <Segment placeholder secondary>
          <input  style={{display:"none"}}
            type="file"
            accept="image/"
            onChange={handleChange}
            name="media"
            ref={inputRef}
          />
          <div
            style={{ cursor: "pointer" }}
            onDragOver={(e) => {
              e.preventDefault();
              setHighLighted(true);
            }}
            onDragLeave={(e) => {
              e.preventDefault();
              setHighLighted(false);
            }}
            onDrop={(e) => {
              e.preventDefault();
              setHighLighted(true);

              // console.log(e.dataTransfer.files);

              const dropedFile = e.dataTransfer.files[0]
              setMedia(dropedFile)
              setMediaPreview(URL.createObjectURL(dropedFile))
            }}
            onClick={() => inputRef.current.click()}
          >
            {mediaPreview === null ? (
              <>
                <Segment placeholder basic>
                  <Header icon>
                    <Icon name="file image outline" />
                    Drag N Drop image to upload
                  </Header>
                </Segment>
              </>
            ) : (
              <>
              <Segment placeholder basic>
              <Image src={mediaPreview}
               size="medium"
               centered
               style={{cursor:"pointer"}} />
            </Segment></>
            )}
          </div>
        </Segment>
      </Form.Field>
    </>
  );
};

export default DragNDrop;
