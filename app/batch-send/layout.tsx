import AppFooter from "~~/components/stake/footer/Footer";
import AppHeader from "~~/components/stake/header/Header";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Monbux - Batch sender",
  description: "Send MON to multiple addresses in one transaction using Monbux",
});

const BatchSendLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppHeader />
      {children}
      <AppFooter />
    </>
  );
};

export default BatchSendLayout;
