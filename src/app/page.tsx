'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const page =() => {
  const [value, SelectValue] = useState("");
 const trpc=useTRPC();
 const invoke=useMutation(trpc.invoke.mutationOptions({
  onSuccess:()=>{
    toast.success("Background job started")
  },
  onError:(err)=>{
    toast.error("Error starting background job: " + err.message);
  }
 }));

  return (
    <div className=" text-white p-3 m-2">
      <Input value={value} onChange={(e)=>SelectValue(e.target.value)}/>
      <Button disabled={invoke.isPending} onClick={()=>invoke.mutate({value:value})}>
        invoke job Background</Button>
    </div>
   
  )
}

export default page;
