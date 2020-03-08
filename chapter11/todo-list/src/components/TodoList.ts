import { Vue, Component, Watch } from 'vue-property-decorator';
import WithRender from './TodoList.html';
import TodoListItem from './TodoListItem';
import getConfig from '@/_config';
// import './TodoList.css';
import axios, { AxiosResponse } from 'axios';

export interface ITodo {
  id: string;
  isCompleted: boolean;
  task: string;
  deleteAt: number;
  createdAt: string;
}

@WithRender
@Component({
  components: {
    TodoListItem,
  },
})
export default class TodoList extends Vue {
  private task: string = '';
  private todoItems: ITodo[] = [];
  private apiUrl: string = '';

  private created() {
    this.apiUrl = getConfig().apiUrl;
    this.loadData();
  }

  private async addItem() {
    if (!this.task) {
      alert('할 일을 입력해주세요');
      return;
    }

    const data = {
      task: this.task
    };

    const res = await axios.post(this.apiUrl + 'todo', data);

    if (res.data.result) {
      this.loadData();
      this.task = '';
    } else {
      throw new Error('등록 오류');
    }
  }

  private async loadData() {
    const res: AxiosResponse = await axios.get(this.apiUrl + 'todos');
    this.todoItems = res.data.data.Items;
  }

  private async removeItem(id: string) {
    const res = await axios.delete(this.apiUrl + 'todo/' + id);

    if (res.data.result) {
      const index = this.todoItems.findIndex((item: ITodo) => {
        return item.id === id;
      });

      this.todoItems.splice(index, 1);
    }
  }

  private async updateItem(id: string, updates: object) {
    const data = {
      id,
      updates
    };

    await axios.patch(this.apiUrl + 'todo', data);
    this.loadData();
  }

  get todoItemList(): ITodo[] {
    return this.todoItems;
  }
}