<template>
    <div>
      <div class="container">

        <div class="row">
          <div class="col-sm-12">
            <h1>Welcome <strong>Hamoun</strong></h1>
            <div class="description">
              <p>
                Enjoy your conversation with {{guid.first_name}}
              </p>

            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-sm-12">



          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Chat",
        props: ["guid"],
        data(){
          return {
          }
        }

    }
</script>

<style scoped>

</style>
