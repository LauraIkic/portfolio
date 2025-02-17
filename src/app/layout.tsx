// app/layout.tsx
import Header from "@/app/components/Header";
import Navigation from "@/app/components/Navigation";
import '../app/globals.css';
import Footer from "@/app/components/Footer";  // Global styles

export const metadata = {
    title: 'Laura Ikic',
    description: 'Portfolio',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="container mx-auto h-screen flex flex-col justify-between">

        <div>
            <Header />
            <Navigation />
            {children}
        </div>

        <Footer/>
        </body>
        </html>
    );
}
