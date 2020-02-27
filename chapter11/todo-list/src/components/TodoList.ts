import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import { Watch } from 'vue-property-decorator';
// import './TodoList.css';

interface ITodoItem {
  completed: boolean;
  task: string;
  createdAt: number;
}

@WithRender
@Component
export default class TodoList extends Vue {
  private task: string = '';
  private todoItems: ITodoItem[] = [];

  private addItem() {
    console.log('NEW1');

    if (!this.task) {
      console.log('NEW2');

      alert('할 일을 입력해주세요');
      return;
    }

    this.todoItems.push({
      completed: false,
      task: this.task,
      createdAt: new Date().getTime(),
    });

    this.task = '';
  }

  private removeItem(index: number) {
    this.todoItems.splice(index, 1);
  }
}
