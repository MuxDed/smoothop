<template>
  <div class="vue-template">
    <div style="margin-top: 6000px">
      <div
        class="inner-block"
        v-for="(op, index) in ops"
        style="margin-top : 20px"
      >
        <!-- This should go into Operation.vue and then that instance of an operation should be 
        passed into Theatre.vue, and that instance displayed here through Theatre.vue -->
        Room : {{ op.data.theatre_number }}<br />
        Current stage : {{ op.data.current_stage }} <br />
        Anaesthetist : {{ op.data.anaesthetist }} <br />
        Current stage time : {{ op.data.curr_stage_start_time }}<br />
        Category : {{ op.data.category }}<br />
        Covid : {{ op.data.isCovid }} <br />
        Delayed : {{ op.data.isDelayed }}<br />
        Patient name : {{ op.data.patient_name }}<br />
        Procedure : {{ op.data.procedure }} <br />
        Registrar : {{ op.data.registrar }} <br />
        ScrubNurse : {{ op.data.scrubNurse }} <br />
        Surgeon : {{ op.data.surgeon }} <br />
        <div style="margin-top : 20px">Comments: {{ op.data.comments }}</div>

        <button @click="nextStage(index)" class="btn btn-dark btn-block">
          Next stage
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// This should be put into Operations.vue
import firebase from "../fire.js";
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
      index = index + 1; // operations start from 1
      let key = this.ops[index].key;
      this.ops[index].data.current_stage =
        this.ops[index].data.current_stage + 1;
      console.log(index);
      console.log(opsRef.child(index).child(key).key);
      opsRef
        .child(index)
        .child(key)
        .update({
          current_stage: this.ops[index].data.current_stage,
        });
      // var x = firebase.database().ref("operations/1/" + key).key;
      //   console.log('why ' + x)
      // var database = firebase.database()
      //  console.log('heeey '+ opsRef.child(index).child(key).key)
    },
  },
  mounted() {
    let overviewOps = this;
    console.log(opsRef);
    opsRef.on("value", function(snapshot) {
      var ops_list = [];
      snapshot.forEach(function(childSnapshot) {
        childSnapshot.forEach(function(opSnapshot) {
          var key = opSnapshot.key;
          var data = opSnapshot.val();
          ops_list.push({ key: key, data: data });
        });
      });
      console.log(ops_list);
      let x = ops_list[0].data.current_stage;
      console.log("check ths  " + x);
      overviewOps.ops = ops_list;
    });
  },
};
</script>
