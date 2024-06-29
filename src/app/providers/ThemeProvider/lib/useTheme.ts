import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, ThemContext, Theme } from "./ThemeContext"

interface UseThemeResult {
	toggleThem: () => void,
	theme: Theme,
}

export const useTheme = ():UseThemeResult => {
	const {theme, setTheme} = useContext(ThemContext)

	const toggleThem = () => {
		const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
		setTheme(newTheme)
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
	}

	return {theme, toggleThem}

}