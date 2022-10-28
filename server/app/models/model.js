module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      make: String,
      model: String,
      package: String,
      color: String,
      year: String,
      category: String,
      mileage: String,
      price: String,
      id : String

    },
    { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    return object;
  });

  const Cars = mongoose.model("cars", schema);
  return Cars;
};
