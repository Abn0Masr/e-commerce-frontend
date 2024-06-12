import { useTranslations } from "next-intl";
import Link from "next/link";

const Orders: React.FC = () => {
  const t = useTranslations("Globals");
  return (
    <Link href={"/orders"} id="orders-link" className="OrderLink">
      {t("orders")}
    </Link>
  );
};

export default Orders;
