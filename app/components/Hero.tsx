import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("HomePage");

  return (
    <section>
      <h1>{t("title")}</h1>
    </section>
  );
}
