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
  const [showNav, setshowNav] = React.useState(false);

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
      <NavBar setshowNav={setshowNav} showNav={showNav} />

      {/* sidebar */}
      <SideMenus showNav={showNav} />

      {/* content */}
      <main className="w-full overflow-y-auto md:mt-0 mt-12 py-1.5 md:py-0">
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
