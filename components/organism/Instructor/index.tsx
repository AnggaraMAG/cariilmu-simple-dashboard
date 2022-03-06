import React from "react";
import { Table, Tag, Space } from "antd";
import { Pagination } from "antd";
import DetailInstructor from "./DetailInstructor";

const InstructorTable = (props: any) => {
  const { dataInstructor, setPage, setLimit, page } = props;
  let data = dataInstructor?.data?.records;
  let pages = dataInstructor?.data;

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
      title: "TOTAL KELAS",
      dataIndex: "total_courses",
      key: "total_courses",
      render: (total_courses: number) => (
        <Tag color={"gray"} style={{ borderRadius: 10 }}>
          {total_courses}
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
    <div className="py-5 px-5 ">
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
      <DetailInstructor visible={visible} setVisible={setVisible} idX={idX} />
    </div>
  );
};

export default InstructorTable;
