import React from "react"
import { defaultTheme, shortBreakTheme, longBreakTheme } from "../../AppThemes"

export default function useSessionTheme(session) {
  const [theme, setTheme] = React.useState(defaultTheme)

  React.useEffect(() => {
    if (session === "long_break") {
      setTheme(longBreakTheme)
    } else if (session === "short_break") {
      setTheme(shortBreakTheme)
    } else {
      setTheme(defaultTheme)
    }
  }, [session])

  return theme
}
