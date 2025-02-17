import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Settings",
    description: "EscrowNet Settings page",
};

export default function SettingsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>{children}</>
    );
}
