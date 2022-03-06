import React from "react";
import SideMenus from "../components/molecules/SideMenus";
import InstructorTable from "../components/organism/Instructor";
import Head from "next/head";
import { useGetInstructorQuery } from "../services/redux/features/instruktur";
import NavBar from "../components/molecules/NavBar";

const InstructorPage = () => {
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);

  const [showNav, setshowNav] = React.useState(false);
  console.log(`showNav===>`, showNav);

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
      <NavBar setshowNav={setshowNav} showNav={showNav} />

      {/* sidebar */}
      <SideMenus showNav={showNav} />
      {/* </aside> */}

      {/* content */}
      <main className="w-full overflow-y-auto md:mt-0 mt-12 py-1.5 md:py-0">
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
