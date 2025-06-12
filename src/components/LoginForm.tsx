"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginSchema } from "@/lib/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export function LoginForm() {
  const { register, handleSubmit , } = useForm<loginSchema>({
    resolver: zodResolver(loginSchema),
    mode:"onTouched"
  });

  const onSubmit: SubmitHandler<loginSchema> = (data) => console.log(data);

  return (
    <Card className="w-full max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href="/register">Register</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <a
                  href="#"
                  className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input
                id="password"
                type="password"
                {...register("password")}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full cursor-pointer">
            Login
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
