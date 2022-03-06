import React from "react";
import { Table, Tag, Space } from "antd";
import { Pagination } from "antd";
import DetailClass from "./DetailClass";

const ClassTable = (props: any) => {
  const { dataClass, setPage, setLimit, page } = props;
  let data = dataClass?.data?.records;
  let pages = dataClass?.data;

  // state
  const [visible, setVisible] = React.useState(false);
  const [idX, setIdX] = React.useState(0);

  // open Detail
  const handleOpenDialog = (id: number) => {
    setIdX(id);
    setVisible(true);
  };

  const columns = [
    {
      title: "#",
      dataIndex: "no",
      key: "index",
      render: (text: string, record: any, index: number) =>
        index + 1 + 10 * (pages?.current_page - 1),
    },
    {
      title: "NAME",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "TIPE",
      dataIndex: "course_type",
      key: "course_type",
      render: (course_type: any) => (
        <Tag color={"gray"} style={{ borderRadius: 10 }}>
          {course_type.name.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "CATEGORY",
      dataIndex: "course_category",
      key: "course_category",
      render: (course_category: any) => (
        <Tag color={"yellow"} style={{ borderRadius: 10 }}>
          {course_category.name.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "TINGKAT",
      key: "course_level",
      dataIndex: "course_level",
      render: (course_level: any) => (
        <Tag color={"gray"} style={{ borderRadius: 10 }}>
          {course_level.name.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "METODE",
      key: "course_teach_method",
      dataIndex: "course_teach_method",
      render: (course_teach_method: any) => (
        <Tag color={"yellow"} style={{ borderRadius: 10 }}>
          {course_teach_method.name.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "OPSI",
      key: "id",
      render: (records: any) => (
        <Space size="middle">
          <a onClick={() => handleOpenDialog(records.id)}>Detail</a>
        </Space>
      ),
    },
  ];

  const handlePages = (page: any, pageSize: any) => {
    setPage(page);
    setLimit(pageSize);
  };

  return (
    <div className="py-5 px-5">
      <div className="text-2xl py-3">Daftar Kelas</div>
      <Table columns={columns} dataSource={data} pagination={false} />
      <div className="py-3 justify-center flex">
        <Pagination
          defaultCurrent={1}
          current={page}
          total={pages?.total_records}
          onChange={handlePages}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
      <DetailClass visible={visible} setVisible={setVisible} idX={idX} />
    </div>
  );
};

export default ClassTable;
