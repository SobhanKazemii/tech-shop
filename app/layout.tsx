import LayoutWrapper from "@/components/layouts/main-layout/LayoutWrapper";
import "./globals.css";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <LayoutWrapper>{children}</LayoutWrapper>;
}
