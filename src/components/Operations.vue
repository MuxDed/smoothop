<template>
    <div>
        <h2>OT {{theatre_number}}</h2>
        <h2>Anaesthetist: {{Anaesthetist}}</h2>
        <h2>Category: {{Category}}</h2>
        <h2>current_stage: {{current_stage}}</h2>
        <h2>isCovid: {{isCovid}}</h2>
        <h2>isDelayed: {{isDelayed}}</h2>
        <h2>patient_name: {{patient_name}}</h2>
        <h2>procedure: {{procedure}}</h2>
        <h2>registrar: {{registrar}}</h2>
        <h2>scrubNurse: {{scrubNurse}}</h2>
        <h2>registrar: {{registrar}}</h2>
        <h2>surgeon: {{surgeon}}</h2>
    </div>
</template>

<script>
    export default{
        name: 'theatre_number',
        props: {
            Anaesthetist: String,
            category: String,
            current_stage: Number,
            //curr_stage_start_time how to make it prop?
            isCovid: Boolean,
            isDelayed: Boolean,
            patient_name: String,
            //previous_op
            procedure: String, 
            registrar: String,
            scrubNurse: String,
            surgeon: String,
            theatre_number: Number,
        },

    }
</script>