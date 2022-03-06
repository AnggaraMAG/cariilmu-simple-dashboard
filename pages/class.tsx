import React from "react";
import SideMenus from "../components/molecules/SideMenus";
import Class from "../components/organism/Class";
import Head from "next/head";
import { useGetKelasQuery } from "../services/redux/features/kelas";
import NavBar from "../components/molecules/NavBar";

const Index = () => {
  // state
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  // get all data class
  const { data, error, isLoading, isFetching, isSuccess } = useGetKelasQuery({
    page,
    limit,
  });
  return (
    <div className="relative h-screen lg:overflow-hidden overflow-scroll md:flex">
      <Head>
        <title>Daftar Kelas</title>
        <meta property="og:title" content="Daftar Kelas" key="title" />
      </Head>
      {/* Navbar */}
      <NavBar />

      {/* sidebar */}
      <aside className="sidebar w-64 space-y-6  absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
        <SideMenus />
      </aside>

      {/* content */}
      <main className="w-full overflow-y-auto">
        <Class
          dataClass={data}
          page={page}
          setPage={setPage}
          setLimit={setLimit}
        />
      </main>
    </div>
  );
};

export default Index;
