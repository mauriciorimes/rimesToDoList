const inpItem = document.querySelector("#inpItem");
const btnCriarTarefa = document.querySelector("#btnCriarTarefa");
const ulTarefas = document.querySelector("#ulTarefas");

btnCriarTarefa.addEventListener("click", (e) => {
  let inp = inpItem.value;
  let li = document.createElement("li");

  li.innerText = inp;  
  ulTarefas.appendChild(li);

  let btnExcluirTarefa = document.createElement("button");
  btnExcluirTarefa.textContent = `Excluir tarefa`;  
  li.appendChild(btnExcluirTarefa);

  btnExcluirTarefa.addEventListener("click", (e) => {
    ulTarefas.removeChild(li);
  });

  limpaInput(); 
  
});

function limpaInput() {
  inpItem.value = ``;
}
