import {  Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return(
    <Sheet>
        <SheetTrigger>
            <Menu className="text-white m-auto"/>
        </SheetTrigger>
        <SheetContent className="space-y-3">
            <SheetTitle>
                <span>Clever Books</span>
            </SheetTitle>
            <Separator/>
            <SheetDescription className="flex flex-col gap-4 ">
            <span className="cursor-pointer hover:text-red-600">pricing</span>
            <Separator/>
        <span className="cursor-pointer hover:text-red-600">Industry</span>
        <Separator/>
        <span className="cursor-pointer hover:text-red-600">About</span>
        <Separator/>
        <span className="cursor-pointer hover:text-red-600">Blog</span> 
        <Separator/>
        <Button  className="flex-1 front-bold bg-orange-500">Log In</Button>
            </SheetDescription>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav;