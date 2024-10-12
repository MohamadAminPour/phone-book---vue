Vue.createApp({
  data() {
    return {
      activeDisplay: "showUser",
      i: 1,
      contacts: [],
      newContact: {id:Math.floor(Math.random()*100000) ,name: "", phone: "" },
      search:""
    };
  },
  methods: {
    changeDisplay(display) {
      this.activeDisplay = display;
    },
    addUser() {
      this.contacts.push(this.newContact);
      console.log(this.newContact.id);
      this.newContact = {};
      this.activeDisplay = "showUser";
      
    },

    deleteContact(ID){
      if(confirm("Are you sure for delete contact ?")){
        this.contacts = this.contacts.filter(contact => contact.id !== ID)
      }

    }
  },
  computed:{
    getContact(){
      if(this.search == ""){
        return [];
      }

      return this.contacts.filter(contact=> contact.name.includes(this.search))
    }
  }
}).mount(".tabMenu");
