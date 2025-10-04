Pokémon Database
A comprehensive database of Pokémon information, featuring detailed stats, abilities, and interactive cards with integrated Pokémon cries. All data is sourced from the PokeAPI.
Features
Extensive Pokémon Data: Each Pokémon entry includes:
Types: Primary and secondary types.
Abilities: All abilities, including hidden ones.
Base Stats: HP, Attack, Defense, Special Attack, Special Defense, Speed.
Calculated Stats:
Total: Sum of all base stats.
Product: Product of all base stats (HP * Attack * Defense * Sp. Atk * Sp. Def * Speed).
Dex #: National Pokédex number.
Gen: Pokémon's debut generation.
Height & Weight: Physical dimensions.
Auto-generated: Grass Knot Power: Calculated based on the Pokémon's weight.
20 if target weighs less than 10 kg
40 if less than 25 kg
60 if less than 50 kg
80 if less than 100 kg
100 if less than 200 kg
120 if greater than or equal to 200 kg[1][2][3][4][5]
Egg Group(s): Categories for breeding purposes.
Gender Ratio: Proportion of male to female (e.g., 50% M, 50% F, or Genderless).
Cry: The latest official Pokémon cry.
Filters: Robust filtering options for all listed specifications.
Interactive Cards: Visually appealing cards displaying an image centrally and all specs at the bottom. Touching the Pokémon image on a card plays its latest cry.
Technologies Used
Data Fetching & Processing: Python (with requests library)
Frontend: React.js (or similar JavaScript framework)
Styling: CSS
API: PokeAPI for Pokémon data[6][7][8] and pkmnapi.com or the PokeAPI Cries GitHub repository for cries.
Setup and Installation
1. Clone the Repository
code
Bash
git clone https://github.com/your-username/pokemon-database.git
cd pokemon-database
2. Fetch Pokémon Data
Navigate to the scripts directory and run the Python script to fetch data from PokeAPI. This script will populate data/pokemon_data.json.
code
Bash
cd scripts
pip install requests
python fetch_pokemon_data.py
3. Run the Frontend Application
Navigate to the frontend directory and install dependencies, then start the React application.
code
Bash
cd ../frontend
npm install
npm start
This will open the application in your browser (usually at http://localhost:3000).
Data Fields Explained
All data is fetched from PokeAPI (https://pokeapi.co/api/v2/).[[6](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQF7TWhLnRXC1zLU4RScLmUi7SDpDBn6n5NjZNhlypjYxjugnCh-xqUQB4m7Mw5RDfsgbSI2JmrLajVh3zT1QZDo44zWBeSANXbXc3dcVRn8D5czrsZeNk0tgLXTbXI8uQ7MihON)][[7](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQHl_7h8r0B44sVgnY3exiBgQbGDrClsH5FMWOAdVXBZaBQsX5tfTEq_xtbJUiX7Yy3QHbV2oNLCX4pnYw3WRmisYhULs7HnLQV00yagjXMMquL2LG4s)][[8](https://www.google.com/url?sa=E&q=https%3A%2F%2Fvertexaisearch.cloud.google.com%2Fgrounding-api-redirect%2FAUZIYQGQxPkYW-JqD__MvnP3NmVglf-U0Mpah1HBCsQsMY1g1-2eJbhdeeuX7WdFBJvPDqUQn01KeJClib8IK-28VMa6E_aijM5jpRowdX6wUz0%3D)]
Types: Accessible via /pokemon/{id_or_name}.[6][7]
Ability: Accessible via /pokemon/{id_or_name}.[6][7]
Base Stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed): Accessible via /pokemon/{id_or_name}.
Dex # (ID): Accessible via /pokemon/{id_or_name}.[9]
Gen: Requires fetching /pokemon-species/{id_or_name} and then linking to the generation resource.
Height & Weight: Accessible via /pokemon/{id_or_name}.[9]
Egg Group(s): Accessible via /pokemon-species/{id_or_name}.[10][11][12][13][14]
Gender ratio: Accessible via /pokemon-species/{id_or_name}. This typically provides a gender_rate value (0-8), where 0 is genderless, and 8 is female-only. Other values correspond to male/female ratios (e.g., 1 is 12.5% female, 87.5% male).[15][16][17][18]
Cry: The latest cry URL can be found directly in the /pokemon/{id_or_name} endpoint under the cries object, specifically cries.latest.[8] Alternatively, a dedicated Pokémon Cries API (pkmnapi.com) or the PokeAPI Cries GitHub repository provides these in .ogg format.[19][20]
