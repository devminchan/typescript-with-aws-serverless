import { Vue, Component, Prop } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import { Watch } from 'vue-property-decorator';
import TodoListItem from './TodoListItem';
// import './TodoList.css';

export interface ITodoItem {
  completed: boolean;
  task: string;
  createdAt: number;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  private task: string = '';
  private todoItems: ITodoItem[] = [];

  private addItem() {
    if (!this.task) {
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