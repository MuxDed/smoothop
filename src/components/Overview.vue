<template>

  <div class="vue-template">
    <div style="margin-top: 8000px">
      <div
        class="inner-block"
        v-for="(op, index) in ops"
        style="margin-top : 20px"
      >
        <!-- TODO: This should go into Operation.vue and then that instance of an operation should be 
        passed into Theatre.vue, and that instance displayed here through Theatre.vue -->
        <div class="inner-info-1">
          <h3>Room : {{ op.data.theatre_number }}</h3>
          <br />
          <p style="text-align:center">
            <b>Stage : {{ op.data.current_stage }}</b> <br />
            <b>Stage Time: {{ op.data.curr_stage_start_time }}</b
            ><br />
          </p>
        </div>
        <div class="inner-info-2">
          <div style="float: left; width: 50%;" class="inner-info-2">
            Procedure : <br />
            Category : <br />
            Anaesthetist : <br />
            Surgeon : <br />
            Registrar : <br />
            ScrubNurse : <br />
          </div>
          <div
            style="float: right; text-align: centre; width: 50%; "
            class="inner-info-2"
          >
            {{ op.data.procedure }} <br />
            {{ op.data.category }}<br />
            {{ op.data.anaesthetist }} <br />
            {{ op.data.surgeon }} <br />
            {{ op.data.registrar }} <br />
            {{ op.data.scrubNurse }} <br />
          </div>
        </div>
        <br />
        Covid : {{ op.data.isCovid }} <br />
        Delayed : {{ op.data.isDelayed }}<br />
        Patient Name : {{ op.data.patient_name }} <br />
        Patient Sex : {{ op.data.patient_sex }} <br />
        <!-- TODO Run a forloop for each comment -->
        <div style="margin-top : 20px; border:1px solid black;">
          Comments: <br />{{ op.data.comments }}
        
        <form style="margin-top : 20px;">
          <label for="comment">New Comment:</label><br />
          <input
            type="text"
            id="comment"
            name="comment"
            style="width: 80%;"
          /><br />
          <input type="submit" value="Submit" />
        </form>
        </div>

        <button
          style="margin-top : 20px;"
          @click="nextStage(index)"
          class="#prev btn btn-dark btn-block"
        >
          Next stage</button
        ><button
          style="margin-top : 20px; "
          @click="previousStage(index)"
          class="#next btn btn-dark btn-block"
        >
          Previous stage
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// TODO: This should be put into Operations.vue
//import firebase config so we can use it here
import firebase from "../fire.js";
//refer to the database at first level 'operations' this can be seen as the head node of our database
var opsRef = firebase.database().ref("/operations");
export default {
  data() {
    return {
      ops: [],
    };
  },
  methods: {
    //next stage button
    nextStage(index) {
      //get key by index
      let key = this.ops[index].key;
      //get data by index 
      let op_room = this.ops[index].data.theatre_number;
      //update current stage by 1 locally in array
      this.ops[index].data.current_stage = this.ops[index].data.current_stage + 1;
      //update database using firebase function
      opsRef
      //first child - key for access is operating theatre (1, 2, ect)
        .child(op_room)
        //second child (use -kjbbhjkcsbhjk key)
        .child(key)
        .update({
          current_stage: this.ops[index].data.current_stage,
        });
    },
  },
  mounted() {
    //make a reference to 'this' keyword, may be unnessecary but the tutorial did it
    let overviewOps = this;
    //ops ref is a reference to our database see above

    //use firebase function '.on' means will be listening at all times to our database 
    opsRef.on("value", function(snapshot) {
      var ops_list = [];
      //for each child node (1, 2, 3, 4 ect)
      snapshot.forEach(function(childSnapshot) {
        //for each child node of previous child (the keys for each operation are like -knjcjschiu )
        childSnapshot.forEach(function(opSnapshot) {
          //get key and data of this child, key is the id and data is all of the fields in each database element
          var key = opSnapshot.key;
          var data = opSnapshot.val();
          //push into list as key - value pair, we can now get all of the data for an element by using the key, or by using an index
          ops_list.push({ key: key, data: data });
        });
      });
      //save and allow it to be seen by the execution context ('this' keyword)
      overviewOps.ops = ops_list;
    });
  },
};
</script>
