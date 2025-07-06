'use client'


import { Button } from "@/components/ui/button";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const page =() => {
 const trpc=useTRPC();
 const invoke=useMutation(trpc.invoke.mutationOptions({
  onSuccess:()=>{
    toast.success("Background job stated")
  }
 }));

  return (
    <div className=" text-white p-3 m-2">
      <Button disabled={invoke.isPending} onClick={()=>invoke.mutate({text:"John"})}>
        invoke job Background</Button>
    </div>
   
  )
}

export default page;
