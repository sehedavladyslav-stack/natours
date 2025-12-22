import fs from 'fs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config({ path: './config.env' });
import Tour from '../../models/tourModel.js';

import { join } from 'path';

const toursPath = process.env.TOURS_DATA_PATH
  ? join(process.cwd(), process.env.TOURS_DATA_PATH)
  : join(process.cwd(), 'dev-data', 'data', 'tours.json');

const db = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(db).then(() => console.log('DB connection successful'));

// Read JSON file
const tours = JSON.parse(fs.readFileSync(toursPath, 'utf-8'));

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully loaded');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

// Delete all Data from DB
const deleteDate = async () => {
  try {
    await Tour.deleteMany();
    console.log('Data successfully deleted');
  } catch (error) {
    console.log(error);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteDate();
}
