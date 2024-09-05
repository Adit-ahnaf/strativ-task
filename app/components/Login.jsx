"use client";
import { ceredntialLogin } from "@/app/actions/index";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const LoginComponent = () => {
  const route = useRouter();
  const [userInfo, setuserInfo] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await ceredntialLogin(userInfo);
      if (!!response.error) {
        toast.error("Authorization Failed, Please Check Credential !!");
      } else {
        toast.success("Logged In Successfully");
        route.push("/quiz");
      }
    } catch (e) {
      toast.error("Authorization Failed, Please Check Credential !!");
    }
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let fieldName = e.target.name;

    setuserInfo({
      ...userInfo,
      [fieldName]: value,
    });
  };

  return (
    <Card className="mx-auto mt-[80px] sm:mt-[200px] max-w-sm w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                onChange={handleChange}
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                name="password"
                onChange={handleChange}
                type="password"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginComponent;
