
export default class ClassTodo  {
    id = -1
    title =''
    done = false
    edit = false
    constructor(id: number,title: string){
        this.id = id;
        this.title = title;
    }
    doneSwap(){
        console.log('doneTomachin')
        this.done = !this.done;
    }
}
