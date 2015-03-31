import Ember from "ember";

export default Ember.Route.extend({
  model: function(param) {
  
    var model1 = {
    	imgUrl: 'assets/images/' + param.image_id + '_1.png'
    };

    var model2 = {
    	imgUrl: 'assets/images/' + param.image_id + '_2.png'
    };

    var model3 = {
    	imgUrl: 'assets/images/' + param.image_id + '_3.png',
        priority: true
    };

    var models = {
    	id: param.test_id,
    	photos: [model1, model2, model3]
    };

    return models;
  }
});
