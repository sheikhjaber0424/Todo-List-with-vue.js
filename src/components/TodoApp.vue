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

      <td >{{ task.name }}</td>
      <td>{{ task.status }}</td>
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

   
      if(this.addTask.length!=0 )
      {
        this.tasks.push({
          name: this.addTask,
          status :'to-do',
          
        })
        console.log('taskadded')
      }
  
      
     
    
    
    
      this.addTask = ''
      console.log('cleared outside')
    },

    deleteTask(index){
      this.tasks.splice(index,1)
    },


  }

}
</script>

<style>

</style>