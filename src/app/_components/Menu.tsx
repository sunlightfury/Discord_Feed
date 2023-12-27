"use client";

import {
  LayoutDashboardIcon,
  LogOut,
  User,
  Menu as MenuIcon,
  Sun,
  Moon,
} from "lucide-react";

import Link from "next/link";

import Image from "next/image";
import Logo_img from "@/app/assets/logo.svg";

import { Button } from "@/app/_components/ui/button";
// import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/app/_components/ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/app/_components/ui/sheet";

// import { UserMenu, AdminMenu } from "@/app/_components/role-menu";

// import { useSelector } from "react-redux";
// import { RootState } from "@/app/redux/store";

// import { api } from "@/trpc/react";

type UserState = {
  id: string;
  avatar?: string;
  username: string;
  password: string;
  email: string;
};

const USER_INITIAL: UserState = {
  id: "",
  username: "",
  avatar: undefined,
  password: "",
  email: "",
};

export default function Menu() {
  // const { toast } = useToast();
  const { push } = useRouter();

  // const user_store = useSelector((state: RootState) => state.auth.user);

  // const updateUserEndPoint = api.auth.updateUser.useMutation({
  //   onSuccess: (data) => {},
  // });

  const [mode, setMode] = useState("dark");
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(USER_INITIAL);

  useEffect(() => {
    let localMode = localStorage.getItem("mode");
    if (!localMode) {
      return;
    }
    if (localMode == "dark") {
      document.getElementById("mode")?.classList.add("dark");
      setMode("dark");
    } else {
      document.getElementById("mode")?.classList.remove("dark");
      setMode("light");
    }
  }, []);

  function handleLogout() {
    Cookies.remove("user-token");
    push("/");
  }

  function toggleMode() {
    document.getElementById("mode")?.classList.toggle("dark");
    const v = mode == "light" ? "dark" : "light";
    setMode(() => v);
    localStorage.setItem("mode", v);
  }

  function handleUpdate() {}

  useEffect(() => {
    if (open) {
      // setUser({
      //   ...user,
      //   avatar: user_store.avatar as any,
      //   username: user_store.name,
      //   email: user_store.email,
      // });
    }
  }, [open]);

  return (
    <>
      <Sheet>
        <div className="flex items-center p-3 shadow-md">
          <SheetTrigger asChild>
            <Button className="max-[500px]:left-2" variant="default">
              <MenuIcon className="h-5 w-5" />{" "}
              <span className="ml-2 hidden sm:flex">Menu</span>
            </Button>
          </SheetTrigger>
          <Image src={Logo_img} alt="logo_img" width={140} className="ml-5" />
          <p className="ml-4 text-[30px] font-[700] text-[#8053FF] dark:text-white">
            APZ-
            <span className="text-[#23155B] dark:text-gray-400">
              Membership
            </span>
          </p>
        </div>
        <SheetContent side="left" className="z-[9999] dark:border-slate-800">
          <SheetHeader>
            
            <div className="flex flex-col gap-2 pt-8">
              <SheetTrigger asChild>
                <Link
                  href="/dashboard"
                  className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
                >
                  <LayoutDashboardIcon className="mr-2 h-5 w-5" />
                  <span>Dashboard</span>
                </Link>
              </SheetTrigger>

              {/* {user_store.role === "ADMIN" && <AdminMenu />}
              {user_store.role === "USER" && <UserMenu />} */}

              <div
                className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
                onClick={() => setOpen(true)}
              >
                <User className="mr-2 h-5 w-5" />
                <span>Edit profile</span>
              </div>
              <div
                className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
                onClick={toggleMode}
              >
                {mode === "dark" ? (
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <Sun className="mr-2 h-5 w-5" />
                    <span>Light mode</span>
                  </div>
                ) : (
                  <div className="flex flex-row items-center gap-2">
                    {" "}
                    <Moon className="mr-2 h-5 w-5" />
                    <span>Dark mode</span>
                  </div>
                )}
              </div>

              <div
                className="flex cursor-pointer flex-row items-center gap-2 rounded-lg px-3 py-3 hover:bg-gray-800 hover:text-white dark:hover:text-inherit"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-5 w-5" />
                <span>Log out</span>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Dialog open={open} onOpenChange={(val) => setOpen(val)}>
        <DialogContent className="sm:max-w-[495px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                User Name
              </Label>
              <Input
                id="username"
                value={user.username ?? ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, username: e.target.value }))
                }
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="avatar" className="text-right">
                Avatar URL
              </Label>
              <Input
                id="avatar"
                value={user.avatar ?? ""}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, avatar: e.target.value }))
                }
                className="col-span-3"
              />
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="new_password" className="text-right">
                New Password
              </Label>
              <Input
                id="new_password"
                type="password"
                name="new_password"
                value={user.password}
                onChange={(e) =>
                  setUser((prev) => ({ ...prev, password: e.target.value }))
                }
                className="col-span-3"
              />
            </div> */}
          </div>
          <DialogFooter>
            <Button
              onClick={handleUpdate}
              disabled={!user.password && !user.username}
              type="submit"
            >
              Save changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
