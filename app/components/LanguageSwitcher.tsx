"use client";

import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const languageOptions = [
  {
    code: "en",
    label: "English",
    flag: "🇺🇸",
  },
  {
    code: "ar",
    label: "العربية",
    flag: "🇸🇦",
  },
] as const;

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1]; // expects /[locale]/...

  const changeLanguage = (lang: string) => {
    // Replace the locale in the pathname and push
    const segments = pathname.split("/");
    if (segments[1] === currentLocale) {
      segments[1] = lang;
      router.replace(segments.join("/"));
    } else {
      // fallback: just set locale as first segment
      router.replace(`/${lang}${pathname}`);
    }
  };

  useEffect(() => {
    document.documentElement.dir = currentLocale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = currentLocale;
  }, [currentLocale]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 flex items-center cursor-pointer">
          <Globe className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languageOptions.map(lang => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center gap-2 ${lang.code === currentLocale ? "bg-accent" : ""}`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.label}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
