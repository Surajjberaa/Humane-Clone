import Image from "next/image";
import Cosmos from "./(Webpage)/cosmos/page";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div>
      <Loading />
      <Navbar />
      <Cosmos />
    </div>
  );
}
