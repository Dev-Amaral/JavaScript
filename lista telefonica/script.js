function adicionar(){
    let num =prompt("Insira a quantidade de contatos:")
    let nome = Array(num)
    let numero= Array(num)
    for(let i=0; i<num; i++){
    nome[i]= prompt(`Insira o nome do ${i+1}º contato`)
    numero[i] = prompt(`Insira o número de ${nome[i]}`)        
}
document.write(`
        <link rel="stylesheet" href="style.css">
    <h1> Lista telefônica</h1>`)
document.write(`<table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>`)
for(let i=0; i<num; i++){
    document.write(`    
            <tr>
                <td>${nome[i]}</td>
                <td>${numero[i]}</td>
            </tr>`)
}
document.write(`
    </tbody>
    </table>`)
}
