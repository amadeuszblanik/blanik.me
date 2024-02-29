const util = (camelCase: string): string => camelCase.replace(/[A-Z]/g, (chat) => `-${chat.toLowerCase()}`);

export default util;
