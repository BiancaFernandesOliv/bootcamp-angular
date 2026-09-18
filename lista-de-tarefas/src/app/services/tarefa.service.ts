import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
  tarefas = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: true },
    { descricao: 'Revisar conteúdo da aula', concluida: false },
  ];

  adicionarTarefa(descricao: string) {
    if (descricao.trim() === '') {
      return;
    }

    this.tarefas.push({
      descricao: descricao,
      concluida: false
    });
  }

  removerTarefa(tarefa: any) {

    const index = this.tarefas.indexOf(tarefa);

    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }
  }

  marcarConcluida(tarefa: any) {
    tarefa.concluida = !tarefa.concluida;
  }

  contarConcluidas() {
    return this.tarefas.filter(tarefa => tarefa.concluida).length;
  }
}
