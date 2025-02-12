import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Payment",
    description: "EscrowNet Payment page",
};

export default function PaymentLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    );
}
