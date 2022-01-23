import LoadingPage from "../components/LoadingPage";
import { RESUME } from "../constants";
import { useEffect } from "react";
import { useRouter } from "next/router";

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(RESUME);
  }, [router]);

  return <LoadingPage />;
};

export default HomePage;
