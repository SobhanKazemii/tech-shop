import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type Props = {
    children: ReactNode;
};

function MainLayout({ children }: Props) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;
