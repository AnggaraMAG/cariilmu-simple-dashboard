import React from "react";
import SideMenus from "../components/molecules/SideMenus";
import InstructorTable from "../components/organism/Instructor";
import Head from "next/head";
import { useGetInstructorQuery } from "../services/redux/features/instruktur";
import NavBar from "../components/molecules/NavBar";

const InstructorPage = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  // get all data class
  const { data, error, isLoading, isFetching, isSuccess } =
    useGetInstructorQuery({
      page,
      limit,
    });

  return (
    <div className="relative h-screen lg:overflow-hidden overflow-scroll md:flex">
      <Head>
        <title>Daftar Instruktur</title>
        <meta property="og:title" content="Daftar Instruktur" key="title" />
      </Head>

      {/* navbar */}
      <NavBar />

      {/* sidebar */}
      <aside className="sidebar w-64 space-y-6  absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <SideMenus />
      </aside>

      {/* content */}
      <main className="w-full overflow-y-auto">
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
