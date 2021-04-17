<template>
  <div class="vue-template">
    <div class="new-operation" style="margin-top: 7300px">
      <h2>New Operation</h2>

      <form>
        <label for="room">Room</label><br />

        <select name="room" id="room">
          <option value="">--Please select--</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <label for="category">Category</label>

        <select name="category" id="category">
          <option value="">--Please Select--</option>
          <option value="ortho">Orthopaedics</option>
          <option value="head_and_neck">Head and Neck</option>
          <option value="vascular">Vascular</option>
          <option value="neuro">Neurosurgery</option>
          <option value="cardiothor">Cardiothoracic</option>
        </select>

        <label for="anaesthetist">Anaesthetist:</label><br />
        <input type="text" id="anaesthetist" name="anaesthetist" /><br />

        <label for="surgeon">Surgeon:</label><br />
        <input type="text" id="surgeon" name="surgeon" /><br />

        <label for="registrar">Registrar:</label><br />
        <input type="text" id="registrar" name="registrar" /><br />

        <label for="scrubNurse">ScrubNurse:</label><br />
        <input type="text" id="scrubNurse" name="scrubNurse" /><br />

        <label for="covid">Covid</label><br />

        <select name="is_covid" id="covid">
          <option value="">--Please Select--</option>
          <option value="1">Yes</option>
          <option value="0">No</option>
        </select>

        <label for="pname">Patient Name:</label><br />
        <input type="text" id="pname" name="pname" /><br />

        <label for="psex">Patient Sex</label>

        <select name="p_sex" id="psex">
          <option value="">--Please Select--</option>
          <option value="f">F</option>
          <option value="m">M</option>
        </select>
        <input
          type="submit"
          value="Submit"
          style="margin-top : 20px; float: right;"
          @click="newOp(index)"
          class="button"
        />
      </form>
    </div>
    <div style="margin-top: 7300px">
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
        <div>
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
            class="inner-info-3"
          >
            {{ op.data.procedure }} <br />
            {{ op.data.category }}<br />
            {{ op.data.anaesthetist }} <br />
            {{ op.data.surgeon }} <br />
            {{ op.data.registrar }} <br />
            {{ op.data.scrubNurse }} <br />
          </div>
        </div>
        <div>
          <div style="float: left; width: 50%;" class="inner-info-4">
            Covid : <br />
            Delayed : <br />
            Patient Name :<br />
            Patient Sex : <br />
            <br />
          </div>
          <div
            style="float: right; text-align: centre; width: 50%;"
            class="inner-info-5"
          >
            {{ op.data.isCovid }} <br />
            {{ op.data.isDelayed }}<br />
            {{ op.data.patient_name }} <br />
            {{ op.data.patient_sex }} <br />
            <br />
          </div>
        </div>

        <!-- TODO Run a forloop for each comment -->
        <div
          style="margin-top : 300px; border:1px ridge grey; padding: 5px 15px 10px 15px; border-radius: 15px;"
        >
          Comments: <br />
          {{ op.data.comments }}

          <form style="margin-top : 20px;">
            <label for="comment">New Comment:</label><br />
            <input
              type="text"
              id="comment"
              name="comment"
              style="width: 80%;"
            />
            <input type="submit" value="Submit" class="button" />
          </form>
        </div>
        <button
          style="margin-top : 20px;"
          @click="prevStage(index)"
          class=" button"
        >
          << Previous stage
        </button>
        <button
          style="margin-top : 20px; margin-left : 45px;"
          @click="toggleDelay(index)"
          class=" button"
        >
          Toggle Delay
        </button>
        <button
          style="margin-top : 20px; float: right;"
          @click="nextStage(index)"
          class="button"
        >
          Next stage >>
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
      if (this.ops[index].data.current_stage < 5) {
        this.ops[index].data.current_stage =
          this.ops[index].data.current_stage + 1;
        // ATTEMPT AT MAKING TIMER
        // var start = Date.now();
        // setInterval(function() {
        // var delta = Date.now() - start; // milliseconds elapsed since start
        // console.log(new Date().toUTCString());
        // }, 1000); // update about every second
      }
      //update database using firebase function
      opsRef
        //first child - key for access is operating theatre (1, 2, ect)
        .child(op_room)
        //second child (key)
        .child(key)
        .update({
          current_stage: this.ops[index].data.current_stage,
        });
    },
    // Previous Stage Button
    prevStage(index) {
      let key = this.ops[index].key;
      let op_room = this.ops[index].data.theatre_number;
      if (this.ops[index].data.current_stage > 0) {
        this.ops[index].data.current_stage =
          this.ops[index].data.current_stage - 1;
      }
      opsRef
        .child(op_room)
        .child(key)
        .update({
          current_stage: this.ops[index].data.current_stage,
        });
    },
    toggleDelay(index) {
      let key = this.ops[index].key;
      let op_room = this.ops[index].data.theatre_number;
      if (this.ops[index].data.isDelayed == 0) {
        this.ops[index].data.isDelayed = this.ops[index].data.isDelayed + 1;
      } else if (this.ops[index].data.isDelayed == 1) {
        this.ops[index].data.isDelayed = this.ops[index].data.isDelayed - 1;
      }
      opsRef
        .child(op_room)
        .child(key)
        .update({
          current_stage: this.ops[index].data.current_stage,
        });
    },
  },
  mounted() {
    //make a reference to 'this' keyword
    let overviewOps = this;
    //ops ref is a reference to our database, see above
    //use firebase function '.on' to listen to database at all times
    opsRef.on("value", function(snapshot) {
      var ops_list = [];
      //for each child node (1, 2, 3, 4 ect)
      snapshot.forEach(function(childSnapshot) {
        //for each child node of previous child (keys)
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
