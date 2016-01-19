(function() {
  
  var people = {
    people: ['Will', 'John'],
    init: function init(){
      this.cacheDom();
      this.bindEvents();
      this.render();
    },
    cacheDom: function cacheDom(){
      this.$el = $('#peopleModule');
      this.$button = this.$el.find('button');
      this.$input = this.$el.find('input');
      this.$ul = this.$el.find('ul');
      this.template = this.$el.find('#people-template').html();
    },
    bindEvents: function bindEvents(){
      this.$button.on('click', this.addPerson.bind(this));
    },
    render: function render(){
      var data = {
        people: this.people
      };
      this.$ul.html(Mustache.render(this.template, data));
    },
    addPerson: function addPerson(){
      this.people.push(this.$input.val());
      this.render();
    }
    
  };

  people.init();

})();

// 
//   
//   var people = [];
//   var template = $('#people-template').html();
//   
//   $('#peopleModule').find('button').on('click', function () {
// 
//     people.push($('#peopleModule').find('input').val());
//   
//     // data for mustache template
//     var data = {
//       people: people,
//     };
// 
//     $('#peopleModule').find('ul').html(Mustache.render(template, data));
// 
//   });
// 
//   $('#peopleModule').find('ul').delegate('i.del', 'click', function (e) {
// 
//     var $remove = $(e.target).closest('li');
//     var i = $('#peopleModule').find('ul').find('li').index($remove);
// 
//     $remove.remove();
// 
//     people.splice(i, 1);
// 
//   });
//   
// 



// // object literal
// var myModule = {
//   name: 'Will',
//   age: 34,
//   sayName: function(){
//     alert(this.name);
//   },
//   setName: function(newName){
//     this.name = newName;
//   }
// };
// 
// myModule.setName('Alper');
// myModule.sayName();
// 
// // I can hack this with like --> myModule.name = 'Something';