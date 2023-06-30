var agora = new Date();
var hora = agora.getHours();
var min = agora.getMinutes();
var s = agora.getSeconds();
var day = agora.getDate(); // Em vez de getDay() para obter o dia do mês
var mes = agora.getMonth() + 1; // Os meses são baseados em zero, então é necessário adicionar 1
var ano = agora.getFullYear();

console.log(`São exatamente: ${hora} horas, ${min} minutos e ${s} segundos`)
console.log(`Do dia ${day}, do mês ${mes}, de ${ano}.`)

