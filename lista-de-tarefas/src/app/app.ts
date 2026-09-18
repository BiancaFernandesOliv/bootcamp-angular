import { Component, signal } from '@angular/core';
import { ListaTarefas } from './components/lista-tarefas/lista-tarefas';

@Component({
  imports: [ListaTarefas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('lista-tarefas');
}
