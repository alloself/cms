const STORAGE_THEME_ITEM_NAME = 'app-theme'

export function toggleTheme() {
    document.body.classList.remove('dark', 'light')
    const theme = localStorage.getItem(STORAGE_THEME_ITEM_NAME)

    if (theme && theme === 'dark') {
        document.body.classList.add('light')
        localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'light')
        return
    }

    if (theme && theme === 'light') {
        document.body.classList.add('dark')
        localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'dark')
        return
    }

    document.body.classList.add('dark')
    localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'dark')
}

export function themeOnLoad() {
    const theme = localStorage.getItem(STORAGE_THEME_ITEM_NAME)
    if (theme) {
        document.body.classList.add(theme)
    }
}
