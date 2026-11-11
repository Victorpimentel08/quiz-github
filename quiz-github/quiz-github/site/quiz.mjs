export const questions = [
  { prompt: 'Para que serve uma issue?', options: ['Registrar uma tarefa ou problema', 'Publicar um site', 'Executar um commit'], correct: 0 },
  { prompt: 'O que é uma branch?', options: ['Uma conta de usuário', 'Uma linha de desenvolvimento', 'Um relatório de testes'], correct: 1 },
  { prompt: 'O que um commit registra?', options: ['Uma publicação no Pages', 'Um pedido de revisão', 'Um conjunto de alterações no histórico'], correct: 2 },
  { prompt: 'Para que serve um pull request?', options: ['Propor e revisar alterações antes do merge', 'Excluir o histórico', 'Criar um domínio'], correct: 0 },
  { prompt: 'O que pode rodar testes automaticamente no GitHub?', options: ['GitHub Pages', 'GitHub Actions', 'GitHub Issues'], correct: 1 },
];

export function score(answers) {
  return questions.filter((question, index) => question.correct === answers[index]).length;
}
