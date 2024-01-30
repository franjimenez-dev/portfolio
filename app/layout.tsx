import React, {Suspense} from "react";
import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/lib/utils";
import { fontSans } from "./font";
import ShadowBg from "@/components/shadow-bg";

export const metadata: Metadata = {
    title: "Fran Jiménez",
    description: "Portfolio de Fran Jiménez",
};

export default function RootLayout({
   children,
}: Readonly<{children: React.ReactNode; }>) {
    return (
        <html lang="es-ES">
                    <body
                        className={cn(
                            "min-h-screen bg-[#010206] font-sans antialiased my-bg-image relative",
                            fontSans.variable
                        )}
                    >
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="dark"
                        disableTransitionOnChange
                    >
                            <main className={"container"}>
                                {children}
                            </main>
                            <ShadowBg/>
                    </ThemeProvider>
                    </body>
        </html>
    );
}
