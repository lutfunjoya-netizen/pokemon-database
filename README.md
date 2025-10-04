# Pokémon Database

A comprehensive database of Pokémon information, featuring detailed stats, abilities, and interactive cards with integrated Pokémon cries. All data is sourced from the [PokeAPI](https://pokeapi.co/).

## Features

*   **Extensive Pokémon Data:** Each Pokémon entry includes:
    *   **Types:** Primary and secondary types.
    *   **Abilities:** All abilities, including hidden ones.
    *   **Base Stats:** HP, Attack, Defense, Special Attack, Special Defense, Speed.
    *   **Calculated Stats:**
        *   **Total:** Sum of all base stats.
        *   **Product:** Product of all base stats (HP \* Attack \* Defense \* Sp. Atk \* Sp. Def \* Speed).
    *   **Dex #:** National Pokédex number.
    *   **Gen:** Pokémon's debut generation.
    *   **Height & Weight:** Physical dimensions.
    *   **Auto-generated: Grass Knot Power:** Calculated based on the Pokémon's weight.
        *   20 if target weighs less than 10 kg
        *   40 if less than 25 kg
        *   60 if less than 50 kg
        *   80 if less than 100 kg
        *   100 if less than 200 kg
        *   120 if greater than or equal to 200 kg
    *   **Egg Group(s):** Categories for breeding purposes.
    *   **Gender Ratio:** Proportion of male to female (e.g., 50% M, 50% F, or Genderless).
    *   **Cry:** The latest official Pokémon cry.
*   **Filters:** Robust filtering options for all listed specifications.
*   **Interactive Cards:** Visually appealing cards displaying an image centrally and all specs at the bottom. Touching the Pokémon image on a card plays its latest cry.

## Technologies Used

*   **Data Fetching & Processing:** Python (with `requests` library)
*   **Frontend:** React.js (or similar JavaScript framework)
*   **Styling:** CSS
*   **API:** [PokeAPI](https://pokeapi.co/) for Pokémon data and [pkmnapi.com](https://pkmnapi.com/) or the PokeAPI Cries GitHub repository for cries.
