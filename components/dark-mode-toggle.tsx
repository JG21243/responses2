"use client";
import { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

export default function DarkModeToggle() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isDark =
      typeof window !== "undefined" && localStorage.getItem("theme") === "dark";
    setEnabled(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggle = (checked: boolean) => {
    setEnabled(checked);
    if (checked) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className="flex items-center gap-2">
      <Switch checked={enabled} onCheckedChange={toggle} />
      <span className="text-sm">{enabled ? "Dark" : "Light"}</span>
    </div>
  );
}
