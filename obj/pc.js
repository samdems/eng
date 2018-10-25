module.exports = {
  get(name) {
    return db.get('pcs')
      .find({ name })
      .value()
  }
};
