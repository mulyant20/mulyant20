import { useEffect, useState } from "react";
import CardSkeleton from "../components/CardSkeleton";
import Profile from "../components/Profile";

export default function Home() {
  const [onload, setOnload] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setOnload(true);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  console.log(onload);
  return (
    <>
      <Profile src="profile" />
      {!onload ? (
        <div className="container max-w-[600px] mx-auto flex justify-between flex-wrap gap-y-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      ) : (
        <p className="mt-6 text-white text-center text-popup">work in progress&#129325;</p>
      )}
    </>
  );
}
