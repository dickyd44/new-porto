import { SunIcon, MoonIcon } from "@/src/assets/icon/icon-theme";
import { useTheme } from "@/src/store/theme";

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-galaxy_core text-white hover:bg-galaxy transition-colors duration-300"
      aria-label="Toggle theme"
    >
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
