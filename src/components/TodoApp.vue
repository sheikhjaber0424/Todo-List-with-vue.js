<template>
<div class="container">
<h2 class="text-center mt-5">My Vue Todo-List</h2>
    <div class="d-flex">
        <input v-model="addTask" type="text" placeholder="Enter task" class="form-control">
        <button  @click="submitTask" class="btn btn-warning rounded-0">SUBMIT</button>
    </div>


    <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Task</th>
      <th scope="col">Status</th>
      <th scope="col" class="text-center">#</th>
      <th scope="col" class="text-center">#</th>
    </tr>
  </thead>
  <tbody>

    <tr v-for="(task,index) in tasks" :key="index">

      <td :class="{'finished' : task.status ==='finished'}">{{ task.name }}</td>
       <td style="width :20%"> 
          <span  @click="changeStatus(index)" class="spa"
          :class="{'text-danger' : task.status ==='to-do',
                    'text-warning' : task.status ==='in-progress', 
                    'text-success' : task.status ==='finished', 
          }"
          >
              {{ task.status }}
          </span>
       </td>
      <td>
        <div @click="taskEdit(index)" class="text-center">
       <span> <fa icon="pen"/> </span>
      </div>
      </td>
      <td>
        <div @click="deleteTask(index)" class="text-center" >
       <span> <fa icon="trash"/> </span>
      </div>
      </td>
      
    </tr>

  </tbody>
</table>




</div>
  
</template>

<script>

export default {
  data(){
    return{


      addTask: '',
      editTaskIndex: null,
      statusList : ['to-do','in-prgress','finished'],
      tasks: [
        {
            name :'Cycling',
            status : 'to-do'
        },
        {
            name :'Study',
            status : 'to-do'
        },
        {
            name :'Shopping',
            status : 'to-do'
        }
        
      ]
    }
  },
  methods: {
    submitTask(){

   console.log(this.editTaskIndex)

   if(this.editTaskIndex ===null){
      if(this.addTask.length!=0 )
      {
        this.tasks.push({
          name: this.addTask,
          status :'to-do',
          
        })
        console.log('taskadded')
      }
   }
      
      else 
      {
        this.tasks[this.editTaskIndex].name = this.addTask
        this.editTaskIndex= null
        console.log('entered else')
       
      }

    
    
    
      this.addTask = ''
      console.log('cleared outside')
    },

    deleteTask(index){
      this.tasks.splice(index,1)
    },

    taskEdit(index){
      this.addTask = this.tasks[index].name,
      
      this.editTaskIndex = index
      console.log(this.editTaskIndex)
    },

   changeStatus(index){
      
      let newIndex = this.statusList.indexOf(this.tasks[index].status)
      if(++newIndex > 2)
      {
        newIndex = 0 
      }
      console.log(this.statusList[newIndex])
      this.tasks[index].status = this.statusList[newIndex]

    }
  }

}
</script>

<style>

.spa{
  cursor: pointer;
}

.finished{
  text-decoration: line-through;
}

</style>