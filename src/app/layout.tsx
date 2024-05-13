import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Provider from "@/util/Provider";

const inter = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Womazing",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <div className="wrapper">
                    <div className="header">
                        <Navbar />
                    </div>
                    <div className="main">
                        <Provider>{children}</Provider>
                    </div>
                    <div className="footer">
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
