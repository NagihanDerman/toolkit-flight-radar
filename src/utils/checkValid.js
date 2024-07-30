// Değer tanımsızsa bilinmiyor, tanımlıysa değeri döndüren fonksiyon
const checkValid = (value) => {
  return !value ? "unknown" : value;
};

export default checkValid;
