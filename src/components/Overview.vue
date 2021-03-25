<template>
  <div class="vue-template">
    <center>
      <div style="margin-top: 4500px">
        <div
          class="inner-block"
          v-for="(op, index) in ops"
          style="margin-top : 20px"
        >
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

          <button @click="nextStage(index)" class="btn btn-dark btn-block">
            Next stage
          </button>
        </div>
      </div>
    </center>
  </div>
</template>

<script>
import firebase from "../fire.js";
var opsRef = firebase.database().ref("/operations");
export default {
  data() {
    return {
      ops: [],
    };
  },
  methods: {
    nextStage(index) {
      console.log("hello");
      let key = this.ops[index].key
      this.ops[index].data.current_stage = this.ops[index].data.current_stage + 1
      
      // opsRef.child(index).child(key).update({
      //   isDelayed: '1'
      // });
    //   var x = firebase.database().ref("operations/1/" + key).key;
    //   console.log('why ' + x)
    //  // var database = firebase.database()
    //   console.log('heeey '+ opsRef.child(index).child(key).key)
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
          ops_list.push({ key: key, data: data});
        });
      });
      console.log(ops_list);
      let x = ops_list[0].data.current_stage
      console.log('check ths  ' + x)
      overviewOps.ops = ops_list;
    });
  },
};
</script>
