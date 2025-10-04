
    """
    Calculates Grass Knot power based on weight in hectograms (PokeAPI default).
    1 kg = 10 hectograms.
    """
    weight_kg = weight_hectograms / 10
    if weight_kg < 10:
        return 20
    elif weight_kg < 25:
        return 40
    elif weight_kg < 50:
        return 60
    elif weight_kg < 100:
        return 80
    elif weight_kg < 200:
        return 100
    else: # weight_kg >= 200
        return 120

def get_pokemon_data(pokemon_id):
    pokemon_url = f"{POKEAPI_BASE_URL}pokemon/{pokemon_id}/"
    species_url = f"{POKEAPI_BASE_URL}pokemon-species/{pokemon_id}/"

    pokemon_response = requests.get(pokemon_url)
    species_response = requests.get(species_url)

    if pokemon_response.status_code != 200 or species_response.status_code != 200:
        print(f"Failed to fetch data for Pokémon ID {pokemon_id}. Skipping.")
        return None

    pokemon_data = pokemon_response.json()
    species_data = species_response.json()

    # Extracting base stats
    stats = {s['stat']['name']: s['base_stat'] for s in pokemon_data['stats']}
    hp = stats.get('hp', 0)
    attack = stats.get('attack', 0)
    defense = stats.get('defense', 0)
    sp_attack = stats.get('special-attack', 0)
    sp_defense = stats.get('special-defense', 0)
    speed = stats.get('speed', 0)

    # Calculate Total and Product
    total_stats = hp + attack + defense + sp_attack + sp_defense + speed
    product_stats = hp * attack * defense * sp_attack * sp_defense * speed

    # Get types
    types = [t['type']['name'] for t in pokemon_data['types']]

    # Get abilities
    abilities = [{'name': a['ability']['name'], 'is_hidden': a['is_hidden']} for a in pokemon_data['abilities']]

    # Get generation from species data
    generation = species_data['generation']['name'].replace('generation-', '').upper()

    # Get egg groups
    egg_groups = [eg['name'] for eg in species_data['egg_groups']]

    # Get gender ratio
    gender_rate = species_data['gender_rate'] # 0 = genderless, 8 = 100% female, -1 = male only (or 12.5% steps)
    gender_ratio = "Genderless"
    if gender_rate == 0:
        gender_ratio = "Genderless"
    elif gender_rate == 8:
        gender_ratio = "100% Female"
    elif gender_rate == -1: # According to some unofficial sources, -1 might imply male only or specific cases. PokeAPI docs state values 0-8. Assuming based on common data.
        gender_ratio = "100% Male (unspecified by PokeAPI 'gender_rate' field)"
    else:
        female_percentage = (gender_rate / 8) * 100
        male_percentage = 100 - female_percentage
        gender_ratio = f"{male_percentage:.1f}% Male, {female_percentage:.1f}% Female"

    # Get height and weight (PokeAPI provides in decimetres and hectograms)
    height_dm = pokemon_data['height']
    weight_hg = pokemon_data['weight']

    # Calculate Grass Knot Power
    grass_knot_power = calculate_grass_knot_power(weight_hg)

    # Get image URL (front_default sprite)
    image_url = pokemon_data['sprites']['front_default']
    if not image_url and pokemon_data['sprites']['other']: # Fallback for some Pokemon that might not have a front_default sprite directly
        if 'official-artwork' in pokemon_data['sprites']['other'] and pokemon_data['sprites']['other']['official-artwork']['front_default']:
            image_url = pokemon_data['sprites']['other']['official-artwork']['front_default']
        elif 'dream_world' in pokemon_data['sprites']['other'] and pokemon_data['sprites']['other']['dream_world']['front_default']:
            image_url = pokemon_data['sprites']['other']['dream_world']['front_default']

    # Get cry URL
    cry_url = pokemon_data['cries']['latest'] # Direct cry URL from PokeAPI

    return {
        "id": pokemon_data['id'],
        "name": pokemon_data['name'].replace('-', ' ').title(),
        "types": types,
        "abilities": abilities,
        "base_stats": {
            "hp": hp,
            "attack": attack,
            "defense": defense,
            "sp_atk": sp_attack,
            "sp_def": sp_defense,
            "speed": speed,
        },
        "total_stats": total_stats,
        "product_stats": product_stats,
        "dex_number": pokemon_data['id'],
        "generation": generation,
        "height_dm": height_dm, # in decimetres
        "weight_hg": weight_hg, # in hectograms
        "grass_knot_power": grass_knot_power,
        "egg_groups": egg_groups,
        "gender_ratio": gender_ratio,
        "image_url": image_url,
        "cry_url": cry_url
    }

def main():
    pokemon_database = []
    # Fetching data for a reasonable number of Pokémon (e.g., first 151 or more)
    # Adjust `num_pokemon` as needed.
    # To fetch all available Pokemon (this can take a long time and many requests)
    # response = requests.get(f"{POKEAPI_BASE_URL}pokemon?limit=100000")
    # if response.status_code == 200:
    #     total_pokemon = response.json()['count']
    #     print(f"Total Pokémon to fetch: {total_pokemon}")
    #     num_pokemon = total_pokemon # Or set a hard limit for testing

    num_pokemon = 151 # Example: First 151 Pokémon. Can be increased.

    print(f"Fetching data for {num_pokemon} Pokémon...")
    for i in range(1, num_pokemon + 1):
        print(f"Fetching Pokémon ID: {i}...")
        data = get_pokemon_data(i)
        if data:
            pokemon_database.append(data)

    os.makedirs('../data', exist_ok=True)
    with open('../data/pokemon_data.json', 'w') as f:
        json.dump(pokemon_database, f, indent=4)
    print(f"Successfully fetched and saved data for {len(pokemon_database)} Pokémon to data/pokemon_data.json")

if __name__ == "__main__":
    main()```

---
