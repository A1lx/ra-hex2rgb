export function validHex(str: string): boolean {
  return /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(str);
}

export function hex2rgb(c: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(c);
  return result ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})` : 'ошибка';
}