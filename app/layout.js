export const metadata = {
  title: "Vybz",
  description: "Vybz Social App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
