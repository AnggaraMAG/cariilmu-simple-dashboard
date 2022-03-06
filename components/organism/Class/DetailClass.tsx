import React, { useEffect } from "react";
import { Modal } from "antd";
import { Input, Form } from "antd";
import { useGetDetailKelasQuery } from "../../../services/redux/features/kelas";
import dynamic from "next/dynamic";
import { EditorProps } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import htmlToDraft from "html-to-draftjs";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export interface DetailProps {
  visible: any;
  setVisible: any;
  idX: number;
}

const Editor = dynamic<EditorProps>(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

const DetailClass = (props: DetailProps) => {
  const { visible, setVisible, idX } = props;
  const {
    data: dataClass,
    error,
    isLoading,
    isFetching,
    isSuccess,
  } = useGetDetailKelasQuery(idX);
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
        title="Master Data"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        okButtonProps={{ style: { display: "none" } }}
        cancelText="Close"
        width={1000}
      >
        <Form layout="inline" size="large" name="horizontal_login">
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "25%", marginRight: 12 }}
          >
            <div className="text-sm text-gray-400">Kode</div>
            <Input placeholder="Kode" value={dataClass?.data?.code} disabled />
          </Form.Item>
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "73.6%", marginRight: 0 }}
          >
            <div className="text-sm text-gray-400">Judul</div>
            <Input placeholder="Judul" value={dataClass?.data?.name} disabled />
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
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "24%", marginRight: 12 }}
          >
            <div className="text-sm text-gray-400">Kategori</div>
            <Input
              placeholder="Kategori"
              value={dataClass?.data?.course_category?.name}
              disabled
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "24%", marginRight: 12 }}
          >
            <div className="text-sm text-gray-400">Tipe</div>
            <Input
              placeholder="Tipe"
              value={dataClass?.data?.course_type?.name}
              disabled
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "24%", marginRight: 12 }}
          >
            <div className="text-sm text-gray-400">Level</div>
            <Input
              placeholder="Level"
              value={dataClass?.data?.course_level?.name}
              disabled
            />
          </Form.Item>
          <Form.Item
            wrapperCol={{ sm: 24 }}
            style={{ width: "24%", marginRight: 0 }}
          >
            <div className="text-sm text-gray-400">Metode Ajar</div>
            <Input
              placeholder="Metode Ajar"
              value={dataClass?.data?.course_teach_method?.name}
              disabled
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default DetailClass;
