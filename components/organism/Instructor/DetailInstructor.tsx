import React, { useEffect } from "react";
import { Modal } from "antd";
import { Input, Form } from "antd";
import { useGetDetailInstructorQuery } from "../../../services/redux/features/instruktur";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { EditorState, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Avatar } from "antd";

export interface DetailProps {
  visible: any;
  setVisible: any;
  idX: number;
}

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const InstructorDetail = (props: DetailProps) => {
  const { visible, setVisible, idX } = props;
  const {
    data: dataClass,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetDetailInstructorQuery(idX);

  // state
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  useEffect(() => {
    if (isSuccess) {
      const html = dataClass?.data?.description;
      const contentBlock = htmlToDraft(html);
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const resultEditorState = EditorState.createWithContent(contentState);
      setEditorState(resultEditorState);
    }
  }, [dataClass?.data?.description, isSuccess]);

  return (
    <div>
      <Modal
        title="Detail Instruktur"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelText="Close"
      >
        <div className="flex justify-center">
          <Avatar
            size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            src={dataClass?.data?.avatar}
          />
        </div>
        <div className="flex justify-center ">Add photo</div>
        <Form layout="inline" size="large" name="horizontal_login">
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "100%", marginRight: 0 }}
          >
            <div className="text-sm text-gray-400">Nama</div>
            <Input placeholder="Nama" value={dataClass?.data?.name} disabled />
          </Form.Item>
          <div className="text-sm text-gray-400 mt-3 -mb-4">Deskripsi</div>
          <div className="mt-5 mb-5 p-3 border-2">
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              readOnly
            />
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default InstructorDetail;
