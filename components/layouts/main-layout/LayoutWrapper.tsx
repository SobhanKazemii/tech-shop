"use client";
import { ReactNode, useState } from "react";
import MainLayout from "./MainLayout";

type Props = {
    children: ReactNode;
};

function LayoutWrapper({ children }: Props) {
    const [dataTheme, setDataTheme] = useState<"dark" | "light">("light");

    function handleChangeTheme() {
        setDataTheme((prev) => (prev == "dark" ? "light" : "dark"));
    }

    return (
        <html dir="rtl" data-theme={dataTheme}>
            <body>
                <MainLayout>{children}</MainLayout>
            </body>
        </html>
    );
}

export default LayoutWrapper;
