const app = {

    // this is the hardcoded data that the application starts with 

    data() {
      return {
        title: "Inventory App",
        newProduct: "",
        products: [
          {
            id: 0,
            name: "PLaystation 5",
            qty: 3,
          },
          {
            id: 1,
            name: "XBox 1 S",
            qty: 5,
          },
        ],
      };
    },
    computed: {
        //here we have a for loop to take the sum of the products
        // this sets the sum in the top of the app
      total() {
        let sum = 0;
        this.products.forEach((product) => {
          sum += product.qty;
        });
        return sum;
      },
    },

    // this adds the new product to the inventory and 
    //sets the initial quantity to 0
    methods: {
      addProduct() {
        if (this.newProduct.length > 0) {
          this.products.push({
            id: new Date().toISOString,
            name: this.newProduct,
            qty: 0,
          });
          this.newProduct = "";
        }
      },
    },
  };
  
  Vue.createApp(app).mount("#app");