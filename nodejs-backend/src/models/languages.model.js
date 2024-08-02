
    module.exports = function (app) {
        const modelName = 'languages';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            name: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
types: { type: String, required: false , enum: ["Angeric","Badwin","Charlo"] },
countries: { type: Schema.Types.Mixed, required: false, default: {"0":"Angeric","1":"Badwin","2":"Charlo"} },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };