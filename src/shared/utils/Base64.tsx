export const base64Code = (list: FileList | undefined) => {
  if (list === undefined) return;
  const file = list[0];
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });
};
