const telefone = prompt("Digite seu telefone: ");
const mensagem = prompt("Digita sua mensagem: ");

let link = "api.whatsapp.com/send?phone=SeuNúmero&text=SuaMensagem";

console.log(`api.whatsapp.com/send?phone=${telefone}&text=${mensagem}`);
