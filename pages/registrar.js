import React from "react";
import Register from "../components/form/Register";
import { getSession } from "next-auth/react";

const Registrar = () => {
  return (
    <>
      <Register />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      session,
    },
  };
};

export default Registrar;
