<template>
  <div class="vue-template">
    <div>
      <button @click="onClick()" class="btn btn-dark btn-lg btn-block">
        Set up daily schedule
      </button>
    </div>
    <div class="inner-block">
      <li v-for="op in ops" :key="op.category">
     hi
      </li>
    </div>
  </div>
</template>

<script>
import firebase from "../fire.js";
export default {
  data() {
    return {
      ops: [],
    };
  },
  methods: {
    onClick() {
      console.log("hello");
    },
    getData() {
      var ops_list = [];
      var opsRef = firebase.database().ref("/operations");
      console.log(opsRef);
      opsRef.once("value", function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          childSnapshot.forEach(function(opSnapshot) {
            var key = opSnapshot.key;
            var data = opSnapshot.val();
            ops_list.push(data);
          });
        });
        //this.ops = ops_list;
        console.log(ops_list);
        return ops_list
      });
    },
  },
  mounted() {
    let lst = this.getData();
    this.ops = lst
    console.log('fuuuuu ' + this.ops)
  },
};
</script>
