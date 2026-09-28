# WEB103 Project 2 - Eve's Game Shelf

Submitted by: **Evelyn Rodriguez**

About this web app: **A listicle app showcasing the board and card games in my personal collection, including Magic: The Gathering, Disney Lorcana, Star Wars: Unlimited, Riftbound, Animal Crossing Monopoly, Crabs in a Bucket: Shrimpocalypse, Mantis, and Uno.**

Time spent: **3** hours

## Required Features

The following **required** functionality is completed:

<!-- Make sure to check off completed functionality below -->
- [x] **The web app uses only HTML, CSS, and JavaScript without a frontend framework**
- [x] **The web app is connected to a PostgreSQL database, with an appropriately structured database table for the list items**
  - [X] **NOTE: Your walkthrough added to the README must include a view of your Render dashboard demonstrating that your Postgres database is available**
  - [X] **NOTE: Your walkthrough added to the README must include a demonstration of your table contents. Use the psql command 'SELECT * FROM tablename;' to display your table contents.**


The following **optional** features are implemented:

- [x] The user can search for items by a specific attribute (name or category)

The following **additional** features are implemented:

- [x] Separate `client` and `server` folders, with a `config` folder for the database connection and a seed script
- [x] Parameterized SQL queries and safe DOM methods (`createElement` and `textContent`) instead of `innerHTML`, to prevent XSS
- [x] Detail pages at unique URLs (e.g. `/games/uno`) and a custom 404 page

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://github.com/user-attachments/assets/316ddf8b-7d51-4b9f-9d5d-e5251073adbd' title='Video Walkthrough' width='600' alt='Video Walkthrough' />

<!-- Replace this with whatever GIF tool you used! -->
GIF created with Mac screen recording
<!-- Recommended tools:
[Kap](https://getkap.co/) for macOS
[ScreenToGif](https://www.screentogif.com/) for Windows
[peek](https://github.com/phw/peek) for Linux. -->

## Notes

The biggest challenge was connecting Express to a Render PostgreSQL database for the first time since getting the `.env` file and `pg` connection pool set up correctly, and switching from an in-memory JavaScript array to real SQL queries.

The screen recording doesn't work so I had to use Mac, and the quality isn't good.

## License

Copyright 2026 Evelyn Rodriguez

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
