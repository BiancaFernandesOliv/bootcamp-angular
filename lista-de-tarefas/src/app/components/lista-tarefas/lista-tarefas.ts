import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TarefaService } from '../../services/tarefa.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'app-lista-tarefas',
  styleUrl: './lista-tarefas.css',
  templateUrl: './lista-tarefas.html',
})
export class ListaTarefas {

  formItem = new FormGroup({
    nome: new FormControl('', Validators.required)
  });
  constructor(public tarefaService: TarefaService) { }

  enviar() {
    const nome = this.formItem.get('nome')?.value;

    if (!nome) {
      return;
    }

    this.tarefaService.adicionarTarefa(nome);

    this.formItem.reset();
  }

}
