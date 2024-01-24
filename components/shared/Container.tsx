import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

function Container({ children }: Props) {
    return (
        <div className="grid mx-auto desktop:grid-cols-12 tablet:grid-cols-8 grid-cols-4 desktop:max-w-desktop tablet:max-w-tablet max-w-mobile">
            {children}
        </div>
    );
}

export default Container;
