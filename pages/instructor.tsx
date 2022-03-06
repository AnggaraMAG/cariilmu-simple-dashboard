import React from "react";
import SideMenus from "../components/molecules/SideMenus";
import InstructorTable from "../components/organism/Instructor";
import Head from "next/head";
import { useGetInstructorQuery } from "../services/redux/features/instruktur";

const InstructorPage = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  // get all data class
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetInstructorQuery({
      page,
      limit,
    });

  console.log(`first instructor====>`, data);
  return (
    <div className="flex">
      <Head>
        <title>Daftar Instruktur</title>
        <meta property="og:title" content="Daftar Instruktur" key="title" />
      </Head>
      <aside className="h-screen sticky top-0">
        <SideMenus />
      </aside>
      <main className="w-full">
        <InstructorTable
          dataInstructor={data}
          setPage={setPage}
          setLimit={setLimit}
          page={page}
        />
      </main>
    </div>
  );
};

export default InstructorPage;
