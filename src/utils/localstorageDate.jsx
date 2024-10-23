export function getLocalStorageData(key, defaultValue = null) {
    const localData = localStorage.getItem(key)
    return (localData == null) ? defaultValue : JSON.parse(localData);
}

export function setLocalStorageData(key, data) {
    localStorage.setItem(key, JSON.stringify(data))
}