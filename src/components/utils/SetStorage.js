export default function SetStorage(item,data){
    localStorage.setItem(
        item,
        JSON.stringify(data)
      )
}