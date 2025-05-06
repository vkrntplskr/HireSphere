"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { signOut } from "@/lib/actions/auth.action";

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut();
      toast.success("Logged out successfully.");
      router.push("/sign-in");
    } catch (error) {
      toast.error("Failed to log out.");
    }
  };

  return (
    <Button className="ml-auto" variant="outline" onClick={handleLogout}>
      Log out
    </Button>
  );
};

export default LogoutButton;