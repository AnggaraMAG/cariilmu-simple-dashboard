import React from "react";
import SideMenus from "../components/molecules/SideMenus";
import Class from "../components/organism/Class";
import Head from "next/head";
import { useGetKelasQuery } from "../services/redux/features/kelas";

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
    <div className="flex">
      <Head>
        <title>Daftar Kelas</title>
        <meta property="og:title" content="Daftar Kelas" key="title" />
      </Head>
      <aside className="h-screen sticky top-0">
        <SideMenus />
      </aside>
      <main>
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
