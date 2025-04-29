"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const isLoggedIn = false;
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // redirect to login
      router.push("/");
    }
  }, []);
  return <div>Dashboard</div>;
}
