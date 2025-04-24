import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="h-[710px] relative flex flex-col border-3 border-black rounded-sm">
      <header>
        <NavigationMenu>
          <NavigationMenuList className="px-[20px] pt-[40px] pb-[24px]">
            <NavigationMenuItem>
              <div className="flex flex-col gap-[14px]">
                <h1 className="text-[28px] font-semibold leading-none">
                  Signin to your
                </h1>
                <h1 className="text-[28px] font-semibold leading-none">
                  PopX account
                </h1>
                <h1 className="text-base text-[#1D2226] opacity-60">
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit,
                </h1>
              </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>

      <div className="space-y-6 px-[20px]">
        <div className="relative">
          <Label
            htmlFor="fullName"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Email Address
          </Label>
          <Input
            id="fullName"
            type="text"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="Enter email address"
          />
        </div>

        <div className="relative">
          <Label
            htmlFor="email"
            className="absolute left-[12px] -top-[10px] bg-[#f7f8f9] px-1 text-[#6C25FF] text-[13px] font-light flex gap-0"
          >
            Password<span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            className="mt-[22px] bg-[#f7f8f9] text-black border border-[#CBCBCB] focus-visible:ring-[#6C25FF] h-[52px] px-3"
            placeholder="Enter Password"
          />
        </div>

        {/* Submit Button */}
      </div>
      <div className="px-[20px] mt-[14px]">
        <Link to="/settings">
          <Button
            type="submit"
            className="w-full bg-[#6C25FF] hover:bg-[#5a1fe6] text-white font-semibold text-[16px] h-[46px] mt-0 mb-[30px]"
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
}
