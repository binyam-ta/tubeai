"use client"

import { ClerkProvider } from "@clerk/nextjs";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;
    if (!schematicPubKey){
        throw new Error(
            "No schematic publishable key found. please add it to our ,env,local file"
        );
    }
  return (
    <ClerkProvider>
        <SchematicProvider publishableKey={schematicPubKey}>
       <SchematicWrapped>{children}</SchematicWrapped> 
        </SchematicProvider>
        </ClerkProvider>
  );
}
