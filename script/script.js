var inp = $('.header__input'),
    addBtn = $('.add-btn'),
    todo = $('.todos'),
    todoRemove = $('.todo-item__control'),
    todoItem = $('.todo-item'),
    localArray = [];
function _addTodoItem(localArray) {
    todo.empty();
    localArray.map((item,id)=>todo.append('<div class="todo-item" id = "'+ id +'"><div class="todo-item__text">' + item + '</div><div class="todo-item__control">  X</div></div>'))
}
$(document).ready(function(){
    if(!localStorage.getItem('save')){
        localStorage.setItem('save');
    }
    else{
    localArray = JSON.parse(localStorage.getItem('save'));
    }
    _addTodoItem(localArray);
})
inp.on('keypress',function(e){
    if(e.key === 'Enter' && inp.val().length >= 1){
        localArray.push(inp.val());
        console.log(localArray);
        localStorage.setItem('save', JSON.stringify(localArray));
        _addTodoItem(localArray);
        inp.val('');
    }
})
addBtn.on('click',function(){
    if(inp.val().length >= 1){
        localArray.push(inp.val());
        localStorage.setItem('save', JSON.stringify(localArray));
        _addTodoItem(localArray);
        inp.val('');
    }

})

todo.on('click','.todo-item__control' , function(){
let outArray = JSON.parse(localStorage.getItem('save'));
    let removeId  =  $(this).parent('.todo-item').attr('id');
    localArray.splice(removeId,1);
    _addTodoItem(localArray);
    localStorage.setItem('save', JSON.stringify(localArray));
})
