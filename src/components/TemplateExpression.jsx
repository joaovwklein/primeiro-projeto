const TemplateExpression = () => {
    let nome = "Jony Klein"
    let aluno = {
        nome:"Gregory Dengoso",
        turma:"A",
        ano:"2",
    }
    
    return (
        <div>
            <h1>Olá {nome}</h1>
            <h2>O aluno {aluno.nome} está no {aluno.ano}° ano, na turma {aluno.turma}</h2>
        </div>
    )
}

export default TemplateExpression