const STORAGE_THEME_ITEM_NAME = 'union-app-theme';
const STORAGE_LANGUAGE_ITEM_NAME = 'union-app-language';

export function themeOnLoad() {
    const theme = localStorage.getItem(STORAGE_THEME_ITEM_NAME);
    theme && document.body.classList.add(theme);
}

export function toggleTheme() {
    document.body.classList.remove('dark', 'light');
    const theme = localStorage.getItem(STORAGE_THEME_ITEM_NAME);

    if (theme && theme === 'dark') {
        document.body.classList.add('light');
        localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'light');
        return;
    }

    if (theme && theme === 'light') {
        document.body.classList.add('dark');
        localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'dark');
        return;
    }

    document.body.classList.add('dark');
    localStorage.setItem(STORAGE_THEME_ITEM_NAME, 'dark');
}

export const toggleLanguage = () => {
    document.body.classList.remove('ru', 'en');
    const language = localStorage.getItem(STORAGE_LANGUAGE_ITEM_NAME);

    if (language && language === 'ru') {
        document.body.classList.add('en');
        localStorage.setItem(STORAGE_LANGUAGE_ITEM_NAME, 'en');
        return;
    }

    if (language && language === 'en') {
        document.body.classList.add('ru');
        localStorage.setItem(STORAGE_LANGUAGE_ITEM_NAME, 'ru');
        return;
    }

    document.body.classList.add('ru');
    localStorage.setItem(STORAGE_LANGUAGE_ITEM_NAME, 'ru');
};

export const languageOnLoad = () => {
    const language = localStorage.getItem(STORAGE_LANGUAGE_ITEM_NAME);
    language && document.body.classList.add(language);
};
