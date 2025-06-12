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
import { registerSchema } from "@/lib/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

export function RegisterForm() {
  const { register, handleSubmit ,  } = useForm<registerSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<registerSchema> = (data) => {
    console.log("Register data:", data);
  };

  return (
    <Card className="w-full max-w-sm">
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardHeader>
          <CardTitle>Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create a new account
          </CardDescription>
          <CardAction>
            <Button variant="link" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                {...register("name")}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                {...register("password")}
                required
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex-col gap-2 mt-4">
          <Button type="submit" className="w-full">
            Register
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
