<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="create()">Create</button>
    {{specialize}}
    <input type="text" v-model="specialize" />
    <div class>
      File upload:>>
      <input type="file" @change="onFileSelected" />
    </div>
    <!-- <div v-for="node in allUserprofile.edges" v-bind:key="node.node.id">{{node.node.price}}</div> -->
    <ApolloQuery :query="require('../graphql/AllUsersProfile.gql')">
      <template slot-scope="{ result: { loading, error, data } }">
      <!-- Loading--> 
      <div v-if="loading">Query is loading.</div>

      <!-- Error -->
      <div v-else-if="error">We got an error!</div>

      <!-- Result -->
      <div v-else-if="data">
        <div v-for="node in  data.allUserprofile.edges" v-bind:key="node.node.id">{{node.node}}</div>
      </div>

      <!-- No result (if the query succeed but there's no data) -->
      <div v-else>No result from the server</div>
      </template>
    </ApolloQuery>
  </div>
</template>

<script>
// import gql from 'graphql-tag'
// import { CreateSpecialization } from '../graphql/CreateSpecialization'
// import { AllSpecialization } from '../graphql/AllSpecialization'
import { GetAllUsersProfile } from '../graphql/AllUsersProfile'
import { CreateUserProfile } from '../graphql/CreateUserProfile'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Never Give Up Ever',
      allSpecialization: '',
      allUserprofile:'',
      specialize: '',
      selectedFile: null,
      formatedFile: null
    }
  },
  apollo: {
    // allSpecialization: AllSpecialization,
    allUserprofile: GetAllUsersProfile
  },
  methods: {
    addTheFileToTheForm () {
      // let formFile = new FormData()
      // formFile.append('file', this.selectedFile, this.selectedFile.name)
      this.formatedFile = this.selectedFile 
      // this.formatedFile = this.selectedFile
      // console.log(this.formatedFile)
      // console.log(this.selectedFile)
    },
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
    },
    create () {
      this.addTheFileToTheForm()
      // Call to the graphql mutation
      this.$apollo.mutate({
        // Query
        mutation: CreateUserProfile,
        // Parameters
        variables: {
          price: 50000.0,
          isDoctor: true,
          isOnline: true,
          image: this.formatedFile
        },
        context: {
          hasUpload: true
        },
        refetchQueries: [{ query: GetAllUsersProfile }]
        // update: (store, { data: { specializationCreate } }) => {
        //   console.log(store);
        //   console.log("*************************************");
        //   console.log(specializationCreate);
        //   console.log("*************************************");
        // }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
