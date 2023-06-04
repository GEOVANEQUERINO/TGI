function checkBoxes()
{
  var html = '';
  let checkbox = document.getElementById("compra")
  if(checkbox.checked){
    let trocar = document.getElementById("selectBox")
    html = `
    <input type="checkbox" id="Interesse" name="Insulfilm" value="insulfilme">
    <label for="interesse">Insulfilme</label>
    <br>
    <input type="checkbox" id="Interesse" name="players" value="players">
    <label for="interesse">Multimidia/Players</label>
    <br>
    <input type="checkbox" id="Interesse" name="alarme" value="alarme">
    <label for="interesse">Alarmes/Travas/Segurança</label>
    <br>
    <input type="checkbox" id="Interesse" name="seguro" value="seguro">
    <label for="interesse">Seguro</label>
    <br>
    
    `
   trocar.innerHTML = html;
  }
}