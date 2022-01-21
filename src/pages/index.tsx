import LoadingPage from "../components/LoadingPage";
import { OVERVIEW } from "../constants";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(OVERVIEW);
  }, [router]);

  return <LoadingPage />;
};

export default HomePage;
