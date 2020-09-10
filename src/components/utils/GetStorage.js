export default function GetStorage(data) {
  return JSON.parse(localStorage.getItem(data))
}
