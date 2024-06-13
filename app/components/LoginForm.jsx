import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Input,
  Checkbox,
  Button,

} from "@nextui-org/react";

export default function LoginForm() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="font-bold text-large">Login</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="flex flex-col gap-4">
        <p>Please Login to Expereince the QC Automation</p>
        <Input
          autoFocus
          label="Email"
          placeholder="Enter your email"
          variant="bordered"
        ></Input>
        <Input
          autoFocus
          label="password"
          placeholder="Enter your password"
          variant="bordered"
        ></Input>
         <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
                <Button color="primary">
                  Login
                </Button>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal href="https://www.gokwik.co">
          Visit Gokwik Website.
        </Link>
      </CardFooter>
    </Card>
  );
}
