"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Terapkan theme ke elemen root HTML
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <select
      className="select select-bordered select-sm"
      value={theme}
      onChange={(e) => setTheme(e.target.value)}
    >
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="forest">Forest</option>
      <option value="night">Night</option>
      <option value="cyberpunk">Cyberpunk</option>
    </select>
  );
}