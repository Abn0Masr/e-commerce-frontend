import axios from "axios";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: Readonly<{ params: { locale: "ar" | "en" } }>) {
  const t = await getTranslations({ locale });

  return {
    title: t("Globals.cart"),
  };
}

const CartPage = async () => {
  return (
    <div className="w-full grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6"></div>
  );
};

export default CartPage;
