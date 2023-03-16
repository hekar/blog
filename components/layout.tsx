import Footer from "./footer";
import Meta from "./meta";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <div>
      <Meta />
      <div className="min-h-screen text-gray-800 dark:text-gray-50">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
