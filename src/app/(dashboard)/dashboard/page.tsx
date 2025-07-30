"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [user, setUser] = useState<string | null>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUserId = localStorage.getItem("userId");
      setUser(storedUserId);
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.push("/auth");
      }
    }
  }, [user, loading, router]);

  if (loading) {
    return <p>Loading user data...</p>;
  }
  if (!user) {
    return (
      <p>
        Access Denied. Redirecting to <Link href="/auth">login</Link>...
      </p>
    );
  }
  return (
    <div className="dashboard">
      <div className="dashboard__container">
        Welcome to the Dashboard, User ID: {user}!
      </div>
    </div>
  );
};

export default Page;
