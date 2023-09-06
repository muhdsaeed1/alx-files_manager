const { MongoClient } = require('mongodb');

class DBClient {
  constructor() {
    const host = process.env.DB_HOST || 'localhost';
    const port = process.env.DB_PORT || 27017;
    const database = process.env.DB_DATABASE || 'files_manager';
    const url = `mongodb://${host}:${port}`;

    this.client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    this.connect();
  }

  async connect() {
    try {
      await this.client.connect();
      this.db = this.client.db();
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      this.db = null;
    }
  }
}

module.exports = new DBClient();
