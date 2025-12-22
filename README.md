# Natours (Starter)

Natours is the backend for a travel/tours application used in the "Complete Node.js Bootcamp" course. This starter contains Express routes, Mongoose models, authentication, image handling and common production-ready middleware.

## Features
- User authentication & authorization (JWT)
- Tours: create, read, update, delete
- Filtering, sorting, field limiting, pagination
- Reviews tied to tours (nested routes)
- Image upload & processing (Multer + Sharp)
- Email utilities (Nodemailer)
- Security middleware: rate limiting, helmet, data sanitization
- Error handling and logging

## Tech stack
- Node.js, Express
- MongoDB (Mongoose)
- JWT, bcrypt
- Multer, Sharp
- Nodemailer
- dotenv

## Requirements
- Node.js v16+
- npm or yarn
- MongoDB (local or Atlas)

## Quick setup (Windows)
1. Open project folder:
   cd "g:\Course JS\complete-node-bootcamp-master\4-natours\starter"
2. Install:
   npm install
3. Create a `.env` file (see example below)
4. Run in development:
   npm run start:dev
   Or production:
   npm start

## .env example
Replace placeholders with real values.
PORT=3000
NODE_ENV=development
DATABASE=mongodb+srv://<USER>:<PASSWORD>@cluster0.mongodb.net/natours?retryWrites=true&w=majority
DATABASE_PASSWORD=your_db_password
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
EMAIL_USERNAME=you@example.com
EMAIL_PASSWORD=emailpassword

## Seed / demo data
If the project includes dev-data scripts:
Import sample data:
node ./dev-data/data/import-dev-data.js --import
Delete sample data:
node ./dev-data/data/import-dev-data.js --delete

## Common Git notes
- If remote has commits you don't have:
  git pull origin main --allow-unrelated-histories
  resolve conflicts, then:
  git add .
  git commit -m "Merge changes"
  git push --set-upstream origin main

- If Windows credential issues occur: use Credential Manager to remove old git:https://github.com entries, then push again (use a Personal Access Token as password if prompted).

## Scripts (example)
- npm run start         — start production server
- npm run start:dev     — start with nodemon (development)
- npm test              — run tests (if present)

## Troubleshooting
- Authentication prompts: complete sign-in in the browser when Git asks
- Merge conflicts: resolve in editor, stage, commit, push
- MongoDB connection errors: verify connection string and DATABASE_PASSWORD

## Contributing
This is a learning project; follow the course author's structure. Create branches for features/bugfixes and open PRs.

## License
Add a license file as needed (e.g., MIT).