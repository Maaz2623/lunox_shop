import React from "react"

export default async function AuthLayout({children}: {children: React.ReactNode}){
    return(
        <main className="flex justify-center items-center h-screen">
            {children}
        </main>
    )
}