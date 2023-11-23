// remove Special Characters And Replace Spaces
export function sanitizedString(text: string) {
    // Use a regular expression to match special characters and spaces
    const regex = /[^a-zA-Z0-9\s]/g;
  
    // Replace special characters with an empty string and spaces with hyphens
    const sanitizedString = text.replace(regex, '').replace(/\s+/g, '-');
  
    return sanitizedString;
}

export function getCurrentDateTime() {
    const now = new Date();

    // Get the date components
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');

    // Get the time components
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Assemble the date-time string
    const dateTimeString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

    return dateTimeString;
}


export function evaluatedDate(type: 'compare' | 'display', inputDate: any = '') {
    const dateObj = inputDate ? new Date(inputDate) : new Date();
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Months are zero-based, so we add 1
    const day = String(dateObj.getDate()).padStart(2, '0');

    if (type == "display") {
      return `${ year }-${ month }-${ day }`;
    }
  
    if (type == "compare") {
      return `${ year }${ month }${ day }`;
    }

    return `${ year }-${ month }-${ day }`;
};

export function formatedTime(inputDate: any = '') {
    const now = inputDate ? new Date(inputDate) : new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return formattedTime;
}


// THE FOLLOWING FUNCTIONS ARE USED FOR LOCAL STORAGE
export async function setLocalStorage(storageKey: string, value: any) {
    const encryptedvalue = btoa(escape(JSON.stringify(value)))
    return await localStorage.setItem(storageKey, encryptedvalue);
}

export async function getLocalStorage(storageKey:string) {
    return new Promise((resolve)=>{
        const localData = localStorage.getItem(storageKey);
        if (localData) {
            resolve(JSON.parse(unescape(atob(localData))));
        } else {
            resolve(false);
        }
    })
}

export async function removeLocalStorageItem(storageKey:string) {
    await localStorage.removeItem(storageKey);
}
  
export async function clearLocalStorage() {
    await localStorage.clear();
}


// THE FOLLOWING FUNCTIONS ARE USED FOR SESSION STORAGE
export async function setSessionStorage(storageKey: string, value: any) {
    const encryptedvalue = btoa(escape(JSON.stringify(value)))
    return await sessionStorage.setItem(storageKey, encryptedvalue);
}

export function getSessionStorage(storageKey: string) {
    return new Promise((resolve)=>{
        const localData = sessionStorage.getItem(storageKey);
        if (localData) {
            resolve(JSON.parse(unescape(atob(localData))));
        } else {
            resolve(false);
        }
    })
}

export async function removeSessionStorageItem(storageKey:string) {
    await sessionStorage.removeItem(storageKey);
}
 
export async function clearSessionStorage() {
    await sessionStorage.clear();
}
