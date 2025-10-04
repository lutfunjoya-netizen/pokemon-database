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
120 if greater than or equal to 200 kg
Egg Group(s): Categories for breeding purposes.
Gender Ratio: Proportion of male to female (e.g., 50% M, 50% F, or Genderless).
Cry: The latest official Pokémon cry.
Filters: Robust filtering options for all listed specifications.
Interactive Cards: Visually appealing cards displaying an image centrally and all specs at the bottom. Touching the Pokémon image on a card plays its latest cry.
Technologies Used
Data Fetching & Processing: Python (with requests library)
Frontend: React.js (or similar JavaScript framework)
Styling: CSS
API: PokeAPI for Pokémon data and pkmnapi.com or the PokeAPI Cries GitHub repository for cries.
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
All data is fetched from PokeAPI (https://pokeapi.co/api/v2/).
Types: Accessible via /pokemon/{id_or_name}.
Ability: Accessible via /pokemon/{id_or_name}.
Base Stats (HP, Attack, Defense, Sp. Atk, Sp. Def, Speed): Accessible via /pokemon/{id_or_name}.
Dex # (ID): Accessible via /pokemon/{id_or_name}.
Gen: Requires fetching /pokemon-species/{id_or_name} and then linking to the generation resource.
Height & Weight: Accessible via /pokemon/{id_or_name}.
Egg Group(s): Accessible via /pokemon-species/{id_or_name}.
Gender ratio: Accessible via /pokemon-species/{id_or_name}. This typically provides a gender_rate value (0-8), where 0 is genderless, and 8 is female-only. Other values correspond to male/female ratios (e.g., 1 is 12.5% female, 87.5% male).
Cry: The latest cry URL can be found directly in the /pokemon/{id_or_name} endpoint under the cries object, specifically cries.latest.[8] Alternatively, a dedicated Pokémon Cries API (pkmnapi.com) or the PokeAPI Cries GitHub repository provides these in .ogg format.[19][20]
