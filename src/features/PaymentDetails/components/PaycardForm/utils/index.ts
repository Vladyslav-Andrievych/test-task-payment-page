export const validateFormField = (
  value: string,
  fieldName: 'cardNumber' | 'expirationDate' | 'cvc',
): string | null => {
  switch (fieldName) {
    case 'cardNumber':
      return value
        .replace(/[^\dA-Z]/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim();
    case 'expirationDate':
      return value
        .replace(/[^\dA-Z]/g, '')
        .replace(/(.{2})/g, '$1/')
        .trim();
    case 'cvc':
      return value.replace(/[^\dA-Z]/g, '').trim();
    default:
      return null;
  }
};

export const checkExapirationDate = (value: string): boolean => {
  const [month, year] = value
    .split('/')
    .map((val, index) => (index === 0 ? Number(val) : Number('20' + val)));

  const today = new Date();
  const currentMonth = today.getMonth() + 1;
  const currentYear = today.getFullYear();

  if (currentYear > year) return false;
  if (month > 12 || currentMonth > month) return false;

  return true;
};
