export type Theme = "light" | "dark"

export const THEME_STORAGE_KEY = "theme"

/**
 * Runs in <head> before the first paint. Without it the server sends markup
 * with no `dark` class, so a dark-mode visitor gets a white flash until
 * hydration swaps it. Keep it dependency-free and synchronous.
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k="${THEME_STORAGE_KEY}",s=localStorage.getItem(k),d=s?s==="dark":matchMedia("(prefers-color-scheme: dark)").matches,r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light"}catch(e){}})()`

export const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light"

export const applyTheme = (theme: Theme) => {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // storage unavailable (private mode) — theme still applies for this session
  }
}
